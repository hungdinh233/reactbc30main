import React, { Component } from "react";
import Card from "../DemoProps/Card";
import CardVip from "./CardVip";

export default class PropsVip extends Component {
  render() {
    let tenThe = "Hello mua he";
    let noiDung = "Xin chao mua he cua toi";
    let doanVan =
      "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

    return (
      <div>
        <div className="container w-25">
          <CardVip cc1={tenThe} cc2={noiDung} para ={doanVan} />
          <CardVip para ={doanVan}/>
        </div>
      </div>
    );
  }
}
