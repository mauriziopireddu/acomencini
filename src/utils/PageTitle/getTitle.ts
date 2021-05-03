import { config, Pages } from "config";

const { persona } = config;

export const getTitle = (pageName?: Pages, { separator = " | " } = {}) => {
  if (!pageName) {
    return persona;
  }
  return `${pageName}${separator}${persona}`;
};
