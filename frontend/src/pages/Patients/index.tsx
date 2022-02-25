import React from "react";
import api from "../../services/api";
import { Container, ContainerUl } from "./styles";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { usePatientContext } from "../../context/PatientsContext";

const Patients = () => {
  const { patients, setPatients } = usePatientContext();

  const loadPatients = React.useCallback(async () => {
    const patientsResponse = await api.get("/users");
    const response = await patientsResponse.data;
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
        {patients &&
          patients.map((patient) => (
            <li>
              <span className="column-10" data-title="ID">
                {patient.id}
              </span>
              <span className="column-20" data-title="Nome">
                {patient.name}
              </span>
              <span className="column-20" data-title="CPF">
                {patient.cpf}
              </span>
              <span className="column-20" data-title="E-mail">
                {patient.email}
              </span>
              <span className="column-20" data-title="Endereço">
                {patient.address}
              </span>
              <span className="column-10" data-Title="Ações">
                <Link
                  to={`/updatePatient/${patient.id}`}
                  style={{ color: "#d0fc08" }}
                >
                  <FiEdit />
                </Link>
                <Link
                  to={`/deletePatient/${patient.id}`}
                  style={{ color: "#ea1d2c" }}
                >
                  <FiTrash2 />
                </Link>
              </span>
            </li>
          ))}
      </ContainerUl>
    </Container>
  );
};

export default Patients;
