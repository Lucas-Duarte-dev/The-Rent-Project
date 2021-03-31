import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.color.background};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
  & > section:first-child {
    padding: 2rem 3rem;
    max-height: 1100px;
    width: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > .contain_button {
      width: 100%;
      margin: 5rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > a {
        background-color: ${({ theme }) => theme.color.green};
        color: ${({ theme }) => theme.color.white};
      }
    }
  }
`;

export const Button = styled(Link)`
  padding: 1.8rem 5rem;
  border-radius: 7px;
  font-size: 1.3rem;
  font-weight: bold;
  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    filter: brightness(0.9);
  }
`;

export const LoginButton = styled.button`
  padding: 1.8rem 5rem;
  border-radius: 7px;
  font-size: 1.3rem;
  font-weight: bold;
  transition: all 0.2s ease-in;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.text};
  &:hover,
  &:focus {
    background: #e0f9fb;
  }
`;
export const Title = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.color.title};
  font-size: 4.8rem;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.color.description};
  margin: 1.2rem 0;
`;

export const Block = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  position: relative;
  & > .block {
    position: absolute;
    right: 0;
    transform: translateY(50%);
    & > .sidebar {
      height: 23rem;
      width: 4rem;
      background: ${({ theme }) => theme.color.white};
      border-radius: 0.7rem 0 0 0.7rem;
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background 0.3s ease-in;
      &:hover {
        background: ${({ theme }) => theme.color.hover};
      }
      & > img {
        width: 25px;
        height: 25px;
      }
    }
  }

  & > img {
    width: 50rem;
  }
`;
