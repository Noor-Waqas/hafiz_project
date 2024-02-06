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
          <h1 className={style.headingStyles}>Color</h1>
      </div>
      <div className={style.inputFeildDiv}>
      <Space direction="vertical" size="middle" style={{marginTop:"20px"}}>
        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Color Name" className={style.LedgerButton}/>
          <Input style={{width:"500px"}} type='text'/>
          
        </Space.Compact>
        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Color Name" className={style.LedgerButton}/>
          <Input style={{width:"500px"}} type='text'/>
          
        </Space.Compact>
    </Space>
      </div>
              <div style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
                    <div style={{display:"flex",gap:"10px"}}>
                            <Button className={style.SaveButtonstyles}> <FormOutlined />Create </Button>
                            <Button className={style.SaveButtonstyles}> <DeleteOutlined />Delete</Button>
                    </div>

                </div>
       </div>
    </>
  )
}

export default Index