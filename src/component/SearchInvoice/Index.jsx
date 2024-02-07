import React from 'react';
import { Button, Input, Space } from 'antd';
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';

import { FormOutlined ,DeleteOutlined} from '@ant-design/icons';


const Index = () => {

  return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}> 
       <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Search Invoice / Garment</h1>
      </div>
      <div className={style.inputFeildDiv}>
      <Space direction="vertical" size="middle" style={{marginTop:"20px"}}>
        <Space.Compact>
          <Input style={{width:"500px"}} placeholder='Enter Invoice Number' type='text'/>
          <Input style={{width:"20%"}} defaultValue="Search" className={style.LedgerButton}/>
        </Space.Compact>
    </Space>
      </div>
       </div>
    </>
  )
}

export default Index