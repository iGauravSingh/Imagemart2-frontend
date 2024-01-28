
import { useState } from "react"
import authback from "../assets/authback.jpg"
import Signin from "../components/Signin"
import Signup from "../components/Signup"

const Authentication = () => {

    const [formState, setFormState] = useState("signin")

    const handleClick = () => {
        if(formState === 'signin') {
            setFormState('signup')
        } else {
            setFormState('signin')
        }
    }

  return (
    <div className="flex h-screen w-screen">
        {/* // Image section  */}
        <img className= "h-full md:w-[75%] hidden md:block  object-cover" src={authback} alt="background" />
        

        {/* // login signup section  */}
        <div className="h-full w-full">
            <div className="flex justify-between mt-20 mx-40">
                <h3 onClick={handleClick} className={` font-serif font-medium text-lg ${formState ==='signin' ? 'border-b-4 border-purple-600' : 'null'} cursor-pointer `}>SIGN IN</h3>
                <h3 onClick={handleClick} className={` font-serif font-medium text-lg  ${formState ==='signup' ? 'border-b-4 border-purple-600' : 'null'} cursor-pointer `}>SIGN UP</h3>
            </div>
            {formState === 'signin' ? (
                <Signin />
            ) : (
                <Signup />
            )}
        </div>
    </div>
  )
}

export default Authentication