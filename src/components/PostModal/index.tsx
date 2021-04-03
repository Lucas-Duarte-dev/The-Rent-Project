import { useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { PostContainer, Card, Information, IconClose } from "./style";
import { HouseIcon, HotelIcon } from "../../pages/Dashboard/style";

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

export default function PostModal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { handleActiveModal } = useUser();
  const post_id = localStorage.getItem("postId");
  const { data, error } = useFetch<PostData>(`/post/${post_id}`);

  if (error) {
    console.error(error);
  }

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

  return (
    <PostContainer>
      <Card>
        <div className="post-header">
          <img src="/icons/logo.svg" alt="Logo" />

          <button onClick={() => handleActiveModal()}>
            <IconClose />
          </button>
        </div>
        <div className="post-information">
          <div className="post-image">
            <img src={data.images[activeIndex].url} alt={data.title} />
            <div className="images">
              {data.images.map((image, index) => {
                return (
                  <button
                    key={image.id}
                    className={activeIndex === index ? "active" : ""}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={image.url} alt={data.title} />
                  </button>
                );
              })}
            </div>
          </div>
          <Information>
            <div className="informations">
              <h1>
                {data?.address_type}{" "}
                {data?.address_type === "Casa" ? <HouseIcon /> : <HotelIcon />}{" "}
              </h1>
              <p>{data?.title}</p>
              <span>{data?.description}</span>
            </div>

            <div className="price">
              <span>Valor a vista</span>
              <h1>R$ 3.0000.000</h1>
              <button type="button">Agende uma visita</button>
            </div>
          </Information>
        </div>
      </Card>
    </PostContainer>
  );
}
