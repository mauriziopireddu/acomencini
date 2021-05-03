import { config } from "config";

const { persona } = config;

export const getTitle = (pageName?: string, { separator = " | " } = {}) => {
  if (!pageName) {
    return persona;
  }
  return `${pageName}${separator}${persona}`;
};
