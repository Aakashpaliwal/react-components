import React, { useEffect, useState } from "react";
import "./cards.scss";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState(null);
  const getEpisodes = async () => {
    const result = await axios.get("https://rickandmortyapi.com/api/character");
    console.log(result);
    setData(result.data.results);
  };

  const watchHandler = (id) => {
    console.log(id);
    let dataArr = [...data];
    let index = dataArr.findIndex((item) => item.id === id);
    console.log(index);
    dataArr[index].watch = !dataArr[index].watch;
    setData(dataArr);
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card_container">
            {data &&
              data
                .filter((item) => item.status === "Dead")
                .map((item) => {
                  return (
                    <div className="card_container_inner" key={item.id}>
                      <div className="card">
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt={item.name}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">{item.location?.name}</p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                          <button
                            className="btn btn-info"
                            onClick={() => watchHandler(item.id)}
                          >
                            {item.watch ? "watched" : "watch"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
