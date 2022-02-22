import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { usePatientContext } from "../../context/PatientsContext";
import { PatientsProps } from "../../models/Patient";
import api from "../../services/api";
import { Container } from "./styles";

const UpdatePatient = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { name, setName, cpf, setCpf, email, setEmail, address, setAddress } =
    usePatientContext();

  const update = React.useCallback(async () => {
    navigate("/");
    const response = { name, cpf, email, address };
    await api.put(`/users/${id}`, response);
  }, [address, cpf, email, id, name, navigate]);

  const loadPatient = React.useCallback(async () => {
    const patient = await api.get<PatientsProps>(`/users/${id}`);
    const response = patient.data;
    setName(response.name);
    setEmail(response.email);
    setCpf(response.cpf);
    setAddress(response.address);
  }, [id, setAddress, setCpf, setEmail, setName]);

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

  React.useEffect(() => {
    loadPatient();
  }, [loadPatient]);

  return (
    <Container>
      <h1>Editar dados do paciente</h1>
      <form onSubmit={update}>
        <Input
          label="Nome"
          name="name"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="CPF"
          name="cpf"
          type="text"
          value={cpf}
          onKeyPress={onlyNumber}
          pattern="\d{3}\d{3}\d{3}\d{2}"
          required
          onChange={(e) => setCpf(e.target.value)}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Endereço"
          name="address"
          type="text"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button type="submit">Enviar alterações</Button>
      </form>
    </Container>
  );
};

export default UpdatePatient;
