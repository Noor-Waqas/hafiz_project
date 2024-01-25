import React from 'react';
import { Button, Input, Select, Space } from 'antd';
import style from "./style.module.scss";
import HeroSection from '../navbar/hero';

const { Search } = Input;
const options = [
  {
    value: 'Hanger Sale',
    label: 'Hanger Sale',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];

const Index = () => {
  return (
    <>
    <HeroSection/>
    <div style={{marginTop:"10px"}}> 
       <div className={style.HeadingDiv}>
          <h1 className={style.headingStyles}>Payment Entry</h1>
      </div>
      <div className={style.inputFeildDiv}>
      <Space direction="vertical" size="middle" style={{marginTop:"20px"}}>
        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Date" className={style.LedgerButton}/>
          <Input style={{width:"500px"}} type='date'/>
        </Space.Compact>
        <Space.Compact style={{width:"100%"}}  >
          <Input style={{width:"30%"}}defaultValue="Paid To" className={style.LedgerButton}/>
          <Input style={{width:"70%"}} /><Select defaultValue="Hanger Sale" options={options} />
          <Button className={style.LedgerButton}>Add New Ledger</Button>
        </Space.Compact>

        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Amount"className={style.LedgerButton}/>
          <Input style={{width:"500px"}} />
        </Space.Compact>

        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Narration"className={style.LedgerButton}/>
          <Input style={{width:"500px"}} />
        </Space.Compact>
          <div style={{display:"flex",justifyContent:"center"}}>
              <div>
              <Button className={style.SaveButtonstyles}>Save</Button>
              <Button className={style.SaveButtonstyles}>Reset</Button>
              </div>
          </div>
    </Space>
      </div>

      <div style={{marginTop:"20px"}}>
        <Space>
        <Space.Compact>
          <Input style={{width:"20%"}} defaultValue="Date Filters" className={style.ButtonStyles}/>
          <Input style={{width:"300px"}} type='date'/>
        </Space.Compact>
        <Space.Compact style={{width:"100%"}}  >
          <Input style={{width:"50%"}}defaultValue="Ledger Name" className={style.ButtonStyles}/>
          <Select defaultValue="All"style={{width:"50%"}} options={options} />
        </Space.Compact>
        <div style={{display:"flex"}}>
              <div>
              <Button className={style.showButton} >Show</Button>
              <Button className={style.showButton}>Reset</Button>
              </div>
          </div>
        </Space>
      </div>
    </div>
    </>
  )
}

export default Index