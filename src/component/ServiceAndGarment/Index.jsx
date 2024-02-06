import React from 'react'
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';
import {  Button, Input, Select, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const options = [
    {
      value: 'Alteration',
      label: 'Alteration',
    },
    {
      value: 'Dry Cleaning',
      label: 'Dry Cleaning',
    },
    {
      value: 'On Hangers',
      label: 'On Hangers',
    },
    {
      value: 'Stream Press',
      label: 'Stream Press',
    },
    {
      value: 'Sp Stream Press Only',
      label: 'Sp Stream Press Only',
    },
  ];



const Index = () => {
  return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}> 
       <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Service And Garment</h1>
          <input type="date" className={style.dateStyles} />
        </div>
         <div style={{marginTop:"60px",display:"flex",justifyContent:"center"}}>
          <Space direction="horizentel">
          <Input placeholder="Filter By Coustomer Id" style={{width:"350px",height:"50px"}} prefix={<UserOutlined />} />
          <Input style={{width:"350px",height:"50px"}}defaultValue="Process" className={style.ButtonStyles}/>
          <Select defaultValue="All"style={{width:"150px",height:"50px"}} options={options} /> 
          <Button className={style.mainbutton}>Show</Button>
           </Space>
          </div>
    
    </div>
  </>)
}

export default Index