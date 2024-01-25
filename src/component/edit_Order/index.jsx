import React from 'react'
import style from "./style.module.scss";
import { SaveOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import HeroSection from '../navbar/hero';



const index = () => {
  return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}>
     <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Edit Customer Record</h1>
    </div>
    <div className={style.inputDataDiv}>
        <Space direction="vertical" size="middle">
        <Space.Compact>
                <Input
                    style={{ width: '60%'}}
                    defaultValue="Edit Record"
                />
                <Input
                    style={{
                    width: '100%',
                    }}
                    placeholder='Enter Customer Order Number'
                />
            </Space.Compact>
            </Space>
            <Button className={style.saveButton}><SaveOutlined />Edit Customer</Button>
            </div>
    </div>
  </>)
}

export default index