import React, { Component } from "react";
// dùng cách 1 khi css cho page
import "../StyleRender/style.css";
//dùng khi class có thể bị thay đổi bởi người dùng
import style from "../StyleRender/StyleRender.module.css";
//cách style trực tiếp (cách 3) dùng khi giá trị style bị thay đổi bởi 1 event của người dùng
export default class StyleRender extends Component {
  render() {
    return (
      <div className="container">
        StyleRender
        <p className="color-red">Hello Cybershop - style css cách 1</p>
        <p class={`${style["color-blue"]} display-4`}>
          Text blue - Style css cách 2
        </p>
        <p
          style={{ color: "green", padding: "15px", backgroundColor: "black" }}
        >
          Color Green - style css cách 3
        </p>
      </div>
    );
  }
}
