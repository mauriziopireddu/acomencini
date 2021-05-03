import Link from "next/link";

interface Props {
  page: {
    name: string;
    path: string;
  };
}

export const NavLink = ({ page }: Props) => (
  <Link href={page.path}>
    <a className="text-white ml-8 font-heading transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
      {page.name}
    </a>
  </Link>
);
