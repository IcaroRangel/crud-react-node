import React from "react";
import { Link } from "react-router-dom";
import { Container, ContainerNav } from "./styles";

const Header = () => {
  return (
    <Container>
      <ContainerNav>
        <Link to="/">Início</Link>
        <Link to="/users">Dados dos usuários</Link>
      </ContainerNav>
    </Container>
  );
};

export default Header;
