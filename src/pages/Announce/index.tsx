import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Container, PostContainer } from "./style";
import Sidebar from "../../components/Sidebar";
import ConvertDate from "../../utils/ConvertDate";
import { useUser } from "../../context/UserContext";
import PostModal from "../../components/PostModal";

interface Posts {
  id: string;
  address_type: "Casa" | "Apartamento";
  title: string;
  description: string;
  user_id: string;
  images: Array<{
    id: string;
    url: string;
  }>;
  created_at: string;
  updated_at: string;
}

interface ParamsProps {
  user_id: string;
}
const Announce: React.FC = () => {
  const { user_id } = useParams<ParamsProps>();
  const { isActive, handleActiveModal } = useUser();
  const { data } = useFetch<Posts[]>(`/posts/${user_id}`);
  console.log(data);
  return (
    <Container>
      <Sidebar user_id={user_id} />
      <PostContainer className="post-container">
        {data?.map((post) => {
          return (
            <>
              {isActive && <PostModal />}
              <div
                key={post.id}
                className="card-posts"
                onClick={() => handleActiveModal(post.id)}
              >
                <div className="image">
                  <img src={post.images[0].url} alt={post.title} />
                </div>
                <div className="post-informations">
                  <div className="information">
                    <h1>{post.address_type}</h1>
                    <span>{post.title}</span>
                    <p>{post.description}</p>
                  </div>
                  <div className="values">
                    <span>R$ 3.000.00</span>
                    <p>{ConvertDate(post.updated_at)}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </PostContainer>
    </Container>
  );
};

export default Announce;
