import React from "react";
import { Link } from "react-router-dom";
import { Container, ContainerNav } from "./styles";
//@ts-ignore
import { ReactComponent as Hospital } from "../../assets/hospital.svg";

const Header = () => {
  return (
    <Container>
      <ContainerNav>
        <Link to="/">
          <Hospital />
        </Link>
        <Link to="/">Início</Link>
        <Link to="/patients">Dados dos pacientes</Link>
        <Link to="/createPatient">Adicionar paciente</Link>
      </ContainerNav>
    </Container>
  );
};

export default Header;
