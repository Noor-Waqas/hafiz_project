import React from 'react'
import style from "./style.module.scss";
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import HeroSection from '../navbar/hero';


const Index = () => {
  return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}> 
       <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Print QR Tags</h1>
          <input type="date" className={style.dateStyles} />
      </div>

      <div className={style.mainInputDiv}>

      <div className={style.inputStyle} >
        <Input placeholder="Search Order" style={{width:"300px"}} prefix={<UserOutlined />} />
        <Input placeholder="Search Invoice Number" style={{width:"300px"}} prefix={<UserOutlined />} />
     </div>
    <div className={style.inputStyle}>
      <Button className={style.mainbutton}>Preview</Button>
      <Button className={style.mainbutton}>Print</Button>
    </div>
    </div>
    </div>
 </> )
}

export default Index