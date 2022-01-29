import {
	Button,
	Col,
	Layout,
	Row,
	Typography,
} from "antd";
import React, { FC } from "react";

import heroImg from "../../assets/hero-image.svg";
import style from "./style.module.scss";

const Hero:FC = () => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  return <Content>
    <Row className={`${style.container} container centered`}>
      <Col>
        <Title level={1}>Fastest & secure platform for transactions</Title>
        <Text>Send and recieve cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</Text>
        <Button className={style.button}> <a href="#form">Try for FREE</a></Button>
      </Col>
      <Col>
        <img src={heroImg} alt="Blockchain app" className={style.img}/>
      </Col>
    </Row>
  </Content>;
};

export default Hero;
