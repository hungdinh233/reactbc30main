import React, { Component } from "react";

export default class TableProduct extends Component {
  render() {
    let { arrProduct } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>DESCRIPTION</th>
            <th>TYPE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((prod, index) => {
            return (
              <tr key = {index}>
                <td>{prod.id}</td>
                <td>
                  <img src= {prod.img} alt="..."></img>
                </td>
                <td>{prod.name}</td>
                <td>{prod.price}$</td>
                <td>{prod.description}</td>
                <td>{prod.productType}</td>
                <td>
                  <button className="btn btn-danger mx-2">Delete</button>
                  <button className="btn btn-primary mx-2">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
