import React from "react";
import { PatientsProps } from "../../models/Patient";
import { Container } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import api from "../../services/api";

let schema = yup.object().shape({
  name: yup.string().required("Nome é obrigátorio"),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .length(11, "CPF deve ter 11 digítos"),
  email: yup
    .string()
    .required("E-mail é obrigátorio")
    .email("Envie um formato de email válido"),
  address: yup.string().required("Endereço é obrigátorio"),
});

const CreatePatient = () => {
  const { register, handleSubmit } = useForm<PatientsProps>({
    resolver: yupResolver(schema),
  });
  const [name, setName] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");

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
    async (e) => {
      e.preventDefault();
      const patient = { name, cpf, email, address };
      await api.post("/users", patient);
    },
    [address, cpf, email, name]
  );

  return (
    <Container>
      <h1>Informe os dados do paciente</h1>
      <form onSubmit={handleSubmit(addPatient)}>
        <Input
          label="Nome"
          type="text"
          required
          value={name}
          {...register("name")}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="CPF"
          type="text"
          required
          value={cpf}
          onKeyPress={onlyNumber}
          {...register("cpf")}
          onChange={(e) => setCpf(e.target.value)}
        />
        <Input
          label="E-mail"
          type="text"
          required
          value={email}
          {...register("email")}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Endereço"
          type="text"
          required
          value={address}
          {...register("address")}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">das</button>
      </form>
    </Container>
  );
};

export default CreatePatient;
