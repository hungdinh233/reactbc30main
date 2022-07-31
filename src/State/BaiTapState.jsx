//rcc
import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    imgSrc: "./img/products/black-car.jpg", //default state
    fSize: 16, //default fs
  };
  render() {
    return (
      <div className="container">
        <h3>Bài tập chọn màu xe</h3>
        <div className="row">
          <div className="col-6">
            <img src={this.state.imgSrc} className="w-75" alt="..." />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger m-2"
              onClick={() => {
                //thay đổi hình
                this.setState({
                  imgSrc: "./img/products/red-car.jpg",
                });
              }}
            >
              RED
            </button>
            <button
              className="btn btn-dark m-2"
              onClick={() => {
                this.setState({
                  imgSrc: "./img/products/black-car.jpg",
                });
              }}
            >
              BLACK
            </button>
            <button
              className="btn btn-secondary m-2"
              onClick={() => {
                this.setState({
                  imgSrc: "./img/products/silver-car.jpg",
                });
              }}
            >
              SILVER
            </button>
            <button
              className="btn btn-default m-2 border "
              onClick={() => {
                this.setState({
                  imgSrc: "./img/products/steel-car.jpg",
                });
              }}
            >
              STEEL
            </button>
          </div>
        </div>
        <h3>Bài tập tăng giảm fontsize</h3>
        <p style={{ fontSize: this.state.fSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facere
          nam, hic eius ducimus dolore voluptate dolores blanditiis minus
          quibusdam dignissimos officia assumenda consequuntur doloremque
          dolorum totam magni, vero aperiam.
        </p>
        <div></div>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize + 2,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize - 2,
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
