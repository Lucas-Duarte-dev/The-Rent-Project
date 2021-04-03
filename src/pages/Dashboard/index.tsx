import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import PostModal from "../../components/PostModal";
import { useFetch } from "../../hooks/useFetch";
import api from "../../services/api";
import {
  Card,
  Container,
  Profile,
  Post,
  WhatsappIcon,
  HouseIcon,
  HotelIcon,
  OpenPostModal,
  LinkToFavorite,
} from "./style";

import { useUser } from "../../context/UserContext";

interface User {
  id: string;
  name: string;
  username: string;
  phone: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

interface PostData {
  id: string;
  address_type: "Casa" | "Apartamento";
  title: string;
  description: string;
  user_id: string;
  images: Array<{
    id: string;
    url: string;
  }>;
  created_at: Date;
  updated_at: Date;
  user: User;
}

const Dashboard: React.FC = () => {
  const { handleActiveModal, isActive } = useUser();
  const token = localStorage.getItem("@Permission:token");
  const { data } = useFetch<User>("/login", token);

  const [post, setPost] = useState<PostData[]>();

  useEffect(() => {
    async function getPost() {
      const response = await api.get(`/posts/${data?.id}`);

      setPost(response.data);
    }
    getPost();
  }, [data?.id, isActive, post]);

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

  function createImage(name: string | undefined) {
    const inicial = name?.substring(2, 0).toUpperCase();

    return inicial;
  }

  const firstPost = post?.pop();

  const post_id = firstPost?.id;

  return (
    <Container>
      {isActive && <PostModal />}
      <Sidebar user_id={data.id} />
      <Card>
        <div className="container-information">
          <h1>Dashboard</h1>
          <span>
            Olá, <strong>{data?.username}</strong>
          </span>
        </div>

        <Profile>
          <div className="containerImage">
            <div className="contain">
              <span>{createImage(data?.name)}</span>
              <p>{data.name}</p>
            </div>
          </div>
          <div className="contact">
            <span>
              <WhatsappIcon />{" "}
              <a
                href={`https://api.whatsapp.com/send?phone=55${data.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                {data.phone}
              </a>
            </span>
          </div>
        </Profile>
      </Card>
      <Post>
        <div className="content-card">
          <span>Último Post</span>
          <OpenPostModal onClick={() => handleActiveModal(post_id)}>
            <div className="owner">
              <span>{createImage(firstPost?.user.username)}</span>
              <p>{firstPost?.user.username}</p>
            </div>

            <h3>
              {firstPost?.address_type === "Casa" ? (
                <HouseIcon />
              ) : (
                <HotelIcon />
              )}{" "}
              {firstPost?.address_type}
            </h3>
            <div className="information">
              <span>{firstPost?.title}</span>
              <p>{firstPost?.description}</p>
            </div>
          </OpenPostModal>
        </div>
        <div className="content-card">
          <span>Quantidade de posts</span>
          <LinkToFavorite to={`/`}>
            <span>{post?.length}</span>
          </LinkToFavorite>
        </div>
      </Post>
    </Container>
  );
};

export default Dashboard;
