import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface UserLoginIconProps {
  username: string;
}

const dropmenu = ["Profile", "Dashboard", "Logout"];

const UserLoginIcon = ({ username }: UserLoginIconProps) => {

  const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState(false);
  const { logout } = useAuth()

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logout()
    navigate(0)
    navigate('/')
  }

  const userInitial = username[0].toUpperCase();
  return (
    <div className=" relative">
      <div
        onClick={handleDropdown}
        className="h-12 w-12 bg-green-900 hover:border-2 rounded-full flex justify-center items-center cursor-pointer"
      >
        <p className=" text-xl font-serif text-white">{userInitial}</p>
      </div>
      {showDropdown && (
        <div className=" absolute top-16 right-1 bg-cyan-100 flex flex-col gap-4 px-8 py-4 z-50">
          <p className=" cursor-pointer">Profile</p>
          <p className=" cursor-pointer">Dashboard</p>
          <p onClick={handleLogout} className=" cursor-pointer">Logout</p>
        </div>
      )}
    </div>
  );
};

export default UserLoginIcon;
