import React from "react";
import Header from "./Components/Header/Header.js";
import { Button } from "./Components/Button";
import { Title } from "./Components/Title";

const App = () => {

  const Username = "Rodrigo"
  const Usersurname = "Clavijo"

  return (
    <>
      <Header name={Username} id="1" surname={Usersurname}>
        <button />
        <title />
      </Header>
    </>
  )
}

export default App