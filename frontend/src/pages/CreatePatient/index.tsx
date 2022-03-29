import React from "react";
import { Container } from "./styles";
import api from "../../services/api";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { PatientsProps } from "../../models/Patient";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";

const CreatePatient = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    cpf: yup
      .string()
      .required("Cpf é obrigátorio")
      .length(11, "CPF deve ter 11 digítos"),
    email: yup
      .string()
      .required("Email é obrigátorio")
      .email("Envie um formato válido de email"),
    address: yup.string().required("Endereço é obrigátorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientsProps>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

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

  const onSubmit = React.useCallback(
    async (data) => {
      await api.post("/users", data);
      navigate("/");
    },
    [navigate]
  );

  return (
    <Container>
      <h1>Informe os dados do paciente</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            register={register}
            placeholder="Nome"
            type="text"
            name="name"
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <Input
            register={register}
            placeholder="CPF"
            type="text"
            name="cpf"
            onKeyPress={onlyNumber}
            className={errors.cpf ? "error" : ""}
          />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </div>
        <div>
          <Input
            register={register}
            placeholder="E-mail"
            type="text"
            name="email"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <Input
            register={register}
            placeholder="Endereço"
            type="text"
            name="address"
            className={errors.address ? "error" : ""}
          />
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        <Button type="submit">Enviar</Button>
      </form>
    </Container>
  );
};

export default CreatePatient;
