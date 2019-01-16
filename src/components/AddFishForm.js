import React, { Component } from "react";

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();

    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    // console.log(fish);
    this.props.addFish(fish);
    e.target.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" placeholder="name" ref={this.nameRef} />
        <input name="price" placeholder="price" ref={this.priceRef} />
        <select name="status" placeholder="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="desc" ref={this.descRef} />
        <input name="image" placeholder="image" ref={this.imageRef} />
        <button type="submit">Add Fish!</button>
      </form>
    );
  }
}

export default AddFishForm;
