import { IoMdSearch } from "react-icons/io";
import backwall from "../assets/backwall.jpg";

const HeroImage = () => {
  return (
    <div className="w-screen h-96 realtive">
      {/* //image banner */}
      <div className=" w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={backwall}
          alt="background"
        />
      </div>

      {/* // search bar */}
      <div className="absolute w-full top-48">
        <div className="flex justify-center">
          <div className="h-16 w-3/4 md:w-1/2 bg-slate-200 rounded-xl flex items-center justify-between px-4 gap-2">
            <IoMdSearch size={40} />
            <input className="text-lg bg-slate-200 focus:outline-none" style={{ width: 'calc(100% - 40px)' }} type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
