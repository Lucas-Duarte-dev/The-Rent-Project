import React, { createContext, useContext, useState } from "react";

interface UserContextState {
  handleActiveModal: (post_id?: string) => void;
  isActive: boolean;
}

const UserContext = createContext<UserContextState>({} as UserContextState);
const UserProvider: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveModal = (post_id?: string) => {
    localStorage.setItem("postId", String(post_id));

    return setIsActive(!isActive);
  };
  return (
    <UserContext.Provider value={{ handleActiveModal, isActive }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextState {
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useUser };
