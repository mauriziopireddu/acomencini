import Link from "next/link";
import { config } from "config";
import { Hamburger } from "./Hamburger";
import { NavLink } from "./NavLink";

const { About, Blog, Portfolio, Contact } = config.pages;

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <span className="font-semibold font-heading text-3xl tracking-tight">
          <Link href="/">
            <a>{config.acronym}</a>
          </Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <Hamburger />
      </div>
      <div className="md:items-end hidden lg:flex">
        <NavLink page={About} />
        <NavLink page={Blog} />
        <NavLink page={Portfolio} />
        <NavLink page={Contact} />
      </div>
    </nav>
  );
};
