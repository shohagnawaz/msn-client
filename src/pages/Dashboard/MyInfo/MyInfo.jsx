import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyInfo = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: infos = [], refetch } = useQuery({
    queryKey: ["my-infos", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/infos?.email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/infos/${id}`);
      refetch(); // refresh table after delete
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* Table Head */}
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>About</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {infos.map((info) => (
            <tr key={info._id}>
              <td>{info.fullName}</td>
              <td>{info.email}</td>
              <td>{info.age}</td>
              <td>{info.phone}</td>
              <td>{info.street}</td>
              <td>{info.city}</td>
              <td>{info.state}</td>
              <td>{info.zip}</td>
              <td>{info.about}</td>
              <td>{info.category}</td>
              <td>
                <button
                  onClick={() => handleDelete(info._id)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyInfo;
