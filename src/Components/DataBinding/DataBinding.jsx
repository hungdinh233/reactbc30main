import React, { Component } from 'react'

export default class DataBinding extends Component {
 userName = "abc@gmail.com" 
    showInfo(){
        return "Hello Cybersoft";
    }
   
    renderCard = () => {
        return <div>
            USERNAME :{this.userName}
            <img src="https://picsum.photos/900/600" alt="..." />
        </div>

    }
   
   
    //phương thức render
    render() {
        //biến và hàm thì khai báo phải là var let const 
    const hoTen = "Tien Hung";
    const tinhDiemTrungBinh = (diemToan, diemVan) =>{
        return (diemToan+diemVan) / 2 ;
    }
    return (
      <div>dataBinding

        <h2>Họ tên: {hoTen}</h2>
        <h2>Tính điểm trung bình {tinhDiemTrungBinh(5,8)}</h2>
        <h2>{this.showInfo()}</h2>
        <div>
            {this.renderCard()}
        </div>
      </div>
    )
  }
}
