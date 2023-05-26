import { useContext } from "react";
import PilotoContext from "../PilotoContext";
import { Link } from "react-router-dom";

export default function Home() {
  const handleClick = (id) => {
    fetch(`http://localhost:3002/deletar/${id}`, {
      method: "DELETE",
    });
    window.location.reload(true);
  };

  const piloto = useContext(PilotoContext);
  console.log(piloto);
  return piloto ? (
    (console.log(piloto),
    (
      <div>
        <h1>Home</h1>
        <button>
          <Link to="/criar">Novo Piloto</Link>
        </button>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Número</th>
              <th>Posição</th>
              <th>Categoria</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {piloto.map((piloto) => {
              return (
                <tr key={piloto._id}>
                  <td>{piloto.nome}</td>
                  <td>{piloto.numero}</td>
                  <td>{piloto.posicao}</td>
                  <td>{piloto.categoria}</td>
                  <td>
                    <button>
                      <Link to={`/editar/${piloto._id}`}>Editar</Link>
                    </button>{" "}
                    <button onClick={() => handleClick(piloto._id)}>
                      Deletar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    ))
  ) : (
    <>
      <h1>Home</h1>
      <button>
        <Link to="/criar">Novo Piloto</Link>
      </button>
    </>
  );
}
