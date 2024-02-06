import React from 'react'
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';
import {  Input,  Space } from 'antd';
import { ProfileOutlined,DownloadOutlined } from '@ant-design/icons';

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
          <h1 className={style.headingStyles}>Area Location</h1>
          <input type="date" className={style.dateStyles} />
        </div>
         <div  className = {style.InputDivStyles} >
          <Space direction="horizentel">
          <Input placeholder="Search By Area Location" className={style.InputStyles}  prefix={<ProfileOutlined className={style.iconStyles} />} />
           </Space>
          </div>
    
    </div>
  </>)
}

export default Index