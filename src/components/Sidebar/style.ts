import styled, { css } from "styled-components";
import { MdAdd, MdDashboard, MdHome, MdPerson, MdStar } from "react-icons/md";

export const SidebarContainer = styled.div`
  width: 18rem;
  padding: 0.9rem 1.2rem;

  & > img {
    width: 13rem;
  }

  border-right: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .space {
    margin-top: 4rem;
    width: 100%;

    & > .active {
      background-color: rgba(39, 174, 96, 0.61);
      & > svg {
        color: #fff;
      }
      & > span {
        color: #fff;
      }
    }
  }
`;

export const SideContent = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1.1rem;
  height: 3.5rem;
  background: transparent;
  border-radius: 0.4rem;
  transition: background 0.2s ease-in;
  & > span {
    margin-left: 1rem;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.color.border};
  }
  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  &:hover,
  &:active {
    background: #e8e8e8;
  }
`;
export const Create = styled.button`
  margin-top: 5rem;
  width: 100%;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.color.green};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const icons = css`
  width: 27px;
  height: 27px;
  color: ${({ theme }) => theme.color.border};
`;

export const HomeIcon = styled(MdHome)`
  ${icons}
`;
export const DashboradIcon = styled(MdDashboard)`
  ${icons}
`;
export const UserIcon = styled(MdPerson)`
  ${icons}
`;
export const StarIcon = styled(MdStar)`
  ${icons}
`;
export const PlusIcon = styled(MdAdd)`
  width: 27px;
  height: 27px;
  color: ${({ theme }) => theme.color.white};
`;
