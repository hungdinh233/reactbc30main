import React, { Component } from "react";
import BaiViet from "./BaiViet";
import Card from "./Card";
const danhSachBaiViet = [
  { tieuDe: "1", noiDung: "noi dung 1" },
  { tieuDe: "2", noiDung: "noi dung 2" },
  { tieuDe: "3", noiDung: "noi dung 3" },
];
export default class DemoProps extends Component {
  render() {
    const tenSP = "product 1";
    const gia = 1000;
    const baiViet = {
      tieuDe: "Lam the nao de thanh cong?",
      noiDung:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sed ab optio nisi dignissimos id quas! Est dolore id dolorum nihil provident officia, cumque sint odit illum inventore. Modi, esse.",
    };

    return (
      <div className="container">
        <div className="w-25">
          <Card tenSP={tenSP} gia={gia} />
        </div>

        <div className="w-25">
          <Card tenSP={"product 2"} gia={2000} />
        </div>

        <hr />
        <h3>Demo Bai Viet</h3>
        {danhSachBaiViet.map((baiViet, index) => {
          return (
            <div key={index}>
              <BaiViet obBaiViet={baiViet} />
            </div>
          );
        })}
        {/* <BaiViet obBaiViet={baiViet} /> */}
      </div>
    );
  }
}
