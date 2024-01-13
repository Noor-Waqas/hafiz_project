import React from 'react'
import { Button, Input, Select, Space } from 'antd';
import RadioButton from './RadioButton';
const { Search } = Input;
const options = [
  {
    value: 'record',
    label: 'record',
  },
  {
    value: 'record',
    label: 'record',
  },
  
  
];
import { DashboardOutlined, UserOutlined} from '@ant-design/icons';

const index = () => {
  const add = () =>{
    alert("successfully Add customer")
  }  
  return (
    <div>

     <div style={{display:"flex",justifyContent:"center",flexDirection:"column",marginTop:"50px"}}>
     <div style={{display:"flex",justifyContent:"center"}}><RadioButton/></div><br/>
      <div style={{display:"flex",justifyContent:"center"}}>
      <Space direction="vertical" size="middle"> 
      <Space.Compact>
          <Select defaultValue="Search All" options={options} style={{height:"50px"}} />
          <Input placeholder='Searching the customer record' style={{width:"450px",height:"50px"}}/>
        </Space.Compact>
     </Space>
     </div>
      </div>

      <div style={{marginTop:"50px",display:"flex",gap:"100px",justifyContent:"center"}}>
        <div>
      <Button style={{backgroundColor:"#212121",color:"white",height:"40px"}} onClick={add}><UserOutlined/>Add New Customer</Button>
      <Button style={{backgroundColor:"#212121",color:"white",height:"40px"}}> <DashboardOutlined />Daily Dashbord</Button>
      </div>
    </div>
    </div>
  )
}

export default index