import { useContext } from "react";
import PilotoContext from "../PilotoContext";
import { Link } from "react-router-dom";

export default function Home() {
  const piloto = useContext(PilotoContext);
  console.log(piloto);
  return piloto ? (
    <div>
      <h1>Home</h1>
      <button>
        <Link to="/criar">Novo Piloto</Link>
      </button>
      {piloto.map((piloto) => {
        return (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Número</th>
                <th>Posição</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr key={piloto._id}>
                <td>{piloto.nome}</td>
                <td>{piloto.numero}</td>
                <td>{piloto.posicao}</td>
                <td>
                  <button>
                    <Link to={`/editar/${piloto._id}`}>Editar</Link>
                  </button>{" "}
                  <button>
                    <Link to={`/deletar/${piloto._id}`}>Deletar</Link>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  ) : (
    <p>Carregando...</p>
  );
}
