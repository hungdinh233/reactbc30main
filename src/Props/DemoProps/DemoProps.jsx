import React, { Component } from "react";
import Card from "./Card";
export default class DemoProps extends Component {
  render() {
    const tenSP = "product 1";
    const gia = 1000;
    return (
      <div className="container">
        <div className="w-25">
          <Card tenSP = {tenSP} gia ={gia}/>
        </div>

        <div className="w-25">
          <Card tenSP = {"product 2"} gia ={2000}/>
        </div>
      </div>
    );
  }
}
