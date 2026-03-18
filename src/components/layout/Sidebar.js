import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>管理后台</h3>
      </div>
      <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <span>📊</span>,
            label: <Link to="/dashboard">仪表盘</Link>,
          },
          {
            key: '2',
            icon: <span>👥</span>,
            label: <Link to="/users">用户管理</Link>,
          },
          {
            key: '3',
            icon: <span>📦</span>,
            label: <Link to="/products">产品管理</Link>,
          },
          {
            key: '4',
            icon: <span>⚙️</span>,
            label: <Link to="/settings">系统设置</Link>,
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;