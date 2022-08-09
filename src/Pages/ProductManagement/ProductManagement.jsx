import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";

export default class ProductManagement extends Component {
  state = {
    arrProduct: [
      {
        id: "1",
        name: "product1",
        price: "1000",
        description: "vip1",
        img: "https://picsum.photos/50/50",
        productType: "mobile",
      },
      {
        id: "2",
        name: "product2 hello",
        price: "2000",
        description: "vip2",
        img: "https://picsum.photos/50/50",
        productType: "laptop",
      },
    ],
  };


  createProduct = (newProduct) =>{
    console.log (newProduct)
    // this.setState({})

  }
  render() {
    return (
      <div>
        <h3>ProductManagement</h3>
        <FormProduct createProduct = {this.createProduct} />
        <TableProduct arrProduct={this.state.arrProduct} />
      </div>
    );
  }
}
