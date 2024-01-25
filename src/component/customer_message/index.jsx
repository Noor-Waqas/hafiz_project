import React, { useState } from 'react';
import { Button, Input, Radio, Space } from 'antd';
import style from "./style.module.scss";
const { TextArea } = Input;
import HeroSection from '../navbar/hero';



const index = () => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    }
  return (<>
  <HeroSection/>
    <div style={{marginTop:"10px"}}>  
    <div className={style.HeadingDiv}>
     <h1 className={style.headingStyles}>Send Promotional SMS: Grow your business by reaching out to your customers with latest offers and promotional schemes.</h1>
    </div>
    <div className={style.radiaButtonDiv}>
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Send to all customers (Total number of customers: 1</Radio>
        <Radio value={2}>Send to selected customers   </Radio>
      </Space>
    </Radio.Group>
    </div>
    <div className={style.textAreaDiv}>
    <TextArea className={style.textAreaStyles} rows={4} placeholder="Enter Any Message Is Hare" maxLength={2}/>
    </div>
    <div className={style.sendButtonDiv}>
        <Button className={style.buttonStyles}>Send Now</Button>
    </div>
</div>
  </>)
}

export default index