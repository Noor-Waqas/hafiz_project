import React from 'react';
import style from "./style.module.scss";
import { SearchOutlined } from '@ant-design/icons';
import {Button,Cascader,DatePicker,Form,Input,InputNumber,Select, } from 'antd';

  const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const index = () => {
  return (
    <div>
      <div className={style.headingDiv}>
        <h1 className={style.headingStyle}>Customer Create/Update/Delete</h1>
      </div>
    
     <Input size="large" placeholder="Search Customer Is Hare" style={{marginTop:"20px"}} prefix={<SearchOutlined />} />
     <div style={{marginTop:"30px"}}>
<Form
    {...formItemLayout}
    variant="filled"
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Name"
      name="Name"
      rules={[
        {
          required: true,
          message: 'Enter Customer Name',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Number"
      name="Number"
      placeholder="Enter Customer Number"
      rules={[
        {
          required: true,
          message: 'Enter Customer Number',
        },
      ]}
    >
      <InputNumber
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item
      label="Address"
      name="Address"
      placeholder="Enter Customer Address"
      rules={[
        {
          required: true,
          message: 'Enter Customer Address',
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      label="Preference"
      name="Preference"
      placeholder ="Enter Customer Preference"
      rules={[
        {
          required: true,
          message: 'Enter Customer Preference',
        },
      ]}
    >
      <Select />
    </Form.Item>

    <Form.Item
      label="Type"
      name="Type"
      placeholder="Enter Customer Type"
      rules={[
        {
          required: true,
          message: 'Enter Customer Type ',
        },
      ]}
    >
      <Cascader />
    </Form.Item>   
    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Button className={style.ButtonStyle} type="primary" htmlType="submit">
        Save
      </Button>
    </Form.Item>
  </Form>
</div>
</div>
  )
}

export default index