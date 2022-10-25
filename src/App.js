import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import Buton from "./components/Buton";
import "./App.css"
import {useState} from 'react';




function App() {
  const [kullanici, setKullanici] = useState([]);

  return (
    <div className="container">
      <Users kullanici={kullanici} setKullanici={setKullanici} />
      <Buton kullanici={kullanici} setKullanici={setKullanici} />
    </div>
  );
}

export default App;
