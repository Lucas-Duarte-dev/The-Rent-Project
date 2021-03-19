import { FormEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
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

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [roles, setRoles] = useState([] as string[]);

  const [load, setLoad] = useState(false);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(name, username, phone, email, password);
      const response = await api.post("/users", {
        name,
        phone,
        username,
        email,
        password,
        roles,
      });
      console.log(response.data);
      history.push("/login");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [name, phone, username, email, password]
  );

  setInterval(() => {
    return setLoad(true);
  }, 1000);

  return (
    <>
      {load ? (
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
                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </InputBlock>
            <InputBlock>
              <label>Nome de usuário</label>
              <div>
                <UsernameIcon />
                <input
                  type="text"
                  placeholder="Digite seu nome de usuário"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </InputBlock>
            <InputBlock>
              <label>Telefone</label>
              <div>
                <PhoneIcon />
                <input
                  type="text"
                  placeholder="Digite o número do seu celular"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </InputBlock>
            <InputBlock>
              <label>E-mail</label>
              <div>
                <EmailIcon />
                <input
                  type="text"
                  placeholder="Digite seu melhor e-mail"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </InputBlock>
            <InputBlock>
              <label>Senha</label>
              <div>
                <PasswordIcon />
                <input
                  type="password"
                  placeholder="Digite uma senha segura"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </InputBlock>

            <InputBlock>
              <button type="submit">Enviar</button>
            </InputBlock>
          </Form>
        </Container>
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/icons/loading.svg" alt="loading" />
        </div>
      )}
    </>
  );
}
