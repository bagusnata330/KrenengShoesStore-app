import React from "react";

class ShoeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shoe: [], Name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="container" style={{background:"white",marginTop:"5rem"}}>
        <h3>Add New Shoe</h3>
        <AddShoe shoe={this.state.shoe} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">Write ur shoe type here : </label> <br/>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.Name}
          />
          <button style={{marginLeft:"10px"}}>Add #{this.state.shoe.length + 1}</button> 
        </form> <br/>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ Name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.Name.length === 0) {
      return;
    }
    const newshoe = {
      Name: this.state.Name,
      id: Date.now(),
    };
    this.setState((state) => ({
      shoe: state.shoe.concat(newshoe),
      Name: "",
    }));
  }
}

class AddShoe extends React.Component {
  render() {
    return (
      <div>
        <ul style={{ background: "white" }}>
          {this.props.shoe.map((shoe) => (
            <li key={shoe.id}>{shoe.Name}</li>
          ))}
        </ul>
      </div>
    );
  }
}


export default ShoeForm;
