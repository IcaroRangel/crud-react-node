import React from "react";
import api from "../../services/api";
import { Container } from "./styles";

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

  return <Container>pacientes</Container>;
};

export default Patients;
