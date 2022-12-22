import axios from "axios";

const Buton = ({ person, setPerson }) => {
  const showPerson = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setPerson(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={showPerson}>
        Random User
      </button>
    </div>
  );
};

export default Buton;
