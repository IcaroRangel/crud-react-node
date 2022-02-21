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
          <div>
            <Hospital />
          </div>
        </Link>
        <Link to="/">
          <div>Início</div>
        </Link>
        <Link to="/patients">
          <div>Dados dos pacientes</div>
        </Link>
        <Link to="/createPatient">Adicionar paciente</Link>
      </ContainerNav>
    </Container>
  );
};

export default Header;
