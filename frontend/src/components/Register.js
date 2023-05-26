import React from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch(`http://localhost:3002/criar`, {
      method: "POST",
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
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" />
        <label htmlFor="numero">Número</label>
        <input type="text" id="numero" name="numero" />
        <label htmlFor="posicao">Posição</label>
        <input type="text" id="posicao" name="posicao" />
        <label htmlFor="categoria">Categoria</label>
        <input type="text" id="categoria" name="categoria" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
