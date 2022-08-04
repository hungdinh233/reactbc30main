import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { prodName, prodPrice, prodImg } = this.props;
    return (
      <div className="card ">
        <img src={prodImg} alt="..." />
        <div className="card-body">
          <p>{prodName}</p>
          <p>${prodPrice}</p>
          <button className="btn bg-dark text-white">Add to cart</button>
        </div>
      </div>
    );
  }
}
