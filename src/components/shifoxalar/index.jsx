import React, { useEffect, useState } from "react";
import "./style.css";
import { hospital } from "../../mock/mock";
import MiniCard from "../minicontact";
import { useNavigate } from "react-router-dom";

const Shifoxonalar = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(6);

  // useEffect(() => {
  //   try {
  //     fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  //       res.json().then((data) => setItems(data))
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  useEffect(() => {
    setItems(hospital);
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const navigate = useNavigate();
  const move = () => navigate(-1);

  return (
    <>
      <section className="shifo-header">
        <div className="shadow">
          <div className="container">
            <div className="shifo-header__title">
              <p>
                <span onClick={() => move()}>Home</span> /{" "}
                <span>Shifoxonalar</span>
              </p>
              <h2>Bizning Shifoxonalar</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="shifoxonalar">
        <div className="container">
          <div className="shifoxonalar-cards">
            {items.slice(0, visible).map((value) => {
              return (
                <div key={value?.id} className="shifoxonalar-card">
                  <div className="card-image">
                    <img src={value?.image} alt="clinic" />
                  </div>
                  <div className="card-description">
                    <h4>{value.name}</h4>
                    <p>{value?.address}</p>
                    <p>{value?.callCenter}</p>
                  </div>
                  <button className="shifoxonalar-btn">Ko'proq Ko'rish</button>
                </div>
              );
            })}
          </div>
          <button className="shifoxonalar-btn length" onClick={showMoreItems}>
            Ko'proq Shifoxonalar
          </button>
        </div>
      </section>
      <MiniCard />
    </>
  );
};

export default Shifoxonalar;
