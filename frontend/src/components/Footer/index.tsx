import React from "react";
import { Container } from "./styles";
//@ts-ignore
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <Container>
      <span>
        <Copyright />
        <p>Projeto de Icaro Cesar R.</p>
      </span>
      <div>
        Redes sociais:
        <a
          href="https://www.instagram.com/icaro_cesar07/"
          style={{ background: "#111", color: "#fff", marginLeft: "5px" }}
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/icaro-rangel-6a68b222b/"
          style={{ background: "#007bb6", color: "#fff" }}
        >
          <FiLinkedin style={{ fill: "#fff" }} />
        </a>
        <a
          href="https://github.com/IcaroRangel"
          style={{ background: "#111", color: "#fff" }}
        >
          <FiGithub style={{ fill: "#fff" }} />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
