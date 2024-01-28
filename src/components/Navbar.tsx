import { IoMenu } from "react-icons/io5";
import { WiStars } from "react-icons/wi";
import Button from "./Button";
import { useState } from "react";
import Browse from "./Browse";
import Cart from "./Cart";
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import useAuth from "../hooks/useAuth";
import UserLoginIcon from "./UserLoginIcon";



const html = document.documentElement



const Navbar = () => {

  const navigate = useNavigate()
  const [showBrowse, setShowBrowse] = useState(false);
  const { user, isLoading } = useSelector((state: RootState) => state.user.value)
  const logout = useAuth()

  const handleBrowse = () => {
    setShowBrowse(true);
    html.style.overflow = "hidden";
  };

  const closeBrowse = () => {
    setShowBrowse(false);
    html.style.overflow = "";
  };

  return (
    <div className="relative">
      <nav className="w-screen h-20 bg-yellow-100 font-serif font-medium text-lg md:text-xl ">
        <div className="flex h-full items-center justify-between mx-8">
          {/* //navbar left side icons */}
          <div className="flex  items-center justify-center gap-4">
            <div
              onClick={handleBrowse}
              className="flex  items-center justify-center cursor-pointer"
            >
              <IoMenu size={40} />
              <p>Browse</p>
            </div>
            {showBrowse ? <Browse closeBrowse={closeBrowse} /> : null}

            <p onClick={() => navigate('/plans')}  className="cursor-pointer">Pricing</p>
          </div>

          {/* // company Icon */}
          <h1 onClick={() => navigate('/')} className="flex cursor-pointer">
            <span>
              <p className="font-dance text-2xl md:text-4xl">Image</p>
            </span>
            <span>
              <p className="font-rubikdoodle text-2xl md:text-4xl">Mart</p>
            </span>
          </h1>

          {/* //navbar Right side icons */}
          <div className="flex items-center justify-center gap-4">
            <div onClick={() => navigate('/aigen')} className="flex items-center justify-center cursor-pointer">
              <WiStars size={40} />
              <p>Ai Generator</p>
            </div>
            <div onClick={() => navigate('/cart')} className="flex cursor-pointer">
              <Cart size={25} />
            </div>
            {/* //Button or User Symbol */}
            <div>
              { (user && !isLoading) ? (
                <div>
                  <UserLoginIcon username={user.username} />
                </div>
              ) : (
                <div onClick={() => navigate('/login')} className="ml-2">
                <Button heading="Sign in" />
              </div>
              )}
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
