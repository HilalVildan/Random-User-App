import axios from "axios";


const Buton = ({ kullanici, setKullanici }) => {
  const kisiGöster = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setKullanici(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={kisiGöster}>
        Random User
      </button>
    </div>
  );
};

export default Buton