import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface SignupFormInput {
  username: String;
  email: String;
  password: String;
}

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInput>();
  const onSubmit: SubmitHandler<SignupFormInput> = async ({
    username,
    email,
    password,
  }) => {
    try {
      await signup({ username, email, password });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full font-serif mt-12">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className=" font-semibold text-2xl">New to ImageMart ?</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-4">
          <input
            {...register("username", { required: true, minLength: 6 })}
            className="w-[60%] focus:outline-none border border-slate-300 px-5 py-4"
            type="text"
            placeholder="Username"
          />
          {/* errors will return when field validation fails  */}
          {errors.username && (
            <span className=" text-red-600 text-sm  w-[60%]">
              username should be minium 6 character long
            </span>
          )}

          <input
            {...register("email", { required: true })}
            className="w-[60%] focus:outline-none border border-slate-300 px-5 py-4"
            type="email"
            placeholder="email"
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className=" text-red-600 text-sm  w-[60%]">
              This field is required
            </span>
          )}
          <input
            {...register("password", { required: true, minLength: 6 })}
            className="w-[60%] focus:outline-none border border-slate-300 px-5 py-4"
            type="password"
            placeholder="Password"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className=" text-red-600 text-sm  w-[60%]">
              password should be atleast six characters long
            </span>
          )}
          <input
            className="w-[60%] bg-purple-600 text-white px-5 py-4 rounded-lg cursor-pointer"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
