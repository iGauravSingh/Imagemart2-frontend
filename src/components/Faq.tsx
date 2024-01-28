import { useState } from "react";
import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [one, setOne] = useState(false);
  const [two, settwo] = useState(false);

  const handleOne = () => {
    setOne((prevState) => !prevState);
  };

  const handleTwo = () => {
    settwo((prevState) => !prevState);
  };

  return (
    <div className=" w-screen mt-16 mb-36">
      <div className="flex flex-col justify-center items-center">
        <Button heading="FAQ About Us." />
        {/* // question one  */}
        <div className=" cursor-pointer mt-12 w-[500px] " onClick={handleOne}>
          {/* // question  */}
          <div className="text-lg font-bold font-montse flex justify-between items-center  bg-purple-400 py-4 px-4 rounded-lg">
            <p>Who are we?</p>
            {one ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}
          </div>
          {/* // answer */}
          <div className={`${one ? null : "hidden"}`}>
            <p>We are Image mart we aim to provide good ai generated images.</p>
          </div>
        </div>

        {/* // ques two  */}
        <div className=" cursor-pointer mt-12 w-[500px] " onClick={handleTwo}>
          {/* // question  */}
          <div className="text-lg font-bold font-montse flex justify-between items-center bg-purple-400 py-4 px-4 rounded-lg">
            <p>Where do we get our images from?</p>
            {two ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}
          </div>
          {/* // answer */}
          <div className={`${two ? null : "hidden"}`}>
            <p>
              We generate images on our own and provide you with cheap images
              generated via prompt for your use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
