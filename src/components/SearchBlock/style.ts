import styled from "styled-components";

export const Container = styled.div`
  width: 40rem;
  height: 23rem;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.7rem 0 0 0.7rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > .description {
    display: flex;
    flex-direction: column;
    width: 23rem;
    & > span {
      color: ${({ theme }) => theme.color.title};
      font-weight: 500;
      font-size: 1.6rem;
    }

    & > p {
      margin-top: 0.8rem;
      color: ${({ theme }) => theme.color.description};
    }
  }
  & > button {
    background: transparent;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > button {
    width: 30rem;
    padding: 1.1rem;
    background: ${({ theme }) => theme.color.button};
    color: ${({ theme }) => theme.color.white};
    margin-top: 1.2rem;
    border-radius: 0.6rem;
    transition: all 0.2s ease-in;
    font-size: 1.3rem;
    &:hover {
      background: ${({ theme }) => theme.color.buttonHover};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  background: ${({ theme }) => theme.color.input};
  border: 2px solid ${({ theme }) => theme.color.border};
  border-radius: 0.4rem;
  padding: 0 1.4rem;
  font-size: 1.1rem;
  &:placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }
`;
