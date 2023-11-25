import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import About from "./Pages/About";
import Profile from "../src/Pages/Admin/Profile";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Components/PrivateRoute";
import UpdateProfile from "./Pages/Admin/UpdateProfile";
import Dashboard from "./Pages/Admin/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer theme="dark" position="top-left" autoClose={3500} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secure/admin-login" element={<Login />} />
        <Route path="/secure/admin-register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
