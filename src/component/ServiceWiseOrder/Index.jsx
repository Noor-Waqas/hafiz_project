import React from 'react'
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';
import {  Input, Select, Space } from 'antd';
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
          <h1 className={style.headingStyles}>Service Wise Summary Report</h1>
          <input type="date" className={style.dateStyles} />
        </div>
         <div style={{marginTop:"60px",display:"flex",justifyContent:"center"}}>
          <Space direction="horizentel">
          <Input style={{width:"350px",height:"50px"}}defaultValue="Ledger Name" className={style.ButtonStyles}/>
          <Select defaultValue="All"style={{width:"150px",height:"50px"}} options={options} />  </Space>
          </div>
    
    </div>
  </>)
}

export default Index