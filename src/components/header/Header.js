import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">Where in the world</Link>
      <div class="mode-container">Dark Mode</div>
    </div>
  );
};
export default Header;
