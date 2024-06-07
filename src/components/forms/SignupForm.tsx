"use client";
import { Button, Checkbox, DatePicker, Form, FormProps, Input, Select, Row, Col } from 'antd';
import { Option } from 'antd/es/mentions';
import './styles.scss';
import Link from 'next/link';

type FieldType = {
  name?: string;
  surname?: string;
  dni?: string;
  birth_date?: string;
  phone?: string;
  address?: string;
  username?: string;
  email?: string;
  password?: string;
  confirm?: string;
  terms_conditions?: boolean;
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Select.Option key='57' value="57">+57</Select.Option>
      <Select.Option key='58' value="87">+87</Select.Option>
    </Select>
  </Form.Item>
);

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const SignupForm = () => {
  const [form] = Form.useForm();
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-indigo-700 hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/2 bg-cover rounded-l-lg">
            <h1 className="text-white mb-4 font-bold text-lg uppercase">Uniendo Comunidades y Rescatistas</h1>
            <img src="/images/mascotas.png" alt="" className="rounded-full h-48 w-48 object-cover object-center mb-4" />
            <Button type='primary' htmlType="button" >
              <Link href='/auth/login'>
                ¿Ya tienes cuenta con nosotros?
              </Link>
            </Button>
          </div>

          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h2 className="pt-4 text-3xl font-bold">Crea tú Cuenta en <strong className='text-indigo-700'>Adopet</strong></h2>
            <p className='text-sm mb-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At harum neque, suscipit impedit velit voluptatum sit beatae eaque repellat consectetur aperiam laudantium.
            </p>
            <Form
              form={form}
              onFinish={onFinish}
              variant="filled"
              scrollToFirstError
              onFinishFailed={onFinishFailed}
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item<FieldType>
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
                  >
                    <Input placeholder='Nombre' />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item<FieldType>
                    name="surname"
                    rules={[{ required: true, message: 'Please input your surname!', whitespace: true }]}
                  >
                    <Input placeholder='Apellido' />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item<FieldType>
                    name="dni"
                    rules={[{ required: true, message: 'Please input your dni!' }]}
                  >
                    <Input type='number' placeholder='N° de Documento' />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item<FieldType>
                    name="birth_date"
                    rules={[{ required: true, message: 'Please input birth date!' }]}
                  >
                    <DatePicker placeholder='Fecha de Nacimiento' style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item<FieldType>
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder='N° de Teléfono' />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item<FieldType>
                    name="address"
                    rules={[{ required: true, message: 'Please input your address!', whitespace: true }]}
                  >
                    <Input placeholder='Dirección' />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item<FieldType>
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                  >
                    <Input placeholder='Nombre de Usuario' />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item<FieldType>
                    name="email"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input placeholder='Correo' />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item<FieldType>
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password placeholder='Contraseña' />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item<FieldType>
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password placeholder='Confirmar Contraseña' />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item<FieldType>
                name="terms_conditions"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('Should accept terms and conditions!')),
                  },
                ]}
              >
                <Checkbox className='underline italic !text-indigo-500 hover:!text-indigo-700'>Acepto términos y condiciones</Checkbox>
              </Form.Item>
              <Form.Item className='float-end'>
                <Button className='mr-2' htmlType="submit" shape="round">
                  Registrarme como fundación
                </Button>
                <Button type="primary" htmlType="submit" shape="round">
                  Registrarme
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
