"use client";
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Form, Input } from 'antd'
import Link from 'next/link';
import React from 'react'

export const SigninForm = () => {

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
     <Card title="Iniciar Sesión"

    >
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Por favor ingrese su nombre de usuario!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Nombre de usuario" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>
          <a style={{ float: 'right' }} href="">
            Olvidé mi contraseña
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Iniciar Sesión
          </Button>
          O <Link href="/auth/create-account">registrarse ahora!</Link>
        </Form.Item>
      </Form>
    </Card>
  )
}
