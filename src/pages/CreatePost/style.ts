import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.color.background};
`;

export const Form = styled.form`
  flex: 1;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 0 auto;
  & > h1 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.color.title};
  }
  & > .input-container {
    width: 700px;
    margin-top: 1.2rem;

    & > label {
      font-size: 1.3rem;
      font-weight: 500;
      color: #011627;
    }

    & > select,
    & > textarea,
    & > input {
      width: 100%;
      border: 2px solid ${({ theme }) => theme.color.border};
      border-radius: 0.4rem;
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }

    & > .images {
      display: none;
    }
    & > select,
    & > input {
      height: 3.5rem;
      padding: 0 1.2rem;
    }

    & > textarea {
      height: 7.5rem;
      padding: 1rem;
      resize: none;
    }

    & > select {
      color: ${({ theme }) => theme.color.title};
      background: url("/icons/arrow-down.svg") no-repeat
        ${({ theme }) => theme.color.white};
      background-position: calc(100% - 20px) center;
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: "";
      &::-ms-expand {
        display: none;
      }
    }

    & > .image-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 16px;
      margin: 1rem 0;
      & > img {
        width: 100%;
        object-fit: cover;
        height: 6rem;
        border-radius: 0.6rem;
      }
    }

    & > strong {
      font-size: 0.9rem;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.color.border};
      font-weight: 400;
    }

    & > .images-error {
      color: ${({ theme }) => theme.color.red};
      font-weight: bold;
    }
    & > .new-image {
      width: 100%;
      margin: 0 0 1.2rem 0;
      height: 4rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: 2px dashed ${({ theme }) => theme.color.border};
      transition: background 0.2s ease-in-out;
      &:hover {
        background: #f7f7ff;
      }
    }
  }

  & > button {
    margin: 2rem 0;
    width: 40rem;
    height: 4rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.color.green};
    color: #fff;
    font-size: 1.2rem;
  }
`;

export const Plus = styled(FaPlus)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.green};
`;
