import {
	Col,
	Layout,
	Row,
	Typography,
} from "antd";
import React, { FC } from "react";

import heroImg from "../../assets/hero-image.svg";
import style from "./style.module.scss";

const Main:FC = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  return <Content>
    <Row className={`${style.container} container centered`}>
      <Col span={24}>
        <Title level={1}>Fastest & secure platform to invest in crypto</Title>
      </Col>
      <Col span={24}>
        <img src={heroImg} alt="Blockchain app" className={style.img}/>
      </Col>
    </Row>
  </Content>;
};

export default Main;
