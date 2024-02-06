import React from 'react'
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';
import {  Button, Input, Select, Space } from 'antd';
import { UserOutlined,DownloadOutlined } from '@ant-design/icons';

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
          <h1 className={style.headingStyles}>Payment Adjustment</h1>
          <input type="date" className={style.dateStyles} />
        </div>
         <div  className = {style.InputDivStyles} >
          <Space direction="horizentel">
          <Input placeholder="Search Order By" className={style.InputStyles}  prefix={<DownloadOutlined className={style.iconStyles} />} />
          <Input placeholder="Filter By User Id" className={style.InputStyles} prefix={<UserOutlined className={style.iconStyles} />} />
          <Input className={style.InputStyles} defaultValue="Adjustment"/>
          <Select defaultValue="All"style={{width:"150px",height:"50px"}} options={options} /> 
          <Button className={style.mainbutton}>Show</Button>
           </Space>
          </div>
    
    </div>
  </>)
}

export default Index