import Link from "next/link";
import { Logo } from "../../parts/logo/logo";

export const Navbar = () => {
  return (
    <nav className="nav w-full shadow-xl h-16 flex items-center justify-between px-3.5">
      <Logo />
      <Link href="/login">
        <button className="login-btn text-2xl font-thin">Login</button>
      </Link>
    </nav>
  );
};
