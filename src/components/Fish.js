import React, { Component } from "react";
import formatPrice from "../helpers";

class Fish extends Component {
  render() {
    const name = this.props.details.name;
    const price = this.props.details.price;
    const image = this.props.details.image;
    const desc = this.props.details.desc;
    const status = this.props.details.status;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
