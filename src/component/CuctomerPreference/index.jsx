import React from 'react'
import style from "./style.module.scss";
import { SaveOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';
const { Search } = Input;
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];

const index = () => {
    

  return (
    <div>
        <div className={style.HeadingDiv}>
            <h1 className={style.headingStyles}>Customer Preference</h1>
        </div>

        <div className={style.inputDataDiv}>
        <Space direction="vertical" size="middle">
        <Space.Compact>
                <Input
                    style={{
                    width: '60%',
                    }}
                    defaultValue="Customer Preference"
                />
                <Input
                    style={{
                    width: '100%',
                    }}
                    placeholder='Enter Customer Preference Keys '
                />
            </Space.Compact>
            </Space>
            <Button className={style.saveButton}><SaveOutlined />Save</Button>
            </div>


    </div>
  )
}

export default index