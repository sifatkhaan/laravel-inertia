import React, { useState } from 'react'
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Link, router, usePage } from "@inertiajs/react";
import { Avatar, Button, Dropdown, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

function AdminLayout({children}) {
  const {auth} = usePage().props
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleLogout = () => {
    router.post('/logout'); 
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link href='/admin/items'>Items</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout  className='min-h-screen'>
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 74,
              height: 74,
            }}
            className='text-white'
          /> 
          <Dropdown menu={userMenu} placement="bottomRight">
          <Button type="text" className='text-white'>
            <Avatar style={{ backgroundColor: '#87d068', marginRight: 8 }} size="small">
              {auth?.user?.name?.charAt(0).toUpperCase()}
            </Avatar>
            {auth?.user?.name}
          </Button>
        </Dropdown>
          {/* <div>Hellow</div> */}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            // minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
         
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout