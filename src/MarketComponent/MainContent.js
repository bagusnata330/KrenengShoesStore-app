import React from "react";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      shoes: [],
      cart: [],
      total: 0,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    const shoeData = [
      {
        id: 1,
        name: "jordan 1 high",
        price: 500,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Court-Purple-White_01.jpg",
      },
      {
        id: 2,
        name: "Pressto off-white",
        price: 1500,
        picture: "https://stockx-assets.imgix.net/png/brand-tiles/001-nike.png",
      },
      {
        id: 3,
        name: "Jordan 6 Retro DMP",
        price: 251,
        picture:
          "https://stockx.imgix.net/Air-Jordan-6-Retro-DMP-2020-Product.jpg",
      },
      {
        id: 4,
        name: "Jordan 1 Mid Camo (2020)",
        price: 203,
        picture: "https://stockx.imgix.net/Air-Jordan-1-Mid-Camo-2020.png",
      },
      {
        id: 5,
        name: "Jordan 1 Retro Bred (2001)",
        price: 600,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-Bred-2001-Product.jpg",
      },
      {
        id: 6,
        name: "Adidas Yeezy Boost 350 V2",
        price: 305,
        picture:
          "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra-Product-1.jpg",
      },
      {
        id: 7,
        name: "Jordan 1 Retro High Royal Toe",
        price: 210,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Black-Game-Royal.png",
      },
      {
        id: 8,
        name: "Jordan 1 Retro High Pine green",
        price: 197,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green-Black-Product.jpg",
      },
      {
        id: 9,
        name: "Jordan 1 Retro High NC to Chi",
        price: 199,
        picture:
          "https://stockx.imgix.net/Air-Jordan-1-Retro-High-UNC-Chicago-Leather-W-Product.jpg",
      },
      {
        id: 10,
        name: "Jordan 5 Retro Fire Red Silver",
        price: 232,
        picture:
          "https://stockx.imgix.net/Air-Jordan-5-Retro-Fire-Red-Silver-Tongue-2020.png",
      },
      {
        id: 11,
        name: "Nike Air Force 1 Low White '07 ",
        price: 89,
        picture:
          "https://stockx.imgix.net/Nike-Air-Force-1-Low-White-07-Product.jpg",
      },
      {
        id: 12,
        name: "Adidas Yeezy Boost 700 Wave",
        price: 390,
        picture:
          "https://stockx.imgix.net/Adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg",
      },
      {
        id: 13,
        name: "Jordan 13 Retro White Soar Green Pink (GS)",
        price: 200,
        picture:
          "https://stockx.imgix.net/Air-Jordan-13-Retro-White-Soar-Green-Pink-GS.png",
      },
    ];

    const shoeCards = shoeData.map((shoe) => (
      <ShoeCard key={shoe.id} shoe={shoe} addToCart={this.addToCart}></ShoeCard>
    ));

    this.setState({ shoes: shoeCards });
  }

  addToCart(shoe) {
    console.log("item added to card is ", shoe);

    const isiKeranjang = this.state.cart;
    isiKeranjang.push(shoe);
    this.setState({ cart: isiKeranjang });

    console.log("isi keranjang sekarang adalah ", this.state.cart);
  }

  getCartList() {
    const cartData = this.state.cart;
    const cartCard = cartData.map((shoe, index) => {
      return (
        <li>
          {index + 1}. {shoe.name} ${shoe.price}{" "}
        </li>
      );
    });
    return cartCard;
  }

  getTotalPrice() {
    const cartData = this.state.cart;
    let total = 0;
    // for(let i = 0; i < cartData.length; i++) {
    //   total = total + cartData[i].price;
    // }
    cartData.forEach((shoe) => {
      total = total + shoe.price;
    });
    return total;
  }

  render() {
    return (
      <div>
        <div>{this.state.shoes}</div>
        <div className="totalStyle"
          style={{ display: "block", background: "whitesmoke", color: "black" }}
        >
          <h3 style={{ marginTop: "3rem", paddingLeft: "10px" }}>Cart :</h3>
          <ul>{this.getCartList()}</ul> <hr />
          <strong style={{ paddingLeft: "10px" }}>
            Total: ${this.getTotalPrice()}
          </strong>
          <hr />
        </div>
        <br />
      </div>
    );
  }
}

function ShoeCard(props) {
  const clickBuyBtn = () => {
    props.addToCart(props.shoe);
  };

  return (
    <div className="card shoes-card">
      <img className="img" src={props.shoe.picture} />
      <div className="card-body" alt="">
        <p className="card-text">{props.shoe.name}</p>
        <p className="card-text">${props.shoe.price}</p>
        <button onClick={clickBuyBtn} className="btn btn-success full-width">
          Buy
        </button>
      </div>
    </div>
  );
}

export default MainContent;
