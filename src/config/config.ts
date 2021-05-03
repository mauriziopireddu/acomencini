import { Pages } from "./pages";

export const config = {
  acronym: "AC",
  persona: "Alessandra Comencini",
  social: {
    twitter: "https://twitter.com/acomencini1",
    instagram: "https://www.instagram.com/acomencini",
    linkedin: "https://www.linkedin.com/in/alessandra-comencini",
    goodreads:
      "https://www.goodreads.com/user/show/114878357-alessandra-comencini",
  },
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
