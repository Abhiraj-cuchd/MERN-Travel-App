// import { useSelector } from "react-redux";
import admin from "../../assets/admin.jpeg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-xl font-semibold text-center my-7">Admin Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={admin}
          alt="Admin pic"
          className="rounded-full h-25 w-25 object-cover self-center mt-2 mb-5 hover:transform hover:scale-150 transition duration-500 ease-in-out"
        />

        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
          readOnly
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          readOnly
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          readOnly
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-3 rounded-lg"
          id="confirmPassword"
          readOnly
        />
        <div className="flex max-w-lg justify-between">
          <Link to="/update-profile">
            <button className="bg-blue-500 text-white p-3 rounded-lg lg:ml-20">
              Update Profile
            </button>
          </Link>
          <Link to="/Dashboard">
            <button className="bg-purple-500 text-white p-3 rounded-lg sm:ml-4 lg:mr-20">
              Go To Dashboard
            </button>
          </Link>
        </div>
        <div className="flex max-w-lg justify-between">
          <button className="bg-red-500 text-white p-3 rounded-lg lg:ml-20">
            Delete Account
          </button>
          <button className="bg-orange-500 text-white p-3 rounded-lg lg:mr-20">
            Admin Sign Out
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
