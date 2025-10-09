import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth"; // your existing hook
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const BeAMember = () => {
  const { user } = useAuth(); // e.g. { displayName, email }
  const { register, handleSubmit, reset, formState: { errors }} = useForm();
  const axiosSecure = useAxiosSecure();  

  const onSubmit = async (data) => {
    const memberData = {
      ...data,
      name: user?.displayName || "",
      email: user?.email || "",
      status: "pending",
      created_at: new Date().toISOString()
    };
    console.log("Membership Form Data:", memberData);

    // 👉 Send to backend API here
    axiosSecure.post("/members", memberData)
      .then(res => {
        if(res.data.insertedId){
           Swal.fire({
            icon: "success",
            title: "Application Submitted!",
            text: "Your application is pending approval."
          });
        }
      });    
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto bg-base-200 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl mt-10">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-2">Be A Member</h2>
      <p className="text-center text-gray-500 mb-6">
        Join our community and enjoy exclusive benefits!
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-base-100 p-6"
      >
        {/* Name */}
        <div className="form-control">
          <label className="label font-semibold">Full Name</label>
          <input
            type="text"
            defaultValue={user?.displayName || ""}
            readOnly
            {...register("name")}
            className="input input-bordered w-full"
          />
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label font-semibold">Email</label>
          <input
            type="email"
            defaultValue={user?.email || ""}
            readOnly
            {...register("email")}
            className="input input-bordered w-full"
          />
        </div>

        {/* Age */}
        <div className="form-control">
          <label className="label font-semibold">Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            {...register("age", { required: "Age is required" })}
            className="input input-bordered w-full"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

        {/* Region */}
        <div className="form-control">
          <label className="label font-semibold">Region</label>
          <select
            {...register("region", { required: "Region is required" })}
            className="select select-bordered w-full"
          >
            <option value="">Select region</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Barishal">Barishal</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
          {errors.region && (
            <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>
          )}
        </div>

        {/* District */}
        <div className="form-control">
          <label className="label font-semibold">District</label>
          <input
            type="text"
            placeholder="Enter your district"
            {...register("district", { required: "District is required" })}
            className="input input-bordered w-full"
          />
          {errors.district && (
            <p className="text-red-500 text-sm mt-1">
              {errors.district.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="form-control">
          <label className="label font-semibold">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^01[3-9]\d{8}$/,
                message: "Enter a valid Bangladeshi phone number",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* NID Number */}
        <div className="form-control">
          <label className="label font-semibold">National ID Number</label>
          <input
            type="text"
            placeholder="Enter your NID number"
            {...register("nid", {
              required: "NID number is required",
              minLength: { value: 10, message: "Must be at least 10 digits" },
            })}
            className="input input-bordered w-full"
          />
          {errors.nid && (
            <p className="text-red-500 text-sm mt-1">{errors.nid.message}</p>
          )}
        </div>

        {/* Extra Info (Full width) */}
        <div className="form-control sm:col-span-2">
          <label className="label font-semibold">Additional Information</label>
          <textarea
            placeholder="Write any other relevant information..."
            {...register("extraInfo")}
            className="textarea textarea-bordered h-28 w-full"
          ></textarea>
        </div>

        {/* Submit Button (Full width) */}
        <div className="sm:col-span-2 text-center">
          <button
            type="submit"
            className="btn btn-primary mt-2 text-lg tracking-wide"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default BeAMember;
