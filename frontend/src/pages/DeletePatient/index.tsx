import React, { FormEvent } from "react";

import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { usePatientContext } from "../../context/PatientsContext";
import api from "../../services/api";
import { Container } from "./styles";

const DeletePatient = () => {
  const { name, setName } = usePatientContext();
  const { cpf, setCpf } = usePatientContext();
  const { email, setEmail } = usePatientContext();
  const { address, setAddress } = usePatientContext();

  const { id }: any = useParams();
  const { patients, setPatients } = usePatientContext();
  const navigate = useNavigate();

  patients.map((patient) => {
    return (
      setName(patient.name),
      setCpf(patient.cpf),
      setEmail(patient.email),
      setAddress(patient.address)
    );
  });

  const removePatient = React.useCallback(
    async (e: FormEvent, id: number) => {
      e.preventDefault();
      navigate("/");
      await api.delete(`/users/${id}`);
      const deletedPatient = patients.filter((patient) => patient.id !== id);
      setPatients([...deletedPatient]);
    },
    [patients, setPatients, navigate]
  );

  return (
    <Container>
      <h1>Deletar Paciente</h1>

      <form onSubmit={(e) => removePatient(e, id)}>
        <Input disabled name="name" placeholder={name} />
        <Input disabled name="cpf" placeholder={cpf} />
        <Input disabled name="email" placeholder={email} />
        <Input disabled name="address" placeholder={address} />

        <Button type="submit">Confirmar</Button>
      </form>
    </Container>
  );
};

export default DeletePatient;
