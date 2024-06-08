import React, { useState } from 'react';
import { Button, Checkbox, DatePicker, Form, FormProps, Input, Select, Row, Col, Upload } from 'antd';
import styles from './forms.module.scss';
import { PlusOutlined } from '@ant-design/icons';
import './styles.scss';
import Link from 'next/link';
const { TextArea } = Input;
const { Option } = Select;
import type { GetProp, UploadProps } from 'antd';
import { ReportAbandonedAnimalAddType } from '@/api/models/reportAbandonedAnimal';
import ReportAbandonedAnimalService from '@/api/services/reportAbandonedAnimalService';


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

type ReportingUserAddType = {
  name: string;
  surname: string;
  email: string;
  phone: string;
};

type FormType = {
  animals: FieldType[],
  reporting_user: ReportingUserAddType;
  title: string;
  description: string;
  image: string;
  abandonment_location: string;
  abandonment_status: string;
  abandaonmet_date: string;
  observations: string;
};


const onFinish: FormProps<ReportAbandonedAnimalAddType>['onFinish'] = async (values) => {
  const dataEnviar: ReportAbandonedAnimalAddType = {
    animals: [
        {
            "name": "Golfo",
            "image": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=0.665xw:0.998xh;0.0641xw,0&resize=1200:*",
            "description": "Es un perro macho pitbull con ojos verdes",
            "age": 2,
            "coat_color": "Blanco",
            "especie": "Perro",
            "race": "Pitbull",
            "weight": 21,
            "gender": "MALE"
        },
        {
            "name": "Golfo",
            "image": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=0.665xw:0.998xh;0.0641xw,0&resize=1200:*",
            "description": "Es un perro macho pitbull con ojos verdes",
            "age": 2,
            "coat_color": "Blanco",
            "especie": "Perro",
            "race": "Pitbull",
            "weight": 23,
            "gender": "MALE"
        }
    ],
    reporting_user: {
        "name": "John",
        "surname": "Doe",
        "email": "johm.doe@email.com",
        "phone": "3214567891"
    },
    title: "Title",
    description: "Hay un perro abandonado en situación critica, por favor atender rápido",
    image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=0.665xw:0.998xh;0.0641xw,0&resize=1200:*",
    abandonment_location: "Cr 122 # 76 - 14",
    abandonment_status: "CRITICAL"
}
  await ReportAbandonedAnimalService.post(dataEnviar).then((response) => {
    console.log(response);
  });
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const ReportAnimalsForm = () => {
    const [form] = Form.useForm();
    return (
        <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 ">
  
            <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
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
                      label="Imagen del animal" valuePropName="fileList"
                      getValueFromEvent={normFile}
                      >
                      <Upload action="/upload.do" listType="picture-card">
                        <button style={{ border: 0, background: 'none' }} type="button">
                          <PlusOutlined />
                          <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item<FieldType>
                      name="description"
                      rules={[{ required: true, message: 'Please input birth date!' }]}
                    >
                      <TextArea placeholder='Descripción' />
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
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item<FieldType>
                      name="gender"
                      rules={[{ required: true, message: 'Please choose the sex!', whitespace: true }]}
                    >
                      <Select placeholder='Sexo'>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>  
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={24}>
                  <Col className="gutter-row" span={24}>
                    <div className="subtitleFile">
                      <label>
                      <h2 className="pt-4 text-3xl font-bold">Datos del lugar de abandono </h2>
                      <br></br>
                      </label>
                    </div>
                  </Col>
                </Row>

                <Row gutter={16}>
                <Col span={12}>
                  <Form.Item<FormType>
                    name="abandaonmet_date"
                    rules={[{ required: true, message: 'Please input birth date!' }]}
                  >
                    <DatePicker placeholder='Fecha de abandono' style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                  <Col span={12}>
                    <Form.Item<FormType>
                      name="abandonment_status"
                      rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                    >
                      <Input type='text' placeholder='Estado del abandono' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={24}>
                    <Form.Item<FormType>
                      name="abandonment_location"
                      rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                    >
                      <Input type='text' placeholder='Lugar del abandono' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={24}>
                    <Form.Item<FormType>
                      name="observations"
                      rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                    >
                      <TextArea placeholder='Observaciones' />
                    </Form.Item>
                  </Col>
                </Row>
              
                

                <Form.Item className='float-end'>
                  <Button type="primary" htmlType="submit" shape="round" className="buttonSubmit">
                    Registrar animal
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
}