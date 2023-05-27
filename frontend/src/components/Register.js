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
        nome: formData.get("tarefa"),
        status: false,
      }),
    });
    handleClick();
  };

  return (
    <div>
      <h1>Criar uma nota</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tarefa">tarefa</label>
        <input type="text" id="tarefa" name="tarefa" />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
