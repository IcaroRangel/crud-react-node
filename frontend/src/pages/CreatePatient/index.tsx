import React, { FormEvent } from "react";
import { Container } from "./styles";
import Input from "../../components/Input";
import api from "../../services/api";
import Button from "../../components/Button";

import { useNavigate } from "react-router-dom";
import { usePatientContext } from "../../context/PatientsContext";

const CreatePatient = () => {
  const { name, setName } = usePatientContext();
  const { cpf, setCpf } = usePatientContext();
  const { email, setEmail } = usePatientContext();
  const { address, setAddress } = usePatientContext();
  const navigate = useNavigate();

  const onlyNumber = React.useCallback((evt) => {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }, []);

  const addPatient = React.useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const patient = { name, cpf, email, address };
      await api.post("/users", patient);
      navigate("/");
    },
    [name, cpf, email, address, navigate]
  );

  return (
    <Container>
      <h1>Informe os dados do paciente</h1>
      <form onSubmit={addPatient}>
        <Input
          name="name"
          required
          label="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="cpf"
          label="CPF"
          required
          type="text"
          onKeyPress={onlyNumber}
          pattern="\d{3}\d{3}\d{3}\d{2}"
          onChange={(e) => setCpf(e.target.value)}
        />
        <Input
          name="email"
          required
          label="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="address"
          required
          label="Endereço"
          type="text"
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Container>
  );
};

export default CreatePatient;
