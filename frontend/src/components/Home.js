import { useContext } from "react";
import TarefaContext from "../TarefaContext";
import { Link } from "react-router-dom";

export default function Home() {
  const tarefa = useContext(TarefaContext);
  
  const handleChange = (event) => {
    fetch(`http://localhost:3002/atualizar/${event._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: event.nome,
        status: !event.status,
      }),
    });
  };

  return tarefa ? (
    <div>
      <h1>ToDo's</h1>
      <button>
        <Link to="/criar">ADD</Link>
      </button>
      <div>
        {tarefa.map((tarefa) => {
          return (
            <div key={tarefa._id}>
              <input
                
                onChange={() => handleChange(tarefa)}
                id={tarefa._id}
                type="checkbox"
                defaultChecked={tarefa.status}
              ></input>
              <label  style={tarefa.status === true ? {textDecoration: "line-through"} : {textDecoration: "normal"}} htmlFor={tarefa._id}>{tarefa.nome}</label>
              <button>
                <Link to={`/editar/${tarefa._id}`}>Editar</Link>
              </button>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <>
      <h1>Home</h1>
      <button>
        <Link to="/criar">Novo Piloto</Link>
      </button>
    </>
  );
}
