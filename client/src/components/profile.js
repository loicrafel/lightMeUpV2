import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/profile/random`)
      .then((res) => setData(res.data[0]));
  }, []);

  useEffect(() => {
    setCookie("profil", data._id);
  }, [data]);

  async function setCookie(cname, cvalue) {
    await cvalue;
    document.cookie = cname + "=" + cvalue + ";";
  }

  return (
    <div className="profile">
      {data._id === undefined ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
            rel="stylesheet"
          />
          <div className="container">
            <div className="pic">
              <div className="pic-counter-wrapper"></div>
              <div className="arrow-box">
                <svg
                  className="arrow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"></path>
                </svg>
              </div>
              <img className="images" src={"." + data.picture} alt="profil" />
            </div>
            <div className="name-box">
              <h2>
                User <span className="age"> 18</span>
              </h2>
              <p>A moins d'un kilomètre</p>
              <svg
                className="dots-up"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"></path>
              </svg>
              <svg
                className="arrow-up"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"></path>
              </svg>
            </div>
            <div className="info">
              <br />
              {data.description}
              <br />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
