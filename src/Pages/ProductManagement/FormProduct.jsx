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
      price: "",
      img: "",
      productType: "",
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
      if (productInfo[key] === "") {
        valid = false;
        break;
      }
    }

    if (!valid) {
      let keyWarn = { ...errors };
      for (let key in errors) {
        keyWarn[key] = key + " không hợp lệ";
      }

      this.setState({
        errors: keyWarn,
      });
      console.log("err", errors);
      alert("Dữ liệu không hợp lệ");
      return;
    }
    //hợp lệ
    this.props.createProduct(productInfo);
    alert("submitted");
  };

  static getDerivedStateFromProps(newProps, currentState) {
    //lấy props.productEdit => gán vào state.ProductInfo => sau đó giao diện render ra từ state

    // if (newProps.productEdit.id !== currentState.productInfo.id) {
    //   currentState.productInfo = newProps.productEdit;
    //   return currentState;
    // }
    // return null;
  }

  //chạy trước render sau khi props bị thay đổi
  componentWillReceiveProps(newProps) {
    //khi bấm nút chỉnh sửa lấy props gắn vào state =>giao diện render ra từ state
    this.setState({
      productInfo: newProps.productEdit,
    });
  }

  render() {
    let { productUpdate } = this.props;
    let { id, name, price, img, description, productType } =
      this.state.productInfo;

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
                  value={id}
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
                  value={name}
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
                  value={price}
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
                  value={img}
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
                  value={productType}
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
                  value={description}
                />
                <p className="text-danger">{this.state.errors.description}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                this.handleSubmit(); /*dùng state.productInfo là bởi ở hàm handleChange chúng ta đã onChange e.target tất cả các hành vi khi nhập input và clone vào thằng productInfo từ đó thằng profuctInfo là 1 thằng mới khi ta nhập vào input*/
              }}
            >
              Create
            </button>
            {/* lưu ý để type =  button để js tránh hiểu nút update cũng là nút create hay submit */}
            <button
              className="btn btn-primary mx-2"
              type="button"
              onClick={() => {
                productUpdate(this.state.productInfo);
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}
