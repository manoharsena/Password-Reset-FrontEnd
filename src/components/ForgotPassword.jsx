import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const initialValues = { email: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required("Email is required"),
  });

  const onSubmit = async (values) => {
    const btn = document.getElementById("sendEmailBtn");
    try {
      let res = await axios.post(
        "https://password-reset-backend-16ua.onrender.com/api/user/forgotPassword",
        values
      );
      if (res.status === 201) {
        toast.success("Password reset link has been sent to your mail");
        btn.disabled = true;
      }
    } catch (error) {
      toast.error("Error Occurred please try after some time");
      console.log(error);
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
      style={{ width: "700px" }}
    >
      <h1 className="text-center mb-4">Forgot Password</h1>
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
        <div class = "d-flex">
          <button id="sendEmailBtn" type="submit" style={{ fontSize: "20px" }} className="btn-success btn">
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
