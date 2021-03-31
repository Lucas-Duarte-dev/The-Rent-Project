import { FaBuilding, FaEnvelope, FaHome, FaWhatsapp } from "react-icons/fa";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.color.background};
`;

export const Card = styled.div`
  width: 30rem;
  padding: 0 0 0 2rem;
  height: 100%;
  font-smooth: antialiased;

  & > .container-information h1 {
    width: 100%;
    font-weight: 600;
    color: ${({ theme }) => theme.color.title};
    white-space: nowrap;
    width: 25rem;
    margin: 2rem 0 1.4rem 0;
  }

  & > .container-information span {
    color: ${({ theme }) => theme.color.placeholder};
    font-weight: 400;
    font-size: 1.5rem;
    & > strong {
      color: ${({ theme }) => theme.color.title};
    }
  }
`;

export const Profile = styled.div`
  width: 25rem;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.6rem;
  margin-top: 2rem;
  height: 20rem;
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

    & > span {
      display: flex;
      align-items: center;
      & > a {
        color: ${({ theme }) => theme.color.text};
        margin-left: 0.3rem;
        transition: all 0.2s ease-in;
        &:hover {
          text-decoration: underline;
          color: ${({ theme }) => theme.color.title};
        }
      }
    }
  }
`;

export const Post = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 5rem 0 0 4rem;
  padding: 2rem 0;
  overflow-y: auto;

  & > div {
    width: 100%;
  }

  & > .content-card {
    display: flex;
    flex-direction: column;
    margin: 1rem 1.4rem;
    & > span {
      margin: 0.8rem 0;
      font-weight: 600;
      color: ${({ theme }) => theme.color.title};
      font-size: 1.2rem;
    }
    & > a {
      height: 16rem;
    }
  }
`;

export const OpenPostModal = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.text};
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 0.7rem;
  transition: background 0.4s ease-in;
  &:hover {
    background: #e1e6f0;
  }

  & > .owner {
    margin-bottom: 1.4rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;

    & > span {
      width: 35px;
      color: ${({ theme }) => theme.color.white};
      margin-right: 0.5rem;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.button};
    }
  }

  & > h3 {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.title};
  }

  & > .information {
    margin-top: 1rem;
    text-align: left;
    & > span {
      color: ${({ theme }) => theme.color.title};
      font-size: 1.3rem;
    }
    & > p {
      color: ${({ theme }) => theme.color.description};
      margin-top: 1rem;
    }
  }
`;

export const LinkToFavorite = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 15.5rem;
  cursor: pointer;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.7rem;
  padding: 2rem;
  transition: background 0.4s ease-in;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-smooth: antialiased;
  & > span {
    font-size: 4rem;
    color: ${({ theme }) => theme.color.title};
    font-weight: bold;
  }
`;

const icons = css`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.color.border};
`;
const postIcons = css`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.color.title};
  margin-right: 0.9rem;
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  ${icons}
`;

export const EmailIcon = styled(FaEnvelope)`
  ${icons}
`;

export const HotelIcon = styled(FaBuilding)`
  ${postIcons};
`;
export const HouseIcon = styled(FaHome)`
  ${postIcons};
`;
