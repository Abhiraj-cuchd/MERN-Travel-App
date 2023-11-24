import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/User/userSlice";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      toast.success("Login successful. Welcome to Travellio.");
      navigate("/");
    } catch (err) {
      toast.error("Login failed. Please try again.");
      dispatch(signInFailure(err.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-extrabold my-7">Admin Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-[#009DAE] p-2 rounded-lg shadow-sm text-xl text-white  hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      <div className="mt-5">
        <p className="text-center">
          Dont have an account?
          <span className="text-[#009DAE] font-bold">
            {" "}
            Ask Owner for Registration{" "}
          </span>
        </p>
      </div>
      {error && <p className="text-red-500 mt-5">{toast.error(error, {toastId: 'Invalid User'})}</p>}
    </div>
  );
};

export default Login;
