import React, { createContext, ReactNode, useContext } from "react";
import { PatientsProps } from "../models/Patient";

interface PatientProviderProps {
  children: ReactNode;
}

interface PatientContextData {
  patients: PatientsProps[];
  setPatients: (patients: any) => void;
}

const PatientsContext = createContext({} as PatientContextData);

export const PatientsProvider = ({ children }: PatientProviderProps) => {
  const [patients, setPatients] = React.useState<PatientsProps[]>([]);

  return (
    <PatientsContext.Provider
      value={{
        patients,
        setPatients,
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
