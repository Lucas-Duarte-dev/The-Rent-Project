import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  & > span {
  }
  & > input {
    border: 2px solid ${({ theme }) => theme.color.border};
    height: 3.3rem;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    padding: 0 0 0 3rem;
  }

  & > input.right {
    border-color: ${({ theme }) => theme.color.green};
  }
  & > input.left {
    border-color: ${({ theme }) => theme.color.red};
  }
`;
