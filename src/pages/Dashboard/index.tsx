import React from "react";
import Sidebar from "../../components/Sidebar";

import { useFetch } from "../../hooks/useFetch";
import { Card, Container, EmailIcon, Profile, WhatsappIcon } from "./style";

interface User {
  id: string;
  name: string;
  username: string;
  phone: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

const Dashboard: React.FC = () => {
  const token = localStorage.getItem("@Permission:token");
  const { data } = useFetch<User>("/login", token);

  if (!data) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/icons/loading.svg" alt="loading" />
      </div>
    );
  }

  function createImage() {
    const inicial = data?.name.substring(2, 0).toUpperCase();

    return inicial;
  }

  return (
    <Container>
      <Sidebar />
      <Card>
        <h1>
          Olá, <span>{data.username}</span>
        </h1>
        <Profile>
          <div className="containerImage">
            <div className="contain">
              <span>{createImage()}</span>
              <p>{data.name}</p>
            </div>
          </div>
          <div className="contact">
            <span>
              <WhatsappIcon />{" "}
              <a
                href={`https://api.whatsapp.com/send?phone=${data.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                {data.phone}
              </a>
            </span>
          </div>
        </Profile>
      </Card>
    </Container>
  );
};

export default Dashboard;
