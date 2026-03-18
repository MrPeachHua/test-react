import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Popconfirm, message, Space, Tag, DatePicker } from 'antd';
import { SearchOutlined, PlusCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: '智能手表', category: '电子产品', price: 899, stock: 120, status: '上架', createdAt: '2026-01-15' },
    { id: 2, name: '无线耳机', category: '电子产品', price: 399, stock: 85, status: '上架', createdAt: '2026-02-03' },
    { id: 3, name: '运动水壶', category: '生活用品', price: 59, stock: 230, status: '上架', createdAt: '2026-01-28' },
    { id: 4, name: '笔记本电脑', category: '电子产品', price: 5999, stock: 15, status: '下架', createdAt: '2026-01-10' },
    { id: 5, name: '保温杯', category: '生活用品', price: 89, stock: 180, status: '上架', createdAt: '2026-02-15' },
    { id: 6, name: '智能台灯', category: '电子产品', price: 299, stock: 65, status: '上架', createdAt: '2026-03-01' },
  ]);
  const [searchText, setSearchText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    setLoading(true);
    setTimeout(() => {
      setProducts(products.filter(product => product.id !== id));
      message.success('产品删除成功');
      setLoading(false);
    }, 1000);
  };

  const handleAddProduct = () => {
    message.info('添加产品功能将在实际后端集成后实现');
  };

  const filteredProducts = products.filter(product =>
    (product.name.toLowerCase().includes(searchText.toLowerCase()) ||
     product.category.toLowerCase().includes(searchText.toLowerCase())) &&
    (categoryFilter === 'all' || product.category === categoryFilter) &&
    (statusFilter === 'all' || product.status === statusFilter)
  );

  const categories = [...new Set(products.map(p => p.category))];

  const columns = [
    {
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      render: (text) => (
        <Tag color="blue" style={{ fontWeight: 'bold' }}>
          {text}
        </Tag>
      ),
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `¥${price.toLocaleString()}`,
    },
    {
      title: '库存',
      dataIndex: 'stock',
      key: 'stock',
      render: (stock) => (
        <span className={stock < 20 ? 'low-stock' : ''}>
          {stock}
        </span>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === '上架' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '创建日期',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} onClick={() => message.info('编辑功能将在实际后端集成后实现')}>编辑</Button>
          <Popconfirm
            title="确定要删除这个产品吗？"
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
    <div className="products">
      <div className="products-header">
        <h2>产品管理</h2>
        <Button 
          type="primary" 
          icon={<PlusCircleOutlined />} 
          onClick={handleAddProduct}
        >
          添加产品
        </Button>
      </div>
      
      <div className="products-filters">
        <div className="filter-group">
          <Input
            placeholder="搜索产品名称或分类"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 250, marginRight: 16 }}
          />
        </div>
        
        <div className="filter-group">
          <span>分类：</span>
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ marginRight: 16, padding: '4px 8px' }}
          >
            <option value="all">全部</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <span>状态：</span>
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ marginRight: 16, padding: '4px 8px' }}
          >
            <option value="all">全部</option>
            <option value="上架">上架</option>
            <option value="下架">下架</option>
          </select>
        </div>
      </div>
      
      <Table
        columns={columns}
        dataSource={filteredProducts}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        className="products-table"
      />
    </div>
  );
};

export default Products;