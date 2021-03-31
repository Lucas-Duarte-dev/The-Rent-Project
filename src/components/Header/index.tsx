/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Container } from "./style";
export default function Header() {
  return (
    <Container>
      <img src="/icons/logo.svg" alt="Rent The" />

      <ul>
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/sign-up">Cadastro</a>
        </li>
        <li>
          <a href="/">Casas</a>
        </li>
        <li>
          <a href="/login"></a>Criar uma conta
        </li>
      </ul>
    </Container>
  );
}
