import React, { useState } from 'react';
import HeroSection from '../navbar/hero';
import {   Button, Input, Space } from 'antd';
import { UserOutlined ,ContainerOutlined} from '@ant-design/icons';
import { Radio } from 'antd';import style from "./style.module.scss";




const Index = () => {
    const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);}
 return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}> 
       <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Garment Pending Status Report</h1>
          <input type="date" className={style.dateStyles} />
        </div>
         <div  className = {style.InputDivStyles} >
          <Space direction="horizentel">
          <Input placeholder="Filter By User Id" className={style.InputStyles} prefix={<UserOutlined className={style.iconStyles} />} />
           <div style={{border:"1px solid #d9d9d9 ",height:"50px",width:"200px",display:"flex",justifyContent:"center",justifyItems:"center",borderRadius:"3px"}}> 
            <Radio className={style.optionsStyles} value={1}>Home Delivery</Radio>
            </div>
            </Space>
          </div>

          <div style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
          <div style={{display:"flex",gap:"20px"}} >
            <Button className={style.mainbutton}> <ContainerOutlined />Show All Germets</Button>
            <Button className={style.mainbutton}> <ContainerOutlined /> Ready Garments</Button>
            <Button className={style.mainbutton}> <ContainerOutlined />Not Ready Germets</Button>
            <Button className={style.mainbutton}> <ContainerOutlined />Not Delivered Germets</Button>
          </div>
          </div>
    
    </div>
  </>)
}

export default Index