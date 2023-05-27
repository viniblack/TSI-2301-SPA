import { useContext } from "react";
import TarefaContext from "../TarefaContext";
import { Link } from "react-router-dom";

export default function Home() {
  const tarefa = useContext(TarefaContext);
  console.log(tarefa);

  const handleSubmit = (event) => {
    // event.preventDefault();
    // const formData = new FormData(event.target);

    fetch(`http://localhost:3002/atualizar/${tarefa._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: tarefa.nome,
        status: !tarefa.status,
      }),
    });
    console.log(event.target.id);
  };

  return tarefa ? (
    <div>
      <h1>ToDo's</h1>
      <button>
        <Link to="/criar">ADD</Link>
      </button>
      <div>
        <table>
          {tarefa.map((tarefa) => {
            return (
              <>
                <input
                  onChange={handleSubmit}
                  id={tarefa._id}
                  type="checkbox"
                ></input>{" "}
                <label for={tarefa._id}>{tarefa.nome}</label>
                <button>
                  <Link to={`/editar/${tarefa._id}`}>Editar</Link>
                </button>
                <br />
              </>
            );
          })}
        </table>
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
