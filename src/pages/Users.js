import React, { useState } from 'react';
import { Table, Button, Input, Popconfirm, message, Space } from 'antd';
import { SearchOutlined, PlusCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员', status: '激活', lastLogin: '2026-03-18 09:30:00' },
    { id: 2, name: '李四', email: 'lisi@example.com', role: '编辑', status: '激活', lastLogin: '2026-03-17 14:22:15' },
    { id: 3, name: '王五', email: 'wangwu@example.com', role: '用户', status: '冻结', lastLogin: '2026-03-15 11:15:30' },
    { id: 4, name: '赵六', email: 'zhaoliu@example.com', role: '管理员', status: '激活', lastLogin: '2026-03-18 08:45:10' },
    { id: 5, name: '钱七', email: 'qianqi@example.com', role: '用户', status: '激活', lastLogin: '2026-03-16 16:30:45' },
  ]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    setLoading(true);
    setTimeout(() => {
      setUsers(users.filter(user => user.id !== id));
      message.success('用户删除成功');
      setLoading(false);
    }, 1000);
  };

  const handleAddUser = () => {
    message.info('添加用户功能将在实际后端集成后实现');
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (text) => (
        <span className={`role-tag ${text === '管理员' ? 'admin' : text === '编辑' ? 'editor' : 'user'}`}>
          {text}
        </span>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <span className={`status-tag ${text === '激活' ? 'active' : 'inactive'}`}>
          {text}
        </span>
      ),
    },
    {
      title: '最后登录',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} onClick={() => message.info('编辑功能将在实际后端集成后实现')}>编辑</Button>
          <Popconfirm
            title="确定要删除这个用户吗？"
            onConfirm={() => handleDelete(record.id)}
            okText="是"
            cancelText="否"
          >
            <Button type="link" icon={<DeleteOutlined />} danger>删除</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="users">
      <div className="users-header">
        <h2>用户管理</h2>
        <Button 
          type="primary" 
          icon={<PlusCircleOutlined />} 
          onClick={handleAddUser}
        >
          添加用户
        </Button>
      </div>
      
      <div className="users-search">
        <Input
          placeholder="搜索姓名或邮箱"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 300 }}
        />
      </div>
      
      <Table
        columns={columns}
        dataSource={filteredUsers}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        className="users-table"
      />
    </div>
  );
};

export default Users;