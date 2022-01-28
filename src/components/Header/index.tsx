import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        className="cursor-pointer"
        src={logo}
        alt="Logo"
        width="200px"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Header;
