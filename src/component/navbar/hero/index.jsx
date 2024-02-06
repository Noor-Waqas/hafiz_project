import  { useState } from "react";
import {
  DownloadOutlined,
  UserOutlined,
  SettingOutlined,
  FundProjectionScreenOutlined,
  ContactsOutlined,
  ReconciliationOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import style from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";

const items = [
  {
    label: "Customer",
    key: "Customer",
    icon: <UserOutlined />,
    path: "/",
    content: <Link to="/">Home</Link>,
    children: [
      {
        type: "group",
        label: "Customer",
        children: [
          {
            label: "Home",
            key: "/",
          },
          {
            label: "Cuctomer Preference",
            key: "/preference",
          },
          {
            label: "Add New",
            key: "/customer",
          },
          {
            label: "Merge",
            key: "/merge",
          },
          {
            label: "Send Promotional Sms",
            key: "/message",
          },
          {
            label: "Cuctomer Address",
            key: "/customer.addwance",
          },
        ],
      },
    ],
  },
  {
    label: "Drop",
    key: "Drop",
    icon: <DownloadOutlined />,
    children: [
      {
        type: "group",
        label: "Drop",
        children: [
          {
            label: "Edit Order",
            key: "/edit",
          },
          {
            label: "Cancel Oeder",
            key: "/cancel.order",
          },
          {
            label: "Delete Oeder",
            key: "/delete.order",
          },
        ],
      },
    ],
  },
  {
    label: "Process",
    key: "Process",
    icon: <FundProjectionScreenOutlined />,
    children: [
      {
        type: "group",
        label: "Process",
        children: [
          {
            label: "Print QR TAgs",
            key: "/printetag",
          },
          {
            label: "Pending For Finishing",
            key: "/panding.state",
          },
          {
            label: "Paking Stikers",
            key: "/print.tag",
          },
        ],
      },
    ],
  },
  {
    label: "Accounts",
    key: "Accounts",
    icon: <ContactsOutlined />,
    children: [
      {
        type: "group",
        label: "Accounts",
        children: [
          {
            label: "Cash/Days Book",
            key: "/cash.book.day",
          },
          {
            label: "Detail Cash/Day Book",
            key: "/cash.Details.book",
          },
          {
            label: "Expensis",
            key: "/expence",
          },
          {
            label: "Income",
            key: "/income",
          }
          // {
          //   label: "Payment Type",
          //   key: "PaymentType",
          // },
          // {
          //   label: "Text Report",
          //   key: "TextReport",
          // },
        ],
      },
    ],
  },
  {
    label: "Reports",
    key: "Reports",
    icon: <ReconciliationOutlined />,
    children: [
      {
        type: "group",
        label: "Reports",
        children: [
          {
            label: "Order",
            key: "/order.report",
          },
          {
            label: "Service Wise Order",
            key: "/service.wise.order",
          },
          {
            label: "Service And Garment",
            key: "/service.and.garment",
          },
      
          {
            label: "Garment Status",
            key: "/garment.status",
          },
          {
            label: "Payments Adjustment",
            key: "/payment.adjustment",
          },
          {
            label: "Order by Locality",
            key: "/order.by.locality",
          },
          
        ],
      },
    ],
  },
  {
    label: "Master Data",
    key: "Master Data",
    icon: <DatabaseOutlined />,
    children: [
      {
        type: "group",
        label: "Master Data",
        children: [
          {
            label: "Store Information",
            key: "StoreInformation",
          },
          {
            label: "Price List",
            key: "PriceList",
          },
          {
            label: "Garment Descriptions",
            key: "GarmentDescriptions",
          },
          {
            label: "Brand",
            key: "Brand",
          },
          {
            label: "Colours",
            key: "Colours",
          },
          {
            label: "Garment Return Cause",
            key: "GarmentReturnCause",
          },
          {
            label: "Payment Adjustment Type",
            key: "PaymentAdjustmentType",
          },
          {
            label: "Payment Mode Type",
            key: "PaymentModeType",
          },
          {
            label: "Holidays",
            key: "Holidays",
          },
          {
            label: "Garments Checking Staff",
            key: "setting:2",
          },
        ],
      },
    ],
  },
  {
    label: "Admin",
    key: "Admin",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Admin",
        children: [
          {
            label: "Chsnge Password",
            key: "ChsngePassword",
          },
          {
            label: "Access Authentication",
            key: "AccessAuthentication",
          },
          {
            label: "Set Up",
            key: "Set Up",
          },
          {
            label: "Design Tag",
            key: "Design Tag",
          },
          {
            label: "Search Invoice",
            key: "SearchInvoice",
          },
          {
            label: "Daily Dashboard",
            key: "DailyDashboard",
          },
          {
            label: "SMS Configuration",
            key: "SMSConfiguration",
          },
          {
            label: "Payment Gateway Setup",
            key: "PaymentGatewaySetup",
          },
          {
            label: "Email Configuration",
            key: "EmailConfiguration",
          },
          {
            label: "Sticker Configuration",
            key: "StickerConfiguration",
          },
          {
            label: "Qdc Marketplace",
            key: "Qdc Marketplace",
          },
        ],
      },
    ],
  },
];
const Index = () => {
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate(e.key)
    setCurrent(e.key)
  }
  return (
    <Menu
      className={style["menu-item"]}
      onClick={clickHandler}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Index;