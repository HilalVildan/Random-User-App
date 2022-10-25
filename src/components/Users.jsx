import React, {useEffect} from "react";
import "./Users.css";
import axios from "axios";

const Users = ({ kullanici, setKullanici }) => {
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setKullanici(res.data.results))
      .catch((err) => console.log(err));
  }, [setKullanici]);

  console.log(kullanici);

  return (
    <div className="container-user">
      {kullanici.map((kisi) => {
        const { email, registered, cell, location, name, picture, id, dob } =
          kisi;

        return (
          <div className="profil" key={id.value}>
            <div className="info">
              <div className="info-div info-isim">
                <img src={picture.large} alt="" />
                <p>
                  {name.title} {name.first} {name.last}{" "}
                </p>
              </div>

              <div className="info-div info-mail">
                <i className="fa-solid fa-envelope-open-text"></i>
                <p>{email}</p>
              </div>
              <div className="info-div info-tel">
                <i className="fa-solid fa-phone"></i>
                <p>{cell}</p>
              </div>
              <div className="info-div info-ülke">
                <i className="fa-solid fa-location-pin"></i>
                <p>
                  {location.city} / {location.country}
                </p>
              </div>
            </div>
            <div className="son">
              <p>Age: {dob.age}</p>
              <p>Registered Date: {registered.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
