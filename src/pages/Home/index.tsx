import { useState } from "react";
import { Container, Content, Title, Description, Block, Button } from "./style";

import SearchBox from "../../components/SearchBlock";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  function toggleActive() {
    return setIsActive(!isActive);
  }

  return (
    <Container>
      <Content>
        <section>
          <div className="logo">
            <img src="/icons/logo.svg" alt="Logo" />
          </div>
          <div className="content-text">
            <Title>Encontre o lugar perfeito para você!</Title>
            <Description>
              lorem ipsum dolar amet lorem ipsum dolar amet{" "}
            </Description>
          </div>
          <div className="contain_button">
            <Button to="/sign-up">Crie uma conta</Button>
            <Button to="/login">Entrar</Button>
          </div>
        </section>
        <Block>
          <img src="/icons/house.svg" alt="House" />
          <div className="block">
            {isActive ? (
              <SearchBox onClick={toggleActive} />
            ) : (
              <div className="sidebar" onClick={toggleActive}>
                {" "}
                <img src="/icons/leftArrow.svg" alt="Open" />
              </div>
            )}
          </div>
        </Block>
      </Content>
    </Container>
  );
}
