import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-4">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid " border="7px solid black" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-3">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-3">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-3">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="fw-bold fs-3">
            <span className="fw-bold fs-3">Gender : </span>
            {gender}
          </div>
          <div className="fw-bold fs-3">
            <span className="fw-bold fs-3">Location: </span>
            {location?.name}
          </div>
          <div className="fw-bold fs-3">
            <span className="fw-bold fs-3">Origin: </span>
            {origin?.name}
          </div>
          <div className="fw-bold fs-3">
            <span className="fw-bold fs-3">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
