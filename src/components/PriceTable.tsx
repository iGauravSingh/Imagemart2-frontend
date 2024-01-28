import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import {  toast } from "react-toastify";
import Button from "./Button";

interface PriceTableProps {
  plan: {
    id: number;
    name: string;
    p1: string;
    p2: string;
    p3: string;
    price: number;
  };
}

const PriceTable = ({ plan }: PriceTableProps) => {

    const handleClick = () => {
       //console.log('in handle click')
        if(plan.id === 2){
            toast.error("Work in Progress !", {
                position: "top-right"
              })
        }
        //console.log(plan.id)
        
    }

  return (
    <div className=" w-64 h-96 font-serif">
      <div className="w-full h-full border-2 border-black flex flex-col items-center">
        {/* heading  */}
        <div className="border-b-2 border-black w-full flex justify-center">
          <h3 className=" font-serif font-semibold text-xl  py-6">
            {plan.name}
          </h3>
        </div>

        {/* points  */}
        <div className=" px-2 w-full flex flex-col gap-4 mt-4">
          {/* p1 */}
          <div className=" flex gap-4 items-center">
            <AiOutlineCheckCircle color='green' size={30} />
            <p>{plan.p1}</p>
          </div>

          {/* p2 */}
          <div className=" flex gap-4 items-center">
            <AiOutlineCheckCircle color='green' size={30} />
            <p>{plan.p2}</p>
          </div>

          {/* p3 */}
          <div className=" flex gap-4 items-center">
            {plan.name === 'Basic Plan' ? <AiOutlineCloseCircle color='red' size={30} /> : <AiOutlineCheckCircle color='green' size={30} />}
            <p>{plan.p3}</p>
          </div>
        </div>

        {/* price  */}
        <div className=" mt-4">
            <p className=" font-serif text-2xl font-semibold">₹ {plan.price}</p>
        </div>

        {/* button  */}
        <div onClick={handleClick} className=" mt-6">
            <Button heading="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
