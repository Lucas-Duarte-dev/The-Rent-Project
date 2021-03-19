import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 5rem;
  background: transparent;
  align-items: center;
  padding: 0 3rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    & > li {
      list-style: none;
    }

    & > li:not(:first-child) {
      margin-left: 2.4rem;
    }

    & > li a {
      color: ${({ theme }) => theme.color.text};
    }

    & > li:last-child {
      padding: 1rem 2rem;
      background-color: ${({ theme }) => theme.color.green};
      border-radius: 0.4rem;
      color: ${({ theme }) => theme.color.white};
      transition: background 0.2s ease-in;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.color.darkGreen};
      }
    }
  }
`;
