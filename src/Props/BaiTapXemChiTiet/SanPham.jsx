import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { item, phoneClick } = this.props;
    return (
      <div className="card">
        <img src={item.hinhAnh} alt="" height={400} />
        <div className="card-body">
          <h3>{item.tenSP}</h3>
          <p>{item.giaBan.toLocaleString()} đ</p>
          <button
            className="btn bg-dark text-white"
            onClick={() => {
              phoneClick(item);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
