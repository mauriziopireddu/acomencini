import {
  faGoodreads,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import { Pages } from "./pages";

export const config = {
  acronym: "AC",
  persona: "Alessandra Comencini",
  socials: [
    { link: "https://twitter.com/acomencini1", icon: faTwitterSquare },
    { link: "https://www.instagram.com/acomencini", icon: faInstagram },
    {
      link: "https://www.linkedin.com/in/alessandra-comencini",
      icon: faLinkedin,
    },
    {
      link: "https://www.goodreads.com/user/show/114878357-alessandra-comencini",
      icon: faGoodreads,
    },
  ],
  pages: {
    [Pages.Home]: {
      name: "Home",
      path: "/",
    },
    [Pages.About]: {
      name: "About",
      path: "/about",
    },
    [Pages.Blog]: {
      name: "Blog",
      path: "/blog",
    },
    [Pages.Contact]: {
      name: "Contact",
      path: "/contact",
    },
    [Pages.Portfolio]: {
      name: "Portfolio",
      path: "/portfolio",
    },
    [Pages.Notfound]: {
      name: "404 Not Found",
    },
  },
};
