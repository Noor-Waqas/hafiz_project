import React, { useState }  from 'react'
import { UserOutlined ,UsergroupAddOutlined,DownloadOutlined} from '@ant-design/icons';
import { Button, Input,  Space ,DatePicker ,Select} from 'antd';
import HeroSection from '../navbar/hero';
import style from "./style.module.scss";

const options = [
  {
    value: 'At Order Creation',
    label: 'At Order Creation',
  },
  {
    value: 'At pickup',
    label: 'At pickup',
  },]
  const FinterBy = [
    {
      value: 'Filter By',
      label: 'Filter By',
    },
    {
      value: 'Select',
      label: 'Select',
    },
    {
      value: 'Home Delivery',
      label: 'Home Delivery',
    },{
      value: 'Urgent',
      label: 'Urgent',
    },{
      value: 'pending Amount',
      label:'Pending Amount'
    },{
      value: 'Package',
      label:' Package'
    }

  ]
    const { RangePicker } = DatePicker;

    const DateRangeInput = () => {
      const [selectedRange, setSelectedRange] = useState(null);
    }
      const handleRangeChange = (dates) => {
        setSelectedRange(dates);
      };
    
      const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

      const handleChangeDiscount = (value) => {
        console.log(`selected ${value}`);
      };
      const handleChangeFilterBy = (value) => {
        console.log(`selected ${value}`);
      };

const index = () => {
  return (
    <div>
      <HeroSection/>
      <div className={style.InputStyleDiv}style={{marginTop:"10px"}}>
        <div>
          <h4 className={style.headingDiv}>Order Report</h4>
          </div>
        <div className={style.bannerDiv}>
        <Space wrap className={style.SelectionDiv}>
              <Select
              defaultValue="Order Type"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: 'Laundry and dry cleaning ',
                  label: 'Laundry and dry cleaning',
                },
                {
                  value: 'Steem Press',
                  label: 'Steem Press',
                },
              ]}
            />
          </Space>
        <RangePicker onChange={handleRangeChange} />
        </div>
      </div>

      <div style={{marginTop:"10px",padding:"20px", display:"flex",gap:"40px"}}>
      <Input className={style.InputStyle} size="large" placeholder="Order Report"  prefix={<DownloadOutlined />} />
       <Input className={style.InputStyle} size="large" placeholder="Filter by customer" prefix={<UsergroupAddOutlined />} />
       <Input className={style.InputStyle} size="large" placeholder="Filter by User" prefix={<UserOutlined />} /> 
       <Space wrap className={style.SelectionDiv}  >
              <Select
              defaultValue="Discount"
              style={{
                width: 120,
                height:40,
              }}
              onChange={handleChangeDiscount}
              options={options}
            />
          </Space>
          <Space wrap className={style.SelectionDiv}  >
              <Select
              defaultValue="Filter By"
              style={{
                width: 120,
                height:40
              }}
              onChange={handleChangeFilterBy}
              options={FinterBy}
               
            />
          </Space>
       <Button className={style.InputStyle} style={{height:"40px",backgroundColor:"#212121",color:"white"}}>Show</Button>
      </div>


    </div>
  )
}

export default index