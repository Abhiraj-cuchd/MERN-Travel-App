import admin from "../../assets/admin.jpeg";

const UpdateProfile = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-xl text-slate-700 font-semibold text-center my-7">
        Update Your Profile
      </h1>
      <form className="flex flex-col gap-4">
        <img
          src={admin}
          alt="Admin pic"
          className="rounded-full h-25 w-25 object-cover self-center mt-2 mb-5 cursor-pointer"
        />
        <input
          type="text"
          autoFocus
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-3 rounded-lg"
          id="confirmPassword"
        />
        <button className="bg-slate-900 text-white rounded-md shadow-sm p-2 uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
