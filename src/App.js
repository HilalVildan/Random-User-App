import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import Buton from "./components/Buton";
import "./App.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState([]);

  return (
    <div className="container">
      <Users person={person} setPerson={setPerson} />
      <Buton person={person} setPerson={setPerson} />
    </div>
  );
}

export default App;
