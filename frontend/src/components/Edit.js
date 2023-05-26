import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Edit() {
  const [piloto, setPiloto] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  function Load() {
    fetch(`http://localhost:3002/editar/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message[0]);
        setPiloto(data.message[0]);
      });
  }

  Load();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch(`http://localhost:3002/editar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: formData.get("nome"),
        numero: parseInt(formData.get("numero")),
        posicao: formData.get("posicao"),
        categoria: formData.get("categoria"),
      }),
    });
    handleClick();
  };

  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          defaultValue={piloto ? piloto.nome : ""}
        />
        <label htmlFor="numero">Número</label>
        <input
          type="text"
          id="numero"
          name="numero"
          defaultValue={piloto ? piloto.numero : ""}
        />
        <label htmlFor="posicao">Posição</label>
        <input
          type="text"
          id="posicao"
          name="posicao"
          defaultValue={piloto ? piloto.posicao : ""}
        />
        <label htmlFor="categoria">Categoria</label>
        <input
          type="text"
          id="categoria"
          name="categoria"
          defaultValue={piloto ? piloto.categoria : ""}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
