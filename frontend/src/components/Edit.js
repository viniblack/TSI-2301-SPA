import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Edit() {
  const [tarefa, setTarefa] = React.useState();
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
        setTarefa(data.message[0]);
      });
  }

  useEffect(() => {
    Load();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch(`http://localhost:3002/atualizar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: formData.get("tarefa"),
        status: tarefa.status,
      }),
    });
    handleClick();
  };

  return (
    <div>
      <h1>Criar uma nota</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tarefa">tarefa</label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          defaultValue={tarefa ? tarefa.nome : ""}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
