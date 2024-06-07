"use client";
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input } from 'antd'
import Link from 'next/link';
import React from 'react'

export const SignupForm = () => {

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (

    <Card
      title="Crear Cuenta"
      style={{
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        marginTop: '50px',
        padding: '20px'
      }}
    >
      <Form
        name="signup"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Por favor ingrese su nombre de usuario!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Nombre de usuario" size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Por favor ingrese su correo electrónico!', type: 'email' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Correo electrónico" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" size="large" />
        </Form.Item>
        <Form.Item
          name="confirm"
          rules={[
            { required: true, message: 'Por favor confirme su contraseña!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Las contraseñas no coinciden!'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Confirmar contraseña" size="large" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }} size="large">
            Crear Cuenta
          </Button>
          ¿Ya tienes una cuenta? <Link href="/auth/login">Iniciar sesión</Link>
        </Form.Item>
      </Form>
    </Card>
  )
}
