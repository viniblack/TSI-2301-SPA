import { useState } from "react";
import Home from "./home";

function Forms() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [usuarioLogado, setUsuarioLogado] = useState();

  function verificar() {
    console.log("Entrou ");
    const url = "http://localhost:3002/login";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ usuario: user, senha: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        setUsuarioLogado(json);
      });
  }

  if (usuarioLogado) {
    return (
      <Home setUsuarioLogado={setUsuarioLogado} usuarioLogado={usuarioLogado} />
    );
  } else {
    return (
      <>
        <div className="text-center">
          <main className="form-signin w-25 m-auto mt-5">
            <img
              className="mb-4"
              src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 fw-normal">Login</h1>

            <div className="form-floating m-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setUser(e.target.value)}
              />
              <label className="floatingInput">User</label>
            </div>

            <div className="form-floating m-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="floatingPassword">Password</label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary"
              onClick={verificar}
            >
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">©TSI - Senac</p>
          </main>
        </div>
      </>
    );
  }
}

export default Forms;
