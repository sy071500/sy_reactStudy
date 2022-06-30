import React from 'react'
import { Space, Typography } from 'antd';

export default function TyporgraphyExample() {
    const { Text, Link, Title } = Typography;
    
  return (
    <div>
        <Space direction="vertical">
            <Text>Ant Design (default)</Text>
            <Text type="secondary">Ant Design (secondary)</Text>
            <Text type="success">Ant Design (success)</Text>
            <Text type="warning">Ant Design (warning)</Text>
            <Text type="danger">Ant Design (danger)</Text>
            <Text disabled>Ant Design (disabled)</Text>
            <Text mark>Ant Design (mark)</Text>
            <Text code>Ant Design (code)</Text>
            <Text keyboard>Ant Design (keyboard)</Text>
            <Text underline>Ant Design (underline)</Text>
            <Text delete>Ant Design (delete)</Text>
            <Text strong>Ant Design (strong)</Text>
            <Text italic>Ant Design (italic)</Text>
            <Text editable>Ant Design (italic)</Text>
            <Text copyable>Ant Design (italic)</Text>
            <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
            </Link>
        </Space>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
        <Title level={5}>h5. Ant Design</Title>
    </div>
  )
}
