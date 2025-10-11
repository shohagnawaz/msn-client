import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const MakeAdmin = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // 🔍 Handle search by email (partial match)
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchEmail.trim()) {
      Swal.fire("Warning", "Please enter an email to search", "warning");
      return;
    }
    try {
      setLoading(true);
      const res = await axiosSecure.get(`/users/search?email=${searchEmail}`);
      setUsers(res.data);
    } catch (error) {
      setUsers([]);
      Swal.fire("Not Found", "No user found with that email", error);
    } finally {
      setLoading(false);
    }
  };

  // 👑 Make a user admin
  const handleMakeAdmin = async (email) => {
    const confirm = await Swal.fire({
      title: `Make ${email} an admin?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, make admin",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.patch(`/users/makeAdmin/${email}`);
        Swal.fire("Success", `${email} is now an admin`, "success");
        handleSearch({ preventDefault: () => {} }); // refresh list
        queryClient.invalidateQueries(["users"]);
      } catch (error) {
        Swal.fire("Error", "Could not update user role", error);
      }
    }
  };

  // 🚫 Remove admin
  const handleRemoveAdmin = async (email) => {
    const confirm = await Swal.fire({
      title: `Remove admin role from ${email}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.patch(`/users/removeAdmin/${email}`);
        Swal.fire("Success", `${email} is no longer admin`, "success");
        handleSearch({ preventDefault: () => {} });
        queryClient.invalidateQueries(["users"]);
      } catch (error) {
        Swal.fire("Error", "Could not remove admin role", error);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Make Admins</h2>

      {/* 🔍 Search Bar */}
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          placeholder="Search user by email"
          className="input input-bordered w-full max-w-md"
        />
        <button className="btn btn-primary ml-2" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* 📋 Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>SL</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td className="capitalize">{user.role || "user"}</td>
                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user.email)}
                      className="btn btn-sm btn-error"
                    >
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user.email)}
                      className="btn btn-sm btn-success"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {users.length === 0 && !loading && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No user data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
