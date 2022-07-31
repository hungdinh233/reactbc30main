import React, { Component } from "react";
import "../assets/styles/glassesStyle.css";
// import Model from "../assets/img/glasses/model.jpg"
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
export default class BaiTapStateThuKinh extends Component {
  state = {
    defaultGlasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glasses/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  //render glass ra giao diện
  renderGlasses = () => {
    let glassesArr = data.map((prod, index) => {
      return (
        <button
          className="mx-3 mt-3"
          key={index}
          onClick={() => {
            this.changeGlasses(prod);
          }}
        >
          <img src={prod.url} alt="" style={{ width: 120, height: 50 }} />
        </button>
      );
    });
    return glassesArr;
  };

  // thay đổi kính và data kính
  changeGlasses = (defineGlasses) => {
    this.setState({
      defaultGlasses: defineGlasses,
    });
    console.log(defineGlasses);
  };
  render() {
    let { id, name, price, url, desc } = this.state.defaultGlasses;
    return (
      <div>
        <header className="header">
          <h2>TRY GLASSES APP ONLINE</h2>
        </header>
        <body className="body">
          <div className="body-cover d-flex justify-content-center align-items-center">
            <div className="container d-flex flex-column justify-content-center align-items-center ">
              <section
                className="model-photo d-flex justify-content-between align-items-center"
                style={{ width: 600 }}
              >
                <div className="info-glasses">
                  <img
                    src={url}
                    alt=""
                    style={{ width: 220 }}
                    className="glasses-show"
                  />

                  <div className="info-box">
                    <h4>{name}</h4>
                    <p>
                      {desc.length > 80 ? desc.substring(0, 70) + "..." : desc}
                    </p>
                    <p>Price: {price}</p>
                  </div>
                </div>

                <img
                  src="./img/glasses/model.jpg"
                  alt="..."
                  style={{ width: 250 }}
                />
              </section>
              <section className="glasses-photo mt-5">
                {this.renderGlasses()}
              </section>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
