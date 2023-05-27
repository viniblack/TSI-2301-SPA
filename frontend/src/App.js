import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import TarefaContext from "./TarefaContext";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Edit from "./components/Edit";
import Register from "./components/Register";

function App() {
  const [tarefa, setTarefa] = useState();

  function Load() {
    fetch("http://localhost:3002/listar")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setTarefa(data);
      });
  }
  useEffect(() => {
    Load();
  }, []);

  return (
    <div className="App">
      <TarefaContext.Provider value={tarefa}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/editar/:id" element={<Edit />} />
          <Route path="/criar" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </TarefaContext.Provider>
    </div>
  );
}

export default App;
