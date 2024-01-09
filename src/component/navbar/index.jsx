import { AreaChartOutlined, SettingOutlined, UserOutlined ,LoginOutlined,UnorderedListOutlined,HomeOutlined,QuestionCircleOutlined} from '@ant-design/icons';
import { Layout, Menu, theme ,Button} from 'antd';
import { Link, Outlet } from 'react-router-dom';


const { Header, Content, Sider } = Layout;
const items2 = [
    {
      key: 'sub1',
      icon: <HomeOutlined />,
      label: 'Home',
      path: '/',
      content: <Link to="/">Home</Link>,
    },
    {
      key: 'sub2',
      icon: <UserOutlined />,
      label: 'Customer',
      path: '/customer',
      content: <Link to="/customer">Customer</Link>,
    },
    {
      key: 'sub3',
      icon: <AreaChartOutlined />,
      label: 'Reports',
      path: '/reports',
      content: <Link to="/reports">Reports</Link>,
    },
    {
      key: 'sub4',
      icon: <SettingOutlined />,
      label: 'Set up',
      path: '/setup',
      content: <Link to="/setup">Set up</Link>,
    },
    {
      key: 'sub5',
      icon: <QuestionCircleOutlined />,
      label: 'Support',
      path: '/support', 
      content: <Link to="/support">Support</Link>,
    },
    {
      key: 'sub6',
      icon: <UnorderedListOutlined />,
      label: 'Subscription',
      path: '/subscription', 
      content: <Link to="/subscription">Subscription</Link>,
    },
  ];
  
const index = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
      return (
        <Layout>
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
                <div className="logo" style={{ color: 'white' }}>
                +923206437540
                </div>
    
                 <div style={{ fontSize: '20px', color: '#fff' }}>Shop One</div>
    
            <Button icon={<LoginOutlined />} style={{ color: 'white' }} type="text">
              Login
            </Button>
          </Header>
    
          <Layout>
            <Sider
              width={200}
              style={{
                background: colorBgContainer,
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                  height: '100%',
                  borderRight: 0,
                }}
              >
                {items2.map((item) => (
                  <Menu.Item key={item.key} icon={item.icon}>
                    {item.content}
                  </Menu.Item>
                ))}
              </Menu>   
            </Sider>
    
            <Layout
              style={{
                padding: '20px 24px 24px',
              }}
            >
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 580,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Outlet />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      );
}

export default index