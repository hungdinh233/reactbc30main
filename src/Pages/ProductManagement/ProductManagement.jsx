import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";
import axios from "axios";

export default class ProductManagement extends Component {
  state = {
    arrProduct: [
      {
        id: "1",
        name: "product1",
        price: "1000",
        description: "vip1",
        img: "https://picsum.photos/50/50",
        productType: "mobile",
      },
      {
        id: "2",
        name: "product2 hello",
        price: "2000",
        description: "vip2",
        img: "https://picsum.photos/50/50",
        productType: "laptop",
      },
    ],

    productEdit: {
      id: "",
      name: "",
      price: "",
      description: "",
      img: "",
      productType: "",
    },
  };

  createProduct = (newProduct) => {
    console.log(newProduct);
    let arrProdUpdate = this.state.arrProduct;
    arrProdUpdate.push(newProduct);
    this.setState({
      arrProduct: arrProdUpdate,
    });
    console.log(this.state.arrProduct);
  };

  delProduct = (clickedProdId) => {
    console.log(clickedProdId);
    let prodArr = this.state.arrProduct;
    //CÁCH TRUYỀN THỐNG
    // for (let i = 0; i < prodArr.length; i++) {
    //   if (prodArr[i].id === clickedProdId) {
    //     console.log("i ne", i);
    //     prodArr.splice(i, 1);
    //   }
    //   this.setState({
    //     arrProduct: prodArr,
    //   });
    // }
    //CÁCH KHÔN HƠN
    let prodIndex = prodArr.findIndex((sp) => sp.id === clickedProdId);
    prodArr.splice(prodIndex, 1);
    this.setState({
      arrProduct: prodArr,
    });

    console.log(this.state.arrProduct);
  };

  //Product Edit

  productEdit = (clickedProd) => {
    this.setState({
      productEdit: clickedProd,
    });
    console.log(this.state.productEdit);
  };

  productUpdate = (updateProd) => {
    console.log(updateProd);
    let updateProdInState = this.state.arrProduct.find(
      (prod) => prod.id === updateProd.id
    );
    console.log("updateProdInState", updateProdInState);
    // gán giá trị updateProd cho updateProd in Arr bằng vòng lặp pho, cách này quá hay!!
    if (updateProdInState) {
      for (let key in updateProdInState) {
        updateProdInState[key] = updateProd[key];
      }
    }

    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  render() {
    return (
      <div>
        <h3>ProductManagement</h3>
        <FormProduct
          createProduct={this.createProduct}
          productEdit={this.state.productEdit}
          productUpdate={this.productUpdate}
        />
        <TableProduct
          arrProduct={this.state.arrProduct}
          createProduct={this.createProduct}
          delProduct={this.delProduct}
          productEdit={this.productEdit}
        />
      </div>
    );
  }
  componentDidMount() {
    let promise = axios({
      url: "https://svcy.myclass.vn/api/product/getall",
      method: "GET",
    });
    promise.then((result) => {
      this.setState({
        arrProduct: result.data,
      });
    });

    promise.catch((err) => {
      console.log(err);
    });
  }
}
