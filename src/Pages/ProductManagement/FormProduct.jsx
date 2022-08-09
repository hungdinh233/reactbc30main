import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: 0,
      img: "",
      productType: "moblie",
      description: "",
    },

    errors: {
      id: "",
      name: "",
      price: 0,
      img: "",
      productType: "moblie",
      description: "",
    },
  };

  handleChange = (e) => {
    let { id, value } = e.target;
    // console.log(id, value)
    // xử lý product info
    let dataType = e.target.getAttribute("data-type");
    let newValue = { ...this.state.productInfo };
    newValue[id] = value;
    // Xử lý lỗi
    let newErrors = { ...this.state.errors };
    //check rỗng
    let errorMess = "";
    if (value.trim() === "") {
      errorMess = id + " Không được bỏ trống";
    } else {
      //lỗi định dạng
      if (dataType == "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          errorMess = id + " phải là số";
        }
      }
    }

    newErrors[id] = errorMess;

    //set state
    this.setState({
      productInfo: newValue,
      errors: newErrors,
    });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //check trước khi submit dữ liệu
    let valid = true;
    let { errors, productInfo } = this.state;
    //check error (tất cả errors phải rỗng)
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        break;
      }
    }
    // check value (productInfo) tất cả value phải khác rỗng
    for (let key in productInfo) {
      if (productInfo[key].trim() === "") {
        valid = false;
        break;
      }
    }
    if (!valid) {
      alert("Dữ liệu không hợp lệ");
      return;
    }
    //hợp lệ
    alert("submitted");
  };
  render() {
    let { createProduct } = this.props;

    return (
      <div className="container">
        <form className="card" onSubmit={this.handleSubmit}>
          <div
            className="card-header bg-dark text-warning"
            style={{ fontSize: "30px" }}
          >
            Product Info
          </div>
          <div className="card-body row">
            <div className="col-6">
              <div className="form-group">
                <p>Id</p>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  name="id"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.errors.id}</p>
              </div>
              <div className="form-group">
                <p>Name</p>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.errors.name}</p>
              </div>
              <div className="form-group">
                <p>Price</p>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  onChange={this.handleChange}
                  data-type="number"
                />
                <p className="text-danger">{this.state.errors.price}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Img Link</p>
                <input
                  type="text"
                  className="form-control"
                  id="img"
                  name="img"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.errors.img}</p>
              </div>
              <div className="form-group">
                <p>Product Type</p>
                <select
                  className="form-control"
                  id="productType"
                  name="productType"
                  onChange={this.handleChange}
                >
                  <option value="mobile">Moblie</option>
                  <option value="tablet">Tablet</option>
                  <option value="laptop">Laptop</option>
                </select>
                <p className="text-danger">{this.state.errors.productType}</p>
              </div>
              <div className="form-group">
                <p>Description</p>
                <textarea
                  rows="4"
                  className="form-control"
                  id="description"
                  name="description"
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.errors.description}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                createProduct(this.state.productInfo);
              }}
            >
              Create
            </button>
            <button className="btn btn-primary mx-2">Update</button>
          </div>
        </form>
      </div>
    );
  }
}
