import React, { Component } from "react";

export default class extends Component {
  handleClick = () => {
    alert("Hello Cybersoft");
  };

  showMessage = (name) =>{
    alert ("Hello" + " " + name)
    debugger 
  }
  render() {
    return (
      <div className="container">
        <h3>HandleEvent</h3>
        <button
          className="btn btn-success ms-3"
          onClick={(e) => {
            //Gọi hàm khác
            this.showMessage("Tien Hung")
          }}
        >
          Click
        </button>
        <button
          className="btn btn-success ms-3"
          onClick={this.handleClick}
          //lưu ý khi gọi this.function ở đây thì không có dấu ngoặc ngay f nếu có thì nó sẽ gọi ngay ở đầu trang đó
        >
          Click
        </button>
        <h3>Handle Event Change</h3>
        <input className="form-control w-25 mt-5" onChange={(e)=>{
            var tagInp = e.target.value; //target là để hướng tới cái event đó
            console.log("Value", tagInp)
        }}></input>
      </div>
    );
  }
}
