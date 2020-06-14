import React from "react";

class ShoeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      name: "",
      price: null,
      picture: "",
    };
    this.handleChangeShoeName = this.handleChangeShoeName.bind(this);
    this.handleChangeShoePrice = this.handleChangeShoePrice.bind(this);
    this.handleChangeShoePicture = this.handleChangeShoePicture.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div style={{ background: "white" }}>
        <div className="container" style={{ marginTop: "5rem" }}>
          <h3>Add New Shoe</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Enter the shoe data that you want to add here :
            </label>
            <br />
            <input
              id="new-todo"
              placeholder="shoe name"
              onChange={this.handleChangeShoeName}
              value={this.state.name}
            />
            <input
              type="number"
              id="new-todo"
              placeholder="shoe price"
              onChange={this.handleChangeShoePrice}
              value={this.state.price}
            />
            <input
              id="new-todo"
              placeholder="shoe Picture"
              onChange={this.handleChangeShoePicture}
              value={this.state.picture}
            />
            <br />
            <br />
            <button className="btn btn-success">Add</button> <br />
          </form>
          <AddShoe shoes={this.state.shoes} />
          <br />
        </div>
      </div>
    );
  }

  handleChangeShoeName(event) {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  }
  handleChangeShoePrice(event) {
    console.log(event.target.value);
    this.setState({
      price: event.target.value,
    });
  }
  handleChangeShoePicture(event) {
    console.log(event.target.value);
    this.setState({
      picture: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name.length === 0) {
      return;
    }

    // create shoe object to push into shoe array in state
    const newShoe = {
      id: Date.now().toString(),
      name: this.state.name,
      price: this.state.price,
      picture: this.state.picture,
    };
    console.log('new shoe: ', newShoe);

    // get all the shoes from state
    const shoes = this.state.shoes;
    // add new shoe to the shoes array in state
    shoes.push(newShoe);
    this.setState({
      shoes: shoes,
      name: "",
      price: "",
      picture: "",
    });
    return;



    // SHOE NAME
    // const shoeName = {
    //   Name: this.state.Name,
    //   id: Date.now(),
    // };
    // this.setState((state) => ({
    //   shoe: state.shoe.concat(shoeName),
    //   Name: "",
    // }));

    // SHOE PRICE
    // const shoePrice = {
    //   Price: this.state.Price,
    //   id: Date.now(),
    // };
    // this.setState((state) => ({
    //   shoe: state.shoe.concat(shoePrice),
    //   Price: "",
    // }));

    // SHOE PICTURE
    // const shoePicture = {
    //   Picture: this.state.Picture,
    //   id: Date.now(),
    // };
    // this.setState((state) => ({
    //   shoe: state.shoe.concat(shoePicture),
    //   Picture: "",
    // }));
  }
}

class AddShoe extends React.Component {
  render() {
    return (
      <div>
        <br />
        {this.props.shoes.map((shoe) => (
          <div key={shoe.id} className="card shoes-cardd">
            <img className="img" src={shoe.picture} />
            <div className="card-body" alt="">
              <p className="card-text">{shoe.name}</p>
              <p className="card-text">${shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoeForm;

// <div>
//   <ul>
//     {this.props.shoe.map((shoe) => (
//       <li key={shoe.id}>{shoe.Name}</li>
//     ))}
//   </ul>
// </div>

// handleChangeName(e) {
//   this.setState({
//     Name: e.target.value,
//   });
// }
// handleChangePrice(e) {
//   this.setState({
//     Price: e.target.value,
//   });
// }
// handleChangePicture(e) {
//   this.setState({
//     Name: e.target.value,
//   });
// }

{
  /* <button style={{ marginLeft: "10px" }}>
              {/* Add #{this.state.shoe.length + 1} */
}
{
  /* Add */
}
{
  /* </button> */
}
