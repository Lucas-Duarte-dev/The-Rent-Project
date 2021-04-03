import { MdClose } from "react-icons/md";
import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 400;
`;

export const Card = styled.div`
  display: flex;

  flex-direction: column;
  width: 1200px;
  padding: 2rem;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.8rem;
  margin: 0 auto;
  overflow-y: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);

  & > .post-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > button {
      padding: 0.8rem;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  & > .post-information {
    width: 100%;

    & > .post-image {
      margin: 1.5rem 0 3rem 0;
      & > img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
        border-radius: 1rem;
      }
      & > .images {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(5, 150px);
        justify-content: space-between;
        grid-gap: 40px;

        & > button {
          border-radius: 0.8rem;
          overflow: hidden;
          transition: all 0.2s ease-in-out;
        }

        & > .active {
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
          transform: scale(1.05);
          filter: brightness(0.7);
        }

        & > button img {
          width: 100%;
          height: 100%;
          border-radius: 0.8rem;
          object-fit: cover;
        }
      } // images
    } // post-image
  }
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  & > .informations {
    width: 38rem;
    & > h1 {
      margin-top: 1.5rem;
      font-size: 2.1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.color.text};
    }

    & > p {
      margin: 0.8rem 0;
      font-size: 1.3rem;
      font-weight: 500;
      color: ${({ theme }) => theme.color.title};
    }
    & > span {
      font-size: 1.1rem;

      color: ${({ theme }) => theme.color.description};
    }
  } // informations

  & > .price {
    width: 25rem;
    background: ${({ theme }) => theme.color.white};
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;

    & > span {
      color: ${({ theme }) => theme.color.title};
      font-size: 1.3rem;
      font-weight: 500;
    }
    & > h1 {
      margin: 1rem 0;
      font-weight: 700;
      color: ${({ theme }) => theme.color.text};
      font-size: 2.3rem;
    }

    & > button {
      width: 100%;
      height: 3rem;
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.green};
      border-radius: 0.4rem;
      margin-top: 1.3rem;
      font-size: 1.1rem;
    }
  }
`;

export const IconClose = styled(MdClose)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.color.border};
  transition: all 0.2s ease-in;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.red};
  }
`;
