import React from "react";
import { PatientsProps } from "../../models/Patient";
import { Container } from "./styles";

const CreatePatient = () => {
  const [patients, setPatients] = React.useState<PatientsProps[]>([]);
  return <Container>criar paciente</Container>;
};

export default CreatePatient;
