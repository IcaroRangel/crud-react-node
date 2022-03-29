import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { usePatientContext } from "../../context/PatientsContext";
import { PatientsProps } from "../../models/Patient";
import api from "../../services/api";
import { Container } from "./styles";
import * as yup from "yup";

const UpdatePatient = () => {
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
  const { id } = useParams();
  const { name, setName } = usePatientContext();
  const { cpf, setCpf } = usePatientContext();
  const { email, setEmail } = usePatientContext();
  const { address, setAddress } = usePatientContext();

  const update = React.useCallback(
    async (data) => {
      await api.put(`/users/${id}`, data);
      navigate("/");
    },
    [id, navigate]
  );
  console.log(name, cpf, email, address);

  const loadPatient = React.useCallback(async () => {
    const patient = await api.get<PatientsProps>(`/users/${id}`);
    const response = patient.data;
    setName(response.name);
    setEmail(response.email);
    setCpf(response.cpf);
    setAddress(response.address);
  }, [id, setAddress, setCpf, setEmail, setName]);

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

  React.useEffect(() => {
    loadPatient();
  }, [loadPatient]);

  return (
    <Container>
      <h1>Editar dados do paciente</h1>
      <form onSubmit={handleSubmit(update)}>
        <div>
          <Input
            register={register}
            placeholder="Nome"
            type="text"
            name="name"
            defaultValue={name}
            className={errors.name ? "error" : ""}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <Input
            register={register}
            placeholder="CPF"
            type="text"
            name="cpf"
            defaultValue={cpf}
            onKeyPress={onlyNumber}
            className={errors.cpf ? "error" : ""}
            onChange={(e) => setCpf(e.target.value)}
          />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </div>
        <div>
          <Input
            register={register}
            placeholder="E-mail"
            type="text"
            name="email"
            defaultValue={email}
            className={errors.email ? "error" : ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <Input
            register={register}
            placeholder="Endereço"
            type="text"
            name="address"
            defaultValue={address}
            className={errors.address ? "error" : ""}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <span>{errors.address.message}</span>}
        </div>
        <Button type="submit">Enviar alterações</Button>
      </form>
    </Container>
  );
};

export default UpdatePatient;
