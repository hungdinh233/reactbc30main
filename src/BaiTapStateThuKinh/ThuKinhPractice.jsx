import React, { Component } from "react";
const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/glasses/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/glasses/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/glasses/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/glasses/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/glasses/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/glasses/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/glasses/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/glasses/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/glasses/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class ThuKinhPractice extends Component {
  state = {
    defaultGlasses: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glasses/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  //   render ra giao dien cac btn

  GlassesRender = () => {
    let glassesArr = data.map((item, index) => {
      return (
        <button className="btn btn-success me-3" onClick={() => {this.GlassTest(item)}}>
          {item.name}
        </button>
      );
    });
    return glassesArr;
  };
  // SET STATE CHO KINH
  GlassTest = (ClickedGlasses) => {
    this.setState({
      defaultGlasses: ClickedGlasses,
    });
    console.log(ClickedGlasses)
  };
  render() {
    let { id, name, desc, price, url } = this.state.defaultGlasses;
    return (
      <div className=" container">
        <div className="container form-control   flex-column">
          <div className="info d-flex justify-content-around">
            <img
              src="./img/glasses/model.jpg"
              alt="..."
              style={{ width: 400 }}
            />
            <img src={url} alt="..." style={{height: 80 , width: 200}}></img>
            <div
              className="info-render fs-2"
              style={{ background: "black", width: 800, color: "white" }}
            >
              <p>Id: {id}</p>
              <p>Name: {name}</p>
              <p>Description: {desc}</p>
              <p>Price: {price} </p>
              <p>HAPPY SHOPPING!! </p>
            </div>
          </div>

          <div className="mt-5">{this.GlassesRender()}</div>
        </div>
      </div>
    );
  }
}
