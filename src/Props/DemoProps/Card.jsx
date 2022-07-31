import React, { Component } from "react";

export default class Card extends Component {
  render() {
    //khác biệt giữa state và props:

    //state và props đều là thuộc tính có sẵn cảu components dùng để binding dữ liệu ra giao diện.
    //+sate : là nhiệm vụ quản lý các giá tị thay đổi trên giao dieejnm và có thể gán lại giá trị mới thông qua hàm setState
    //+ prop làm nhiệm vụ nhận giá trị từ nơi sử dụng thẻ (component cha) truyền vào và và không đc gắn lại (readonly)

    //this.prop  là thuộc tính có sẵn của component dùng để nhận giá trị tù component cha truyền vào
    console.log(this.props);
    let { tenSP, gia } = this.props;
    return (
      <div className="card text-white bg-secondary">
        <img
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{gia}</p>
        </div>
      </div>
    );
  }
}
