import styled, { css } from "styled-components";
import { MdEmail, MdVpnKey } from "react-icons/md";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.color.background};

  & > img {
    object-fit: cover;
    width: 60%;
  }
`;

export const Form = styled.form`
  flex: 1;
  min-width: 30rem;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  height: 100%;
  & > h1 {
    justify-self: flex-start;
    margin-bottom: 7rem;
    font-size: 3rem;
    color: ${({ theme }) => theme.color.title};
  }
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  &:not(:first-child) {
    margin-top: 1.9rem;
  }
  & > label {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.color.text};
    align-self: flex-start;
  }

  & > div {
    width: 100%;
    position: relative;
  }

  & > div input {
    width: 100%;
    padding: 0 0 0 3rem;
    height: 3.8rem;
    border-radius: 0.4rem;
    border: 2px solid ${({ theme }) => theme.color.border};
    font-size: 1.1rem;
    color: ${({ theme }) => theme.color.text};
    &:placeholder {
      color: ${({ theme }) => theme.color.placeholder};
    }
  }

  & > button {
    width: 90%;
    padding: 1.8rem 0;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.green};
    transition: background 0.3s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.color.darkGreen};
    }
  }
`;

const icons = css`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(70%);
  margin: 0 0.8rem;
  color: ${({ theme }) => theme.color.border};
`;

export const EmailIcon = styled(MdEmail)`
  ${icons}
`;
export const PasswordIcon = styled(MdVpnKey)`
  ${icons}
`;
