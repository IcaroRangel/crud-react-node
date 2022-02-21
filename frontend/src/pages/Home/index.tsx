import React from "react";
import { Container } from "./styles";
//@ts-ignore

const Home = () => {
  return (
    <Container>
      <div className="column-40">
        <h1>Bem vindo!</h1>
        <p>
          Projeto CRUD sobre pacientes de um hospital usando React JS e Node JS.
        </p>
      </div>
      <div className="column-60">
        <img
          src="https://www.healthcareitnews.com/sites/hitn/files/nurses_with_hospital_patient_tablet_0.jpg"
          alt="Imagem hospital"
        />
      </div>
    </Container>
  );
};

export default Home;
