import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { PatientsProps } from "../../models/Patient";
import api from "../../services/api";
import { Container } from "./styles";

const DeletePatient = () => {
  const { id }: any = useParams();
  const [patients, setPatients] = React.useState<PatientsProps[]>([]);

  const removePatient = React.useCallback(
    async (id: number) => {
      await api.delete(`/users/${id}`);

      const deletedPatient = patients.filter((patient) => patient.id !== id);
      setPatients([...deletedPatient]);
    },
    [patients]
  );

  return (
    <Container>
      <h1>Deletar Produto</h1>
      <form onSubmit={() => removePatient(id)}>
        <Input disabled name="name" />
        <Input disabled name="cpf" />
        <Input disabled name="email" />
        <Input disabled name="address" />
        <Button type="submit">Confirmar</Button>
      </form>
    </Container>
  );
};

export default DeletePatient;
