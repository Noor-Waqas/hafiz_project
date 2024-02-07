import React from 'react';
import { Button, Input, Space } from 'antd';
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';

const Index = () => {

  return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}> 
       <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Store Information</h1>
      </div>
      <div className={style.inputFeildDiv}>
      <Space direction="vertical" size="middle" style={{marginTop:"20px"}}>
        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Code" className={style.LedgerButton}/>
          <Input style={{width:"500px"}} type='text'/>
        </Space.Compact>

        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Store Name" className={style.LedgerButton}/>
          <Input style={{width:"500px"}}  type='text'/>
        </Space.Compact>

        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Business Name" className={style.LedgerButton}/>
          <Input style={{width:"500px"}}  type='text'/>
        </Space.Compact>

        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Home" className={style.LedgerButton}/>
          <Input style={{width:"500px"}}  type='text'/>
        </Space.Compact>

        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Contect Us" className={style.LedgerButton}/>
          <Input style={{width:"500px"}}  type='text'/>
        </Space.Compact>

        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Area Location" className={style.LedgerButton}/>
          <Input style={{width:"500px"}}  type='text'/>
        </Space.Compact>

        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Gmail" className={style.LedgerButton}/>
          <Input style={{width:"500px"}}  type='text'/>
        </Space.Compact>
        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="City" className={style.LedgerButton}/>
          <Input style={{width:"500px"}}  type='text'/>
        </Space.Compact>

        <Space.Compact>
          <div style={{marginBottom:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}><Button className={style.updateButton}>Update</Button></div>
        </Space.Compact>
    </Space>
      </div>
     
       </div>
    </>
  )
}

export default Index