import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.color.background};
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 2rem;
  & > .card-posts {
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 100%;
    display: flex;
    cursor: pointer;
    border-radius: 0.8rem;
    overflow: hidden;
    &:not(:first-child) {
      margin-top: 1rem;
    }
    & > .image {
      margin-right: 0.9rem;
    }
    & > .image img {
      width: 20rem;
      height: 100%;
      object-fit: cover;
    }

    & > .post-informations {
      padding: 1rem;
      width: 35rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > .information {
        & > h1 {
          color: ${({ theme }) => theme.color.title};
          margin-bottom: 1rem;
        }

        & > span {
          font-size: 1.5rem;
        }

        & > p {
          color: ${({ theme }) => theme.color.description};
          line-height: 1.5;
          margin-top: 1.2rem;
        }
      } //information

      & > .values {
        display: flex;
        align-items: center;
        margin-top: 2rem;
        justify-content: space-between;

        & > span {
          color: ${({ theme }) => theme.color.green};
          font-size: 1.5rem;
        }

        & > p {
          color: #c0c0c0;
          text-decoration: underline;
        }
      } // values
    } //post-informations
  } // card
`;
