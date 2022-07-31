//rcc
//lưu ý trong bài này có dùng key, vd  key = {index}; thì vì tính chất là không thể đặt chạy 2 div riêng lẽ trong component nên hoặc là ta cho 2 div vào chung 1 duv cha, hoặc ngắn gọn hơn, ta phải dùng key cho từng div riêng lẻ này, trong vòng lặp for thì ta sẽ sử dụng key là index của chúng.
import React, { Component } from "react";
const data = [
  {
    id: "1",
    name: "product 1",
    price: 1000,
    img: "https://i.pravatar.cc?u=1",
  },
  {
    id: "2",
    name: "product 2",
    price: 2000,
    img: "https://i.pravatar.cc?u=2",
  },
  { id: "3", name: "product 3", price: 3000, img: "https://i.pravatar.cc?u=3" },
];
export default class RenderWithMap extends Component {
  renderProduct = () => {
    //cách 1
    // let jsxArr = [];
    // for (let index = 0; index < data.length; index++) {
    //   let prod = data[index];
    //   let tr = (
    //     <tr key={index}>
    //       <td>{prod.id}</td>
    //       <td>{prod.name}</td>
    //       <td>{prod.price}</td>
    //       <td>
    //         <img src={prod.img} alt="..." width={50} />
    //       </td>
    //     </tr>
    //   );
    //   jsxArr.push(tr);
    // }
    // return jsxArr;

    //cách 2: dùng map: gọi hàm map với chức năng đưa ra các object của mảng (ở vd này là prod) và index vị trí của object trong mảng đó
    let jsxArr = data.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} alt="..." width={50} />
          </td>
        </tr>
      );
    });
    return jsxArr;
  };
  renderCardProduct = () => {
    return data.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={prod.img} alt="..." />
            <div className="card-body">
              <p>{prod.name}</p>
              <p>{prod.price}</p>
              <button className="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Table Product</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct(this.data)}</tbody>
        </table>
        <hr />
        <h3>Product List</h3>
        <div className="row">{this.renderCardProduct()}</div>
      </div>
    );
  }
}
