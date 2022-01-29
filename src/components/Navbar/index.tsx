import {
	Layout,
	Menu,
} from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";

import crappoLogo from "../../assets/logo.svg";
import style from "./style.module.scss";

const Navbar: FC = () => {
  const {Header} = Layout;
  const navLinks = [
    { name: "Home", to:"/"},
    { name: "About", to:"/about"},
    { name: "Contact", to:"/contact"},
  ]
  return <Header style={{background: "transparent"}} className="container">
  <div className={`${style.logo} centered`}>
  <img src={crappoLogo} alt="Crappo Logo" />
  </div>
  <Menu mode="horizontal" defaultSelectedKeys={['1']} className={style.container}>
  {navLinks.map((link, index) => (
    <Menu.Item key={index + 1}>
      <Link to={link.to}>
        {link.name}
      </Link>
    </Menu.Item>
  ))}
  </Menu>
</Header>;
};

export default Navbar;