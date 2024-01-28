import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface SigninFormInput {
  email: String;
  password: String;
}

const Signin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormInput>();
  const onSubmit: SubmitHandler<SigninFormInput> = async ({
    email,
    password,
  }) => {
    try {
      await login({ email, password });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full font-serif mt-12">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className=" font-semibold text-2xl">Welcome Back</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-4">
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
            type="text"
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

export default Signin;
