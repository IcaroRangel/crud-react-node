import React, { FormEvent } from "react";
import { Container } from "./styles";
import Input from "../../components/Input";
import api from "../../services/api";
import Button from "../../components/Button";

import { useNavigate } from "react-router-dom";

const CreatePatient = () => {
  const [name, setName] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="cpf"
          label="CPF"
          required
          type="text"
          onKeyPress={onlyNumber}
          value={cpf}
          pattern="\d{3}\d{3}\d{3}\d{2}"
          onChange={(e) => setCpf(e.target.value)}
        />
        <Input
          name="email"
          required
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          name="address"
          required
          label="Endereço"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Container>
  );
};

export default CreatePatient;
