import React from 'react';
import { Button, Input, Space ,Select} from 'antd';
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';

import { SaveOutlined} from '@ant-design/icons';

const SelectReturnGarment = [
    {
      value: 'Re Wash',
      label: 'Re Wash',
    },
    {
      value: 'Duplicate Order',
      label: 'Duplicate Order',
    },
    {
      value: 'Pressing Cuts',
      label: 'Pressing Cuts',
    },
    {
      value: 'Color Bleed',
      label: 'Color Bleed',
    },
    {
      value: 'Color Faded',
      label: 'Color Faded',
    },
    {
      value: 'Chance of Damage',
      label: 'Chance of Damage',
    },
    {
      value: 'Stain not Removable',
      label: 'Stain not Removable',
    },
    {
      value: 'Lost',
      label: 'Lost',
    }
  ];


const Index = () => {

  return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}> 
       <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Cloth Return Cause</h1>
      </div>
      <div className={style.inputFeildDiv}>
      <Space direction="vertical" size="middle" style={{marginTop:"20px"}}>
        <Space.Compact>
          <Input style={{width:"25%"}} defaultValue="Cloth Return Cause" className={style.LedgerButton}/>
          <Input style={{width:"500px"}} type='text' placeholder='Enter Cloth Return Case' />
          <Select defaultValue="Select" style={{width:"150px"}} options={SelectReturnGarment} />

        </Space.Compact>

    </Space>
      </div>
              <div style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
                    <div style={{display:"flex",gap:"10px"}}>
                            <Button className={style.SaveButtonstyles}> <SaveOutlined />Save </Button>
                    </div>

                </div>
       </div>
    </>
  )
}

export default Index