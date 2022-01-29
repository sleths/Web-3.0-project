import {
	Button,
	Layout,
	Menu,
} from "antd";
import React, { FC } from "react";

import { SyncOutlined } from "@ant-design/icons";

import style from "./style.module.scss";

const Navbar: FC = () => {
  const {Header} = Layout;
  return <Header style={{background: "transparent"}} className="container">
  <div className={`${style.logo} centered`}>
  <SyncOutlined />
  </div>
  <Menu mode="horizontal" defaultSelectedKeys={['1']} className={style.container}>
    {new Array(5).fill(null).map((_, index) => {
      const key = index + 1;
      return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
    })}
  </Menu>
</Header>;
};

export default Navbar;