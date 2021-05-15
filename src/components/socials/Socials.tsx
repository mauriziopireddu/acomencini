import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "config";

export const Socials = () => (
  <div className="absolute bottom-0 z-10 invisible lg:visible">
    {config.socials.map(({ link, icon }) => (
      <a key={link} href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={icon}
          className="text-white mr-3 mb-8"
          size="lg"
        />
      </a>
    ))}
  </div>
);
