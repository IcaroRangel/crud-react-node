import React from "react";
import { Link } from "react-router-dom";
import { Container, ContainerNav } from "./styles";
//@ts-expect-error
import { ReactComponent as Hospital } from "../../assets/hospital.svg";

const Header = () => {
  const [active, setActive] = React.useState("");

  return (
    <Container>
      <ContainerNav>
        <Link to="/">
          <Hospital />
        </Link>
        <Link
          to="/"
          onClick={() => setActive("init")}
          style={
            active === "init"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
        >
          Início
        </Link>
        <Link
          to="/patients"
          onClick={() => setActive("patients")}
          style={
            active === "patients"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
        >
          Dados dos pacientes
        </Link>
        <Link
          to="/createPatient"
          onClick={() => setActive("create")}
          style={
            active === "create"
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
        >
          Adicionar paciente
        </Link>
      </ContainerNav>
    </Container>
  );
};

export default Header;
