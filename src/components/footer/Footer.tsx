import React from "react";
import { STRINGS } from "../../strings";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>{STRINGS?.FOOTER?.COPYRIGHT || ""}</p>
    </footer>
  );
};

export default Footer;
