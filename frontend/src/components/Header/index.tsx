import React from "react";
import { Link } from "react-router-dom";
import { Container, ContainerNav } from "./styles";
//@ts-ignore
import { ReactComponent as Hospital } from "../../assets/hospital.svg";

const Header = () => {
  const [active, setActive] = React.useState(false);
  return (
    <Container>
      <ContainerNav>
        <div className="menu-mobile" onClick={() => setActive(!active)}>
          <div className="menu"></div>
          <div className="menu"></div>
          <div className="menu"></div>
        </div>
        <ul className={active ? "active" : ""}>
          <li>
            <Link to="/">
              <div>
                <Hospital />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Início</div>
            </Link>
          </li>
          <li>
            <Link to="/patients">
              <div>Dados dos pacientes</div>
            </Link>
          </li>
          <li>
            <Link to="/createPatient">Adicionar paciente</Link>
          </li>
        </ul>
      </ContainerNav>
    </Container>
  );
};

export default Header;
