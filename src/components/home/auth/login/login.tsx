import { Logo } from "../../../parts/logo/logo";
import { FormField } from "../parts/form-field/form-field";

export const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="p-5 rounded-lg w-3/4 h-3/4">
        <Logo />
        <div className="h-full flex items-center justify-center">
          <div className="form h-1/2 w-3/4 flex flex-col items-center">
            <FormField
              field="username"
              label="Login"
              type="text"
              className="mb-4 md:flex md:flex-col"
            />
            <FormField field="password" label="Password" type="password" className="md:flex md:flex-col" />
            <button className="w-28 bg-orange-400 p-1 rounded-lg text-white text-xl mt-6 cursor-pointer hover:bg-orange-500">
              Login
            </button>
            <footer className="text-center mt-6">
              <span className="text-lg font-light">{`Don't have an account?`}</span>
              <span className="text-lg text-orange-500 underline cursor-pointer font-light md:block">Sign up</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
