"use client";
import { Button, Checkbox, Form, FormProps, Input } from 'antd'
import Link from 'next/link';
import React from 'react'

import './styles.scss';
import { GoogleOutlined } from '@ant-design/icons';
import { GoogleIcon } from '../icons/GoogleIcon';


type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const SigninForm = () => {


  return (
     <div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-r-none">
						<h3 className="pt-4 pb-4 text-2xl text-center">Iniciar Sesión</h3>
            <Form
                className='!px-8 !pt-6 !pb-8 !mb-4 bg-white rounded'
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input placeholder='Nombre de Usuario o Email' variant="filled" />
                </Form.Item>

                <Form.Item<FieldType>
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password placeholder='Contraseña' variant="filled" />
                </Form.Item>

                <Form.Item<FieldType>
                  name="remember"
                  valuePropName="checked"
                >
                  <Checkbox className='!italic !text-slate-400'>Recordar inicio de sesión</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button className='w-full px-4 py-2' shape="round" type="primary" htmlType="submit">
                    Iniciar Sesión
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button className='w-full px-4 py-2' shape="round" htmlType="submit">
                    ¡Crea una cuenta!
                  </Button>
                </Form.Item>
                <div className="flex justify-end mb-4">
                  <a
                    className="inline-block text-sm text-indigo-500 align-baseline hover:text-indigo-700"
                    href="#"
                  >
                    ¿Has olvidado tu contraseña?
                  </a>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <div className="border-t border-gray-300 w-full"></div>
                  <div className="mx-3 text-gray-500 font-semibold">o</div>
                  <div className="border-t border-gray-300 w-full"></div>
                </div>
                <Form.Item>
                  <Button className='w-full px-4 py-2 !border-gray-200'
                    icon={<GoogleIcon width={20} height={20} />}
                    htmlType="button"
                    type="text">
                    Usar Google
                  </Button>
                </Form.Item>
              </Form>
					</div>
					<div className="w-full h-auto bg-[#5B53D1] hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/2 bg-cover rounded-r-lg">
            <h1 className="text-white font-bold text-lg font-thin italic">¡Que Gusto Volver a Verte!</h1>
            <h1 className="text-white  font-bold text-4xl	underline mb-4 uppercase">Bienvenido de Nuevo</h1>
            <p className='text-center text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste repellat, consectetur nisi tempora eligendi delectus beatae saepe odit explicabo ea quibusdam, modi fugiat? Voluptate eos natus magnam asperiores quaerat. Magni.</p>
          </div>
				</div>
			</div>
		</div>
  )
}
