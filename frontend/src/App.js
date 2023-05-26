import { Routes, Route } from "react-router-dom";
import React from "react";
import PilotoContext from "./PilotoContext";

import Home from "./components/Home";
import Register from "./components/Register";
import Edit from "./components/Edit";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [piloto, setPiloto] = React.useState();

  function Load() {
    fetch("http://localhost:3002/pilotos")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.message);
        setPiloto(data.message);
      });
  }

  React.useEffect(() => {
    Load();
  }, []);

  return (
    <PilotoContext.Provider value={piloto}>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/criar" element={<Register />} />
        <Route path="/editar/:id" element={<Edit />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </PilotoContext.Provider>
  );
}

export default App;
