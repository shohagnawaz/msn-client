import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    axiosSecure.post("/infos", data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        // SweetAlert2 success popup
        Swal.fire({
          title: "Success!",
          text: "Your information has been submitted successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    });

    // reset form after submit
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-2">Add Information</h1>
      <p className="text-center mb-6">
        Please fill in the details below, divided into sections
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 bg-base-100 shadow-xl p-6 rounded-xl"
      >
        {/* Section 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              {...register("fullName", { required: "Name is required" })}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}

            <input
              type="number"
              placeholder="Age"
              className="input input-bordered w-full"
              {...register("age")}
            />

            <input
              type="phone"
              placeholder="Mobile"
              className="input input-bordered w-full"
              {...register("phone")}
            />
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Address Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Street Address"
              className="input input-bordered w-full"
              {...register("street")}
            />
            <input
              type="text"
              placeholder="City"
              className="input input-bordered w-full"
              {...register("city")}
            />
            <input
              type="text"
              placeholder="State"
              className="input input-bordered w-full"
              {...register("state")}
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="input input-bordered w-full"
              {...register("zip")}
            />
          </div>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <textarea
              placeholder="About You"
              className="textarea textarea-bordered w-full"
              {...register("about")}
            />
            <select
              className="select select-bordered w-full"
              {...register("category")}
            >
              <option value="">Select Category</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-8">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInfo;
