import React, { ChangeEvent, FormEvent, useState } from "react";
import { useParams } from "react-router";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";
import { Container, Form, Plus } from "./style";

interface ParamsProps {
  user_id: string;
}

const CreatePost: React.FC = () => {
  const { user_id } = useParams<ParamsProps>();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Casa");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });
    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = new FormData();

    data.append("address_type", type);
    data.append("title", title);
    data.append("description", descriptionValue);
    images.forEach((image) => {
      data.append("images", image);
    });
    data.append("user_id", user_id);

    const response = await api.post(`/posts/${user_id}`, data);
    console.log(response.data);

    alert("Post criado com sucesso");
  }
  console.log(type);
  return (
    <Container>
      <Sidebar user_id={user_id} />
      <Form onSubmit={handleSubmit}>
        <h1>Novo anúncio</h1>

        <div className="input-container">
          <label htmlFor="title">Titulo</label>
          <input
            id="title"
            placeholder="Digite o titulo que defina sua casa"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="description">Descrição</label>
          <strong>Máximo de 255 caracteres</strong>
          <textarea
            placeholder="Quantos comodos a sua casa tem?"
            maxLength={255}
            name="description"
            id="description"
            onChange={(e) => setDescriptionValue(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="type">Tipo</label>
          <select
            name="address_type"
            id="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
          </select>
        </div>
        <div className="input-container">
          <label>Imagens</label>
          {previewImages.length > 5 ? (
            <strong className="images-error">
              Limite máximo! Coloque apenas 5 imagens
            </strong>
          ) : (
            <strong>Adicione até 5 fotos</strong>
          )}
          <div className="image-container">
            {previewImages.map((image) => (
              <img key={image} src={image} alt={title} />
            ))}
          </div>
          <label htmlFor="images[]" className="new-image">
            <Plus />
          </label>

          <input
            multiple
            onChange={handleSelectImage}
            type="file"
            id="images[]"
            className="images"
          />
        </div>
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default CreatePost;
