import Link from "next/link";
import { FormField } from "./parts/form-field/form-field";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginProps } from "../../../server/prisma/schema/auth.schema";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit: SubmitHandler<LoginProps> = () => console.log("asdsad");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          field="username"
          label="Username"
          type="text"
          className="mb-4 md:flex md:flex-col"
          {...register("username")}
        />
        <FormField
          field="password"
          label="Password"
          type="password"
          className="md:flex md:flex-col"
          {...register("password")}
        />
        <button
          type="submit"
          className="w-28 bg-orange-400 p-1 rounded-lg text-white text-xl mt-6 cursor-pointer hover:bg-orange-500"
        >
          Login
        </button>
        <footer className="text-center mt-6">
          <span className="text-lg font-light">{`Don't have an account?`}</span>
          <Link href="/register">
            <span className="text-lg text-orange-500 underline cursor-pointer font-light md:block">
              Sign up
            </span>
          </Link>
        </footer>
      </form>
    </>
  );
};
