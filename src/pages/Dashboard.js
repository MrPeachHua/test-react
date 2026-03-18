import React from 'react';
import { Card, Row, Col, Statistic, Timeline } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const data = [
    { name: '1月', uv: 4000, pv: 2400, amt: 2400 },
    { name: '2月', uv: 3000, pv: 1398, amt: 2210 },
    { name: '3月', uv: 2000, pv: 9800, amt: 2290 },
    { name: '4月', uv: 2780, pv: 3908, amt: 2000 },
    { name: '5月', uv: 1890, pv: 4800, amt: 2181 },
    { name: '6月', uv: 2390, pv: 3800, amt: 2500 },
  ];

  const activities = [
    { time: '10:30', action: '用户登录', user: '张三' },
    { time: '09:15', action: '创建新订单', user: '李四' },
    { time: '08:45', action: '更新产品信息', user: '王五' },
    { time: '08:20', action: '添加新用户', user: '赵六' },
    { time: '07:55', action: '系统维护', user: '系统' },
  ];

  return (
    <div className="dashboard">
      <h2>仪表盘</h2>
      
      <Row gutter={16} className="stats-row">
        <Col span={6}>
          <Card className="stat-card">
            <Statistic
              title="总用户数"
              value={12560}
              prefix="👥"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="stat-card">
            <Statistic
              title="今日活跃"
              value={2340}
              prefix="⚡"
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="stat-card">
            <Statistic
              title="订单总额"
              value={856420}
              prefix="💰"
              valueStyle={{ color: '#13c2c2' }}
              formatter={(value) => `$${value.toLocaleString()}`}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="stat-card">
            <Statistic
              title="今日订单"
              value={420}
              prefix="📦"
              valueStyle={{ color: '#fa8c16' }}
            />
          </Card>
        </Col>
      </Row>
      
      <Row gutter={16} className="charts-row">
        <Col span={16}>
          <Card title="月度数据统计" className="chart-card">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="系统活动" className="chart-card">
            <Timeline>
              {activities.map((item, index) => (
                <Timeline.Item key={index} color="green">
                  <div className="activity-item">
                    <span className="activity-time">{item.time}</span>
                    <span className="activity-action">{item.action}</span>
                    <span className="activity-user">by {item.user}</span>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;