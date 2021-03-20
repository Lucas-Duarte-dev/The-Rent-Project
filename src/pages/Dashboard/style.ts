import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.color.background};
`;

export const Card = styled.div`
  flex: 1;
  padding: 2rem;

  & > h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.color.title};
    white-space: nowrap;

    & > span {
      color: ${({ theme }) => theme.color.placeholder};
      font-weight: 600;
    }
  }
`;

export const Profile = styled.div`
  width: 25rem;
  height: 35rem;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.6rem;
  margin-top: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  & > .containerImage {
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: url("https://images.unsplash.com/photo-1484820986637-7ec3e85b394f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEwfHxjb2xvcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
      no-repeat center;
    background-size: cover;
    position: relative;

    & > .contain {
      position: absolute;
      bottom: -70px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    & > .contain span {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.button};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.color.white};
      font-weight: bold;
      font-size: 1.5rem;
    }

    & > .contain p {
      margin-top: 0.8rem;
      color: ${({ theme }) => theme.color.title};
      font-size: 1.2rem;
    }
  }

  & > .contact {
    padding: 6rem 2rem;
  }
`;

const icons = css`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.color.border};
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  ${icons}
`;

export const EmailIcon = styled(FaEnvelope)`
  ${icons}
`;
