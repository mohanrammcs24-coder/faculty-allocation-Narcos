import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    // Hardcoded Demo Login
    if (
      (formData.email === "admin@fwps.edu" &&
        formData.password === "Admin@123") ||
      (formData.email === "hod@fwps.edu" && formData.password === "Hod@1234") ||
      (formData.email === "faculty@fwps.edu" &&
        formData.password === "Faculty@123")
    ) {
      toast.success("Welcome back!");

      localStorage.setItem(
        "user",
        JSON.stringify({
          name:
            formData.email === "admin@fwps.edu"
              ? "Dr. Rajesh Kumar"
              : formData.email === "hod@fwps.edu"
                ? "Dr. Priya Sharma"
                : "Dr. Arun Kumar",
          email: formData.email,
          role:
            formData.email === "admin@fwps.edu"
              ? "ADMIN"
              : formData.email === "hod@fwps.edu"
                ? "HOD"
                : "FACULTY",
        }),
      );

      navigate("/dashboard");
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">
        Welcome back
      </h2>

      <p className="text-sm text-gray-400 mb-6">
        Sign in to your account to continue
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>

          <input
            type="email"
            placeholder="you@college.edu"
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
            placeholder="••••••••"
            className="mt-1 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            {...register("password", {
              required: "Password is required",
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
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary font-medium">
          Register
        </Link>
      </p>

      <div className="mt-6 p-3 rounded-xl bg-primary/5 border border-primary/10 text-xs text-gray-500 space-y-1">
        <p className="font-medium text-gray-600">Demo Credentials</p>

        <p>
          <strong>Admin:</strong> admin@fwps.edu / Admin@123
        </p>

        <p>
          <strong>HOD:</strong> hod@fwps.edu / Hod@1234
        </p>

        <p>
          <strong>Faculty:</strong> faculty@fwps.edu / Faculty@123
        </p>
      </div>
    </div>
  );
};

export default Login;
