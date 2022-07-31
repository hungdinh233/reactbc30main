import React, { Component } from "react";

export default class DemoState extends Component {
  username = "cuc cuc";
  status = false; //fales la chua dang nhap, true laf da dang nhap thanh cong

  //this.state: laf thuộc tính có sẵn được kế thừa từ class components của thư viện reactjs. có các giá trị thay đổi trên giao diến sẽ được "predict"và chứa trong thuộc tính của thí.state
  state = {
    status: false,
  };
  renderLogIn = () => {
    //nếu if co return thi khong can viet else
    if (this.state.status) {
      return <span className="text-white">{this.username}</span>;
    }
    return (
      <button
        className="btn btn-success me-5"
        onClick={(e) => {
          //chan su kien reload browser
          e.preventDefault();
          this.dangNhap();
        }}
      >
        Đăng Nhập
      </button>
    );
  };

  dangNhap = () => {
    console.log("dang nhap");
    // this.state.status = true //không được làm theo cách này tức là ko gán giá trị trực tiếp cho state
    // let newState = { status: true };
    // this.setState(newState) nhận vào 1 object mới thay thế cho object state cũ đồng thời render lại giao diện
//Hàm setstate là một ahfm bất đồng bộ
     this.setState({ status: true } ,()=>{
        //hàm số src tự chay sau khi state thay đổi và giao diện đã được render xong
        console.log("state", this.state)
     });
  };
  //---------------------------------------------

  render() {
    return (
      <div className="container">
        <h3>Demo State</h3>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form action="" className="d-flex my-2 my-lg-0">
              {/* {this.status? <span className="text-white">{this.username}</span> : <button className="btn btn-success me-5">Đăng Nhập</button>} */}
              {this.renderLogIn()}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
