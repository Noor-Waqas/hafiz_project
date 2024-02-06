import React from 'react'
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';
import {  Button, Input, Select, Space } from 'antd';
import { UserOutlined,DownloadOutlined } from '@ant-design/icons';

const options = [
    {
      value: 'Home Delivery',
      label: 'Home Delivery',
    },
    {
      value: 'Urgent',
      label: 'Urgent',
    },
    {
      value: 'Pending Amount',
      label: 'Pending Amount',
    }
  ];



const Index = () => {
  return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}> 
       <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Payment Adjustment</h1>
          <input type="date" className={style.dateStyles} />
        </div>
         <div  className = {style.InputDivStyles} >
          <Space direction="horizentel">
          <Input placeholder="Search Order" className={style.InputStyles}  prefix={<DownloadOutlined className={style.iconStyles} />} />
          <Input placeholder="Filter By Customers" className={style.InputStyles} prefix={<UserOutlined className={style.iconStyles} />} />
          <Input placeholder="Filter By User" className={style.InputStyles} prefix={<UserOutlined className={style.iconStyles} />} />

          <Input className={style.InputStyles} defaultValue="Filter by"/>
          <Select defaultValue="Select"style={{widtAllh:"150px",height:"50px"}} options={options} /> 
          <Button className={style.mainbutton}>Show</Button>
           </Space>
          </div>
    
    </div>
  </>)
}

export default Index