import { FormEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { useAuth } from "../../context/AuthContext";

import { Container, Form, FormBlock, EmailIcon, PasswordIcon } from "./style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      await signIn({ email, password });

      history.push("/dashboard");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [email, password]
  );

  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit}>
        <h1>Acessar</h1>
        <FormBlock>
          <label htmlFor="">Email</label>
          <div>
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="test@example.com"
            />
            <EmailIcon />
          </div>
        </FormBlock>
        <FormBlock>
          <label htmlFor="">Senha</label>
          <div>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="************"
            />
            <PasswordIcon />
          </div>
        </FormBlock>

        <FormBlock>
          <button type="submit">Entrar</button>
        </FormBlock>
      </Form>
      <img src="/img/4342804.jpg" alt="" />
    </Container>
  );
}
