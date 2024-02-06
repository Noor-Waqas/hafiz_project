import React from 'react'
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';
import { Button, Input } from 'antd';
import {CopyOutlined} from "@ant-design/icons";


const Index = () => {
  return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}> 
       <div className={style.HeadingDiv}>
          <h1 > Change Password </h1>
      </div>
      <div className={style.MainInputDiv}>
        <div className={style.MainInputSecondDiv}>
            <Input type='text' placeholder='Current Password' className={style.inputStyling} required/>
            <Input type='text' placeholder='New Password' className={style.inputStyling} required/>
            <Input type='text' placeholder='Confirm Password' className={style.inputStyling} required/>
        </div>
      </div>

       <div className={style.updateButton}>
            <Button className={style.updateButtonStyles}> <CopyOutlined />Update</Button>
        </div>
    </div>
  </>)
}

export default Index