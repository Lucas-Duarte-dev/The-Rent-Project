import React, {  MouseEventHandler } from "react";
import { Container, Header, InputBlock, Input } from "./style";


interface PropsButton {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function SearchBox({ onClick }:PropsButton ){
  return (
    <Container>
      <Header>
        <div className="description">
          <span>Aonde deseja morar?</span>
          <p>
            vamos te ajudar a encontrar um imóvel no lugar dos seus sonhos!{" "}
          </p>
        </div>
        <button onClick={onClick}>
          <img src='/icons/arrowRight.svg' alt="Close" />
        </button>
      </Header>
      <InputBlock>
        <Input type="text" placeholder="Digite aqui o lugar dos seus sonhos!" />

        <button>Procurar</button>
      </InputBlock>
    </Container>
  );
}
