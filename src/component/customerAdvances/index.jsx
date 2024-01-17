import React from 'react'
//badnam na ho gy to kya nam na ho ga 
import style from "./style.module.scss";
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const index = () => {
  return (
    <div>
    <div className={style.HeadingDiv}>
     <h1 className={style.headingStyles}>Customer Advances</h1>
    </div>
    <div className={style.inputDivStyles}>
    <Input className={style.inputStyles} size="large" placeholder="Filter By Customers" prefix={<UserOutlined />} />
    </div>
    </div>
  )
}

export default index