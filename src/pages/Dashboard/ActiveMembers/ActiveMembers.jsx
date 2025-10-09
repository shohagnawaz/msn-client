import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ActiveMembers = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const axiosSecure = useAxiosSecure();

  // Fetch active members
  const { data: activeMembers = [], isLoading } = useQuery({
    queryKey: ["activeMembers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/members/active");
      return res.data;
    },
  });

  // Handle deactivate
  const handleDeactivate = async (member) => {
    const confirm = await Swal.fire({
      title: `Deactivate ${member.name}?`,
      text: "This will make the member inactive.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, deactivate",
      cancelButtonText: "Cancel",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.patch(
          `/members/${member._id}`,
          { status: "inactive" }
        );

        if (res.data.modifiedCount > 0) {
          Swal.fire("Success", `${member.name} deactivated`, "success");
          queryClient.invalidateQueries(["activeMembers"]);
        }
      } catch (error) {
        Swal.fire("Error", "Something went wrong!", error);
      }
    }
  };

  // Filter members by search
  const filteredMembers = activeMembers.filter((m) =>
    m.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div className="text-center py-10">Loading active members...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Active Members</h2>

      {/* Search bar */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="input input-bordered input-sm w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Region</th>
              <th>District</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member, index) => (
              <tr key={member._id}>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.region}</td>
                <td>{member.district}</td>
                <td className="text-green-600 font-semibold">{member.status}</td>
                <td>
                  <button
                    onClick={() => handleDeactivate(member)}
                    className="btn btn-sm btn-error btn-outline"
                  >
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
            {filteredMembers.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  No active members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveMembers;
