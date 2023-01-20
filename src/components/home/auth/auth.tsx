import { Logo } from "../../parts/logo/logo";
import { Login } from "./login";
import { Register } from "./register";

export const Auth = ({ page }: { page: "Login" | "Register" }) => {
  const Content = () => {
    if (page === "Login") {
      return <Login />;
    } else {
      return <Register />;
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="p-5 w-3/4 h-3/4">
        <Logo />
        <div className="h-full flex items-center justify-center">
          <div className="form h-1/2 w-3/4 flex flex-col items-center">
            <div className="h-full flex flex-col items-center justify-center">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
