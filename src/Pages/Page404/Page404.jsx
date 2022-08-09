import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class  extends Component {
  render() {
    return (
      <div className='container'>
<h3 className='text-center'>
    Không tìm thấy dữ liệu!
    Đề nghị bạn <NavLink to = "">trở về trang chủ</NavLink>
</h3>

      </div>
    )
  }
}
