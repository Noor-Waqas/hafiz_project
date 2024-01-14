import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import style from "./style.module.scss";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const index = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const User_Gmail = 'hafiz@gmail.com';
    const User_Password = 'hafiz@gmail.com';
    const navigate=useNavigate()

    const HandleSubmitData = (values) => {
     setLoading(true);
        setTimeout(() => {
        if (values.username === User_Gmail && values.password === User_Password) {
            navigate("/home")
            toast("Login successful");
        } else {
            toast("Invalid credentials");
        }
        setLoading(false);
        }, 1000);
    };
  

    
  return (
    <div className={style.mainSectionDiv}>
      <div className={style.MainFoamDiv}>
        <div className={style.imgStylesDiv} >
      <h1
       
        alt="Logo"
        style={{ width: '60px', marginBottom: '50px',textAlign:"center" }}
      >
    Login
        </h1>
      </div>

      <Form
        form={form}
        name="login-form"
        onFinish={HandleSubmitData}
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item style={{textAlign:"center"}}>
          <Button  htmlType="submit" loading={loading} className={style.ButtonStyles}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
    <ToastContainer />
    </div>
  )
}

export default index