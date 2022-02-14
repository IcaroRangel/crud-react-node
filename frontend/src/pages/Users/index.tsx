import React from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import { Container } from "./styles";

type UserProps = {
  id: number;
  name: string;
  cpf: string;
  email: string;
  address: string;
};

const Users = () => {
  const [users, setUsers] = React.useState<UserProps[]>([]);

  const loadUsers = React.useCallback(async () => {
    const usersResponse = await api.get("/users");
    const response = usersResponse.data;
    setUsers(response);
  }, [setUsers]);

  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <Container>
      <Header />
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
        </div>
      ))}
    </Container>
  );
};

export default Users;
