import React, { Component } from "react";
import CarItem from "./CarItem";
const data = [
  {
    id: 1,
    name: "black car",
    img: "./img/products/black-car.jpg",
    price: 1000,
  },
  { id: 2, name: "red car", img: "./img/products/red-car.jpg", price: 2000 },
  {
    id: 3,
    name: "silver car",
    img: "./img/products/silver-car.jpg",
    price: 3000,
  },
  {
    id: 4,
    name: "Steel car",
    img: "./img/products/steel-car.jpg",
    price: 4000,
  },
];
export default class CarList extends Component {
  renderCar = () => {
    let { xemChiTiet } = this.props;
    return data.map((car, index) => {
      return (
        <div className="col-3" key={index}>
          <CarItem product={car} xemChiTiet={xemChiTiet} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="text-center">Product List</h3>
        <div className="row">{this.renderCar()}</div>
      </div>
    );
  }
}
