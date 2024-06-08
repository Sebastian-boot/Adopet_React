"use client";
import { Button, Checkbox, DatePicker, Form, FormProps, Input, Select, Row, Col } from 'antd';
import { Option } from 'antd/es/mentions';
import './styles.scss';
import Link from 'next/link';

type FieldType = {
  name?: string;
  age?: string;
  image?: string;
  description?: string;
  coat_color?: string;
  especie?: string;
  race?: string;
  weight?: string;
  gender?: string;
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
export const ReportAnimalsForm = () => {
    const [form] = Form.useForm();
    return (
        <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
  
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h2 className="pt-4 text-3xl font-bold">Reportanos a un animal a <strong className='text-indigo-700'>Adopet</strong></h2>
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
                      name="age"
                      rules={[{ required: false, message: 'Please input your surname!', whitespace: true }]}
                    >
                      <Input type='number' placeholder='Edad' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item<FieldType>
                      name="image"
                      rules={[{ required: true, message: 'Please upload an image!' }]}
                    >
                      <Input type='file' placeholder='N° de Documento' />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item<FieldType>
                      name="description"
                      rules={[{ required: true, message: 'Please input birth date!' }]}
                    >
                      <textarea placeholder='Descripción'> </textarea>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item<FieldType>
                      name="coat_color"
                      rules={[{ required: true, message: 'Please input your the coat color!' }]}
                    >
                      <Input type='text' placeholder='Color del animal' />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item<FieldType>
                      name="especie"
                      rules={[{ required: true, message: 'Please input your address!', whitespace: true }]}
                    >
                      <Input placeholder='Especie' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item<FieldType>
                      name="race"
                      rules={[{ required: false, message: 'Please input your username!', whitespace: true }]}
                    >
                      <Input placeholder='Raza' />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item<FieldType>
                      name="weight"
                      rules={[{ required: false, message: 'Please input your username!', whitespace: true }]}
                    >
                      <Input type='number' placeholder='Peso' />
                    </Form.Item>
                  </Col>
                </Row>
                
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
    )
}