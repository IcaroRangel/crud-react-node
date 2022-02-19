import React, { createContext, ReactNode, useContext } from "react";
import { PatientsProps } from "../models/Patient";

interface PatientProviderProps {
  children: ReactNode;
}

interface PatientContextData {
  patients: PatientsProps[];
  setPatients: (patients: PatientsProps[]) => void;
  name: string;
  setName: (name: string) => void;
  cpf: string;
  setCpf: (cpf: string) => void;
  email: string;
  setEmail: (email: string) => void;
  address: string;
  setAddress: (address: string) => void;
}

const PatientsContext = createContext({} as PatientContextData);

export const PatientsProvider = ({ children }: PatientProviderProps) => {
  const [patients, setPatients] = React.useState<PatientsProps[]>([]);
  const [name, setName] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");

  return (
    <PatientsContext.Provider
      value={{
        patients,
        setPatients,
        name,
        setName,
        cpf,
        setCpf,
        email,
        setEmail,
        address,
        setAddress,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatientContext = () => {
  const context = useContext(PatientsContext);

  return context;
};
