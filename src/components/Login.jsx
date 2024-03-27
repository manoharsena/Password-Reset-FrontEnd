import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = ({ setUsername }) => {
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        "https://localhost:4000/api/user/login",
        values
      );
      if (res.status === 200) {
        setUsername(res.data.data.username);
        toast.success(res.data.message);
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("User does not exist or Invalid Password");
      console.log(error.response);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div
      className="mx-auto p-5 mt-5 rounded-3"
      style={{ width: "600px" }}
    >
      <h1 className="text-center mb-4">Login</h1>
      <form
        className="p-5 bg-light w-100 mx-auto rounded-3"
        style={{ fontSize: "20px" }}
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={formik.values.email}
            style={{ height: "60px", fontSize: "20px", border:"2px solid lightblue" }}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.email}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={formik.values.password}
            style={{ height: "60px", fontSize: "20px", border:"2px solid lightblue" }}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.password}</span>
        </div>
        <div>
          <button type="submit" style={{ fontSize: "20px" }} className="btn btn-success mt-3">
            Sign in
          </button>
        </div>
        <div className="mt-3">
          <span>You dont have an account ? </span>
          <Link
            className="link-primary text-decoration-underline"
            to="/register"
          >
            Register
          </Link>
        </div>
        <div className="mt-3">
          <Link to="/forgot-password" className="link-danger">
            Forgot Password?{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
