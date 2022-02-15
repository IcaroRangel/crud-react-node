import React from "react";
import api from "../../services/api";
import { Container, ContainerUl } from "./styles";
import { FiEdit, FiTrash2 } from "react-icons/fi";

type PatientsProps = {
  id: number;
  name: string;
  cpf: string;
  email: string;
  address: string;
};

const Patients = () => {
  const [patients, setPatients] = React.useState<PatientsProps[]>([]);

  const loadPatients = React.useCallback(async () => {
    const patientsResponse = await api.get("/users");
    const response = patientsResponse.data;
    setPatients(response);
  }, [setPatients]);

  React.useEffect(() => {
    loadPatients();
  }, [loadPatients]);

  return (
    <Container>
      <div>
        <span className="column-10">ID</span>
        <span className="column-20">Nome</span>
        <span className="column-20">CPF</span>
        <span className="column-20">E-mail</span>
        <span className="column-20">Endereço</span>
        <span className="column-10">Ações</span>
      </div>
      <ContainerUl>
        {patients.map((patient) => (
          <li key={patient.id}>
            <span className="column-10">{patient.id}</span>
            <span className="column-20">{patient.name}</span>
            <span className="column-20">{patient.cpf}</span>
            <span className="column-20">{patient.email}</span>
            <span className="column-20">{patient.address}</span>
            <span className="column-10">
              <FiEdit />
              <FiTrash2 />
            </span>
          </li>
        ))}
      </ContainerUl>
    </Container>
  );
};

export default Patients;
