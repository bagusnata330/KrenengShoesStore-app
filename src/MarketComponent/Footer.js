import React, { useState, Component } from "react";
import { produce } from "immer";
import { generate } from "shortid";

const Footer = () => {
  const [shoe, setShoe] = useState([
    {
      id: "1",
      shoeName: "jordan 1 high",
      shoePrice: "500",
      shoePicture:
        "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Court-Purple-White_01.jpg",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked",shoe);
    // ... submit to API or something
  };


  return (
    <div style={{ textAlign: "center" }}>
      <button
        className="btnn"
        onClick={() => {
          setShoe((currentShoe) => [
            ...currentShoe,
            {
              id: generate(),
              shoeName: "",
              shoePrice: "",
              shoePicture: "",
            },
          ]);
        }}
      >
        add new shoe
      </button>
      {shoe.map((s, index) => {
        return (
          <div key={s.id}>
            <input
              onChange={(e) => {
                const shoeName = e.target.value;
                setShoe((currentShoe) =>
                  produce(currentShoe, (v) => {
                    v[index].shoeName = shoeName;
                  })
                );
              }}
              value={s.shoeName}
              placeholder="shoe name"
            />
            <input
              onChange={(e) => {
                const shoePrice = e.target.value;
                setShoe((currentShoe) =>
                  produce(currentShoe, (v) => {
                    v[index].shoePrice = shoePrice;
                  })
                );
              }}
              value={s.shoePrice}
              placeholder="shoe price"
            />
            <input
              onChange={(e) => {
                const shoePicture = e.target.value;
                setShoe((currentShoe) =>
                  produce(currentShoe, (v) => {
                    v[index].shoePicture = shoePicture;
                  })
                );
              }}
              value={s.shoePicture}
              placeholder="shoe picture"
            />
            <br />
          </div>
        );
      })}
      <div>
        <button
          type="button"
          className="btn btnn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div>{JSON.stringify(shoe)}</div> <br />
      <br />
    </div>
  );
};

export default Footer;
