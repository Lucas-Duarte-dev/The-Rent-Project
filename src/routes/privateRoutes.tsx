import React, { useEffect, useState } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

interface RoutesPropsData extends RouteProps {
  role?: string;
}

const PrivateRoutes: React.FC<RoutesPropsData> = ({ role, ...rest }) => {
  const [permission, setPermission] = useState([] as string[]);

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get("/users/roles");

      const findRole = response.data.some((r: string) =>
        role?.split(",").includes(r)
      );
      setPermission(findRole);
    }

    loadRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { userLogged } = useAuth();

  if (!userLogged()) {
    return <Redirect to="/" />;
  }

  if (!role && userLogged()) {
    return <Route {...rest} />;
  }

  return permission ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoutes;
