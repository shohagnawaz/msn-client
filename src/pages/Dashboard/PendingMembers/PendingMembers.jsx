import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PendingMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure()

  // Load pending members using TanStack Query
  const { data: pendingMembers = [], isLoading } = useQuery({
    queryKey: ["pendingMembers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/members/pending");
      return res.data;
    },
  });

  // Handle approve/cancel
  const handleAction = async (member, action) => {
    const confirm = await Swal.fire({
      title: `Are you sure you want to ${action} this application?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: `Yes, ${action}`,
      cancelButtonText: "Cancel",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.patch(`/members/${member._id}`,
          {
            status: action === "approve" ? "active" : "cancelled",
          }
        );

        if (res.data.modifiedCount > 0) {
          Swal.fire("Success", `Application ${action}d successfully!`, "success");
          setSelectedMember(null);
          queryClient.invalidateQueries(["pendingMembers"]); // refresh data
        }
      } catch (error) {
        Swal.fire("Error", "Something went wrong!", error);
      }
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading pending members...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Pending Members</h2>

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingMembers.map((member, index) => (
              <tr key={member._id}>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.region}</td>
                <td>{member.district}</td>
                <td>
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="btn btn-sm btn-outline btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            {pendingMembers.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No pending members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedMember && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-2">{selectedMember.name}</h3>
            <div className="space-y-1 text-sm">
              <p><b>Email:</b> {selectedMember.email}</p>
              <p><b>Phone:</b> {selectedMember.phone}</p>
              <p><b>Age:</b> {selectedMember.age}</p>
              <p><b>Region:</b> {selectedMember.region}</p>
              <p><b>District:</b> {selectedMember.district}</p>
              <p><b>NID:</b> {selectedMember.nid}</p>
              <p><b>Status:</b> {selectedMember.status}</p>
            </div>

            <div className="modal-action flex justify-between mt-4">
              <button
                onClick={() => handleAction(selectedMember, "approve")}
                className="btn btn-success btn-sm"
              >
                Approve
              </button>
              <button
                onClick={() => handleAction(selectedMember, "cancel")}
                className="btn btn-error btn-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => setSelectedMember(null)}
                className="btn btn-outline btn-sm"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default PendingMembers;
