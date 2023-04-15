import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import UserContext from "./UserContext";
import RandomUser from "./components/RandomUser";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [randomUser, setRandomUser] = React.useState();

  function Load() {
    fetch(`https://randomuser.me/api`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results[0]);
        setRandomUser(data.results[0]);
      });
  }

  React.useEffect(() => {
    Load();
  }, []);

  return (
    <UserContext.Provider value={randomUser}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/random">
          <Route index element={<RandomUser />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
