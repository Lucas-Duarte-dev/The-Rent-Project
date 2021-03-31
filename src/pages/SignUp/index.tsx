import { FormEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Input";
import api from "../../services/api";
import {
  Container,
  EmailIcon,
  Form,
  InputBlock,
  PhoneIcon,
  UserIcon,
  UsernameIcon,
  PasswordIcon,
} from "./style";

interface User {
  id: string;
  name: string;
  username: string;
  phone: string;
  facebook?: string;
  email: string;
  roles: string[];
  created_at: Date;
  updated_at: Date;
}

export default function SignUp() {
  const [user, setUser] = useState<User>({} as User);
  // eslint-disable-next-line
  const [roles, setRoles] = useState([] as string[]);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const response = await api.post("/users", user);
      console.log(response.data);
      history.push("/login");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setUser({
        ...user,
        [e.currentTarget.name]: e.currentTarget.value,
        roles,
      });
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return (
    <Container>
      <Header />
      <div className="container-image">
        <img src="/img/2357.jpg" alt="Rent The" />
      </div>
      <Form onSubmit={handleSubmit}>
        <div className="title">
          <h1>Cadastro</h1>
        </div>
        <InputBlock>
          <label>Nome completo</label>
          <div>
            <UserIcon />
            <Input
              name="name"
              type="text"
              placeholder="Digite seu nome completo"
              onChange={handleChange}
            />
          </div>
        </InputBlock>
        <InputBlock>
          <label>Nome de usuário</label>
          <div>
            <UsernameIcon />
            <Input
              type="text"
              name="username"
              placeholder="Digite seu nome de usuário"
              onChange={handleChange}
            />
          </div>
        </InputBlock>
        <InputBlock>
          <label>Telefone</label>
          <div>
            <PhoneIcon />
            <Input
              placeholder="(11) 99999-9999"
              name="phone"
              mask="phone"
              onChange={handleChange}
            />
          </div>
        </InputBlock>
        <InputBlock>
          <label>E-mail</label>
          <div>
            <EmailIcon />
            <Input
              type="text"
              name="email"
              placeholder="Digite seu melhor e-mail"
              onChange={handleChange}
            />
          </div>
        </InputBlock>
        <InputBlock>
          <label>Senha</label>
          <div>
            <PasswordIcon />
            <Input
              type="password"
              name="password"
              placeholder="Digite uma senha segura"
              onChange={handleChange}
            />
          </div>
        </InputBlock>

        <InputBlock>
          <button type="submit">Enviar</button>
        </InputBlock>
      </Form>
    </Container>
  );
}
