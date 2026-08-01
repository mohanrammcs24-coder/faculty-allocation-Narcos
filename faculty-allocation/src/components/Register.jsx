import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    // Demo Registration
    localStorage.setItem("registeredUser", JSON.stringify(formData));

    toast.success("Registration Successful!");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">
        Create Account
      </h2>

      <p className="text-sm text-gray-400 mb-6">
        Get started with your institution account
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Full Name</label>

          <input
            type="text"
            className="mt-1 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            {...register("name", {
              required: "Name is required",
            })}
          />

          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>

          <input
            type="email"
            className="mt-1 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>

          <input
            type="password"
            className="mt-1 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Minimum 8 characters",
              },
            })}
          />

          {errors.password && (
            <p className="text-xs text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary-solid w-full py-2.5 text-sm font-medium disabled:opacity-60"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-medium">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
