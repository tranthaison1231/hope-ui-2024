import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function PrivateLayout() {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" />;

  return (
    <div>
      <Header />
      <div className="flex">
        <Navbar />
        <div className="flex-1 bg-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
