import React from 'react';
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const handleLogout = () => {
    // 在实际应用中，这里会清除登录状态
    alert('退出登录功能将在实际后端集成后实现');
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>后台管理系统</h1>
        <Space>
          <span className="user-info">管理员</span>
          <Button type="primary" onClick={handleLogout}>退出登录</Button>
        </Space>
      </div>
    </header>
  );
};

export default Header;