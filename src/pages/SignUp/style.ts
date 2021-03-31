import { MdEmail, MdVpnKey } from "react-icons/md";
import { FaUserAlt, FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  & > .container-image {
    height: 100%;
    flex: 1;
  }
  & > .container-image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Form = styled.form`
  padding: 2rem 5rem;
  min-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > .title {
    align-self: flex-start;
    margin-bottom: 2rem;

    & > h1 {
      color: ${({ theme }) => theme.color.title};
      font-size: 2.4rem;
    }
  }
`;

export const InputBlock = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > label {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.text};
    align-self: flex-start;
  }

  & > div {
    width: 100%;
    position: relative;
    margin-top: 0.5rem;
  }

  & > div input {
    width: 100%;
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
  transform: translateY(55%);
  margin: 0 0.8rem;
  color: ${({ theme }) => theme.color.border};
`;

export const UserIcon = styled(FaUserAlt)`
  ${icons}
`;
export const UsernameIcon = styled(FaUserCircle)`
  ${icons}
`;
export const PhoneIcon = styled(FaPhoneAlt)`
  ${icons}
`;
export const EmailIcon = styled(MdEmail)`
  ${icons}
`;
export const PasswordIcon = styled(MdVpnKey)`
  ${icons}
`;
