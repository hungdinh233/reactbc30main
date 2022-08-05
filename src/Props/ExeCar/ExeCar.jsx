import React, { Component } from "react";
import CarList from "./CarList";
import CarModal from "./CarModal";

export default class ExeCar extends Component {
  state = {
    modalState: {
      id: 2,
      name: "red car",
      img: "./img/products/red-car.jpg",
      price: 2000,
    },
  };
  xemChiTiet = (clickedCar) => {
    this.setState({
      modalState: clickedCar,
    });
    // console.log(clickedCar)

  };
  render() {
    return (
      <div className="container-fluid px-5">
        <h3 className="fs-1 fw-bolder text-center">Welcome to our garage!</h3>
        <CarModal modalState={this.state.modalState} />
        <CarList xemChiTiet = {this.xemChiTiet} />
      </div>
    );
  }
}
