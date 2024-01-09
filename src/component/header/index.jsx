import React from 'react'
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import style from "./style.module.scss";

const index = () => {
    
  return (
    <div className={style.AppHeader}>
      <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image>
      <Typography.Title>Hafiz dry clear</Typography.Title>
      <Space>
        <Badge  dot>
          <MailOutlined
            style={{ fontSize: 24 }}
         
          />
        </Badge>
        <Badge >
          <BellFilled
            style={{ fontSize: 24 }}
           
          />
        </Badge>
      </Space>
      <Drawer
        title="open"
    
      >
        <List
          renderItem={(item) => {
            return <List.Item>hellow</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
       
      >
      </Drawer>
    </div>

  )
}

export default index




