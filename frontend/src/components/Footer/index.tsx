import React from "react";
import { Container } from "./styles";
//@ts-ignore
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <Container>
      <Copyright />
    </Container>
  );
};

export default Footer;
