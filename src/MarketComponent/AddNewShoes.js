import React, { useState } from "react";
import { produce } from "immer";
import { generate } from "shortid";


const AddNewShoes = () => {
  const [shoe, setShoe] = useState([
    {
      id: generate(),
      shoeName: "",
      shoePrice: "",
      shoePicture: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked", shoe);
    // ... submit to API or something
  };

  //  const shoecard = (shoe) => {
  //     const shoedata = { shoe };
  //     <div>
  //       <div className="card mt-4" key={shoedata.id}>
  //         <div className="card-body">
  //             <h5 className="card-title clr-title">{shoedata.title} </h5>
  //           <h6 className="card-subtitle mb-2 text-muted">{shoedata.title} </h6>
  //           <p className="card-text">{shoedata.body}</p>
  //         </div>
  //       </div>
  //     </div>
  //  };

  return (
    <div className="container addshoess">
      <div className="styleflexx">
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
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  setShoe((currentShoe) =>
                    currentShoe.filter((x) => x.id !== s.id)
                  );
                }}
              >
                x
              </button>
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

        {/* <div>{shoe ? shoecard : null}</div> */}
        {/* <div>{JSON.stringify(shoe)}</div> <br /> */}
        {/* <br /> */}
      </div>
    </div>
  );
};

export default AddNewShoes;