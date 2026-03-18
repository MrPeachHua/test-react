import React, { useState } from 'react';
import { Form, Input, Button, Card, Switch, message, Space, Select } from 'antd';
import { SaveOutlined, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import './Settings.css';

const Settings = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    systemName: '我的管理后台',
    theme: 'dark',
    notifications: true,
    autoLogout: 30,
    adminEmail: 'admin@example.com',
    contactPhone: '+86 138 0013 8000',
    companyName: '我的公司',
    companyAddress: '北京市朝阳区',
  };

  const onFinish = (values) => {
    setLoading(true);
    // 模拟保存
    setTimeout(() => {
      message.success('设置保存成功');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="settings">
      <h2>系统设置</h2>
      
      <Card className="settings-card">
        <Form
          form={form}
          name="settings"
          initialValues={initialValues}
          onFinish={onFinish}
          layout="vertical"
        >
          
          <h3>系统信息</h3>
          <div className="form-section">
            <Form.Item
              name="systemName"
              label="系统名称"
              rules={[{ required: true, message: '请输入系统名称' }]} 
            >
              <Input prefix={<UserOutlined />} placeholder="请输入系统名称" />
            </Form.Item>
            
            <Form.Item
              name="theme"
              label="主题"
            >
              <Select
                options={[
                  { value: 'dark', label: '深色主题' },
                  { value: 'light', label: '浅色主题' }
                ]}
                placeholder="选择主题"
              />
            </Form.Item>
          </div>
          
          <h3>安全设置</h3>
          <div className="form-section">
            <Form.Item
              name="autoLogout"
              label="自动登出时间（分钟）"
              rules={[{ required: true, message: '请选择自动登出时间' }]} 
            >
              <Select
                options={
                  [5, 15, 30, 60, 120].map(min => ({
                    value: min,
                    label: `${min} 分钟`
                  }))
                }
                placeholder="选择时间"
              />
            </Form.Item>
            
            <Form.Item
              name="notifications"
              label="系统通知"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
          </div>
          
          <h3>联系信息</h3>
          <div className="form-section">
            <Form.Item
              name="adminEmail"
              label="管理员邮箱"
              rules={[{ type: 'email', message: '请输入有效的邮箱地址' }]} 
            >
              <Input prefix={<MailOutlined />} placeholder="请输入管理员邮箱" />
            </Form.Item>
            
            <Form.Item
              name="contactPhone"
              label="联系电话"
              rules={[{ required: true, message: '请输入联系电话' }]} 
            >
              <Input prefix={<LockOutlined />} placeholder="请输入联系电话" />
            </Form.Item>
          </div>
          
          <h3>公司信息</h3>
          <div className="form-section">
            <Form.Item
              name="companyName"
              label="公司名称"
              rules={[{ required: true, message: '请输入公司名称' }]} 
            >
              <Input placeholder="请输入公司名称" />
            </Form.Item>
            
            <Form.Item
              name="companyAddress"
              label="公司地址"
              rules={[{ required: true, message: '请输入公司地址' }]} 
            >
              <Input placeholder="请输入公司地址" />
            </Form.Item>
          </div>
          
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<SaveOutlined />}
              size="large"
            >
              保存设置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Settings;