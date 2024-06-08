"use client"
import { Button,Form, FormProps, Input, Select, Row, Col, Upload, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './styles.scss';
const { TextArea } = Input;
const { Option } = Select;
import { ReportAbandonedAnimalAddType } from '@/api/models/reportAbandonedAnimal';
import ReportAbandonedAnimalService from '@/api/services/reportAbandonedAnimalService';


const onFinish: FormProps<ReportAbandonedAnimalAddType>['onFinish'] = async (values) => {

  values.animals[0].image = "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=0.665xw:0.998xh;0.0641xw,0&resize=1200:*"

  const data: ReportAbandonedAnimalAddType = {
    animals: values.animals,
    reporting_user: values.reporting_user,
    title: values.title,
    description: values.description,
    image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=0.665xw:0.998xh;0.0641xw,0&resize=1200:*",
    abandonment_location: values.abandonment_location,
    abandonment_status: values.abandonment_status,
  };
  try {
    const response = await ReportAbandonedAnimalService.post(data);
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
};

const onFinishFailed: FormProps<ReportAbandonedAnimalAddType>['onFinishFailed'] = (errorInfo) => {
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
              <h2 className="pt-4 text-3xl font-bold">¿Quieres reportar un animal en situación de abandono?</h2>
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
                <Row>
                  <Col span={24}>
                    <Form.Item<ReportAbandonedAnimalAddType>
                      name="title"
                      rules={[{ required: true, message: 'Please input title to report!', whitespace: true }]}
                    >
                      <Input placeholder='Ej: Animals abandonado a la orilla del rio' />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item<ReportAbandonedAnimalAddType>
                      name="description"
                      rules={[{ required: true, message: 'Please input description to report!', whitespace: true }]}
                    >
                      <TextArea placeholder='Ej: En la orilla del rio hay un perrito con hambre y frio' />
                    </Form.Item>
                  </Col>
                </Row>
                <Card
                  className='!mb-3'
                  title='Información del Animal Abandonado'
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["animals", 0, "name"]}
                        rules={[{ required: true, message: 'Please input animal name!', whitespace: true }]}
                      >
                        <Input placeholder='Nombre' />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["animals", 0, "description"]}
                        rules={[{ required: true, message: 'Please input animal description!', whitespace: true }]}
                      >
                        <TextArea placeholder='Descripción' />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["animals", 0, "image"]}
                        rules={[{ required: false, message: 'Please upload an animal image!' }]}
                        getValueFromEvent={normFile}
                        >
                        <Upload  action="/upload.do" listType="picture-card">
                          <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                          </button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["animals", 0, "coat_color"]}
                        rules={[{ required: true, message: 'Please input animal coat color!', whitespace: true }]}
                      >
                        <Input type='text' placeholder='Color del animal' />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["animals", 0, "especie"]}
                        rules={[{ required: true, message: 'Please input animal especie!', whitespace: true }]}
                      >
                        <Input placeholder='Especie' />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["animals", 0, "race"]}
                        rules={[{ required: false, message: 'Please input animals race!', whitespace: true }]}
                      >
                        <Input placeholder='Raza' />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["animals", 0, "weight"]}
                        rules={[{ required: false, message: 'Please input animal weight!', whitespace: true }]}
                      >
                        <Input type='number' placeholder='Peso' />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["animals", 0, "gender"]}
                        rules={[{ required: true, message: 'Please choose the sex!', whitespace: true }]}
                      >
                        <Select placeholder='Sexo'>
                          <Option value="MALE">Male</Option>
                          <Option value="FEMALE">Female</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["animals", 0, "age"]}
                        rules={[{ required: false, message: 'Please input animal age!', whitespace: true }]}
                      >
                        <Input type='number' placeholder='Edad' />
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
                <Card
                  title="Datos del lugar de abandono"
                  className='!mb-3'
                >
                  <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item<ReportAbandonedAnimalAddType>
                      name="abandonment_status"
                      rules={[{ required: true, message: 'Please choose the sex!', whitespace: true }]}
                    >
                      <Select placeholder='Estado del abandono'>
                            <Option value="VERY_CRITICAL">Very Critical</Option>
                            <Option value="CRITICAL">Critical</Option>
                            <Option value="MILD">Mild</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item<ReportAbandonedAnimalAddType>
                      name="abandonment_location"
                      rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                    >
                      <Input type='text' placeholder='Estado del abandono' />
                    </Form.Item>
                  </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name="image"
                        rules={[{ required: false, message: 'Please upload an animal image!' }]}
                        getValueFromEvent={normFile}
                        >
                        <Upload  action="/upload.do" listType="picture-card">
                          <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                          </button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
                <Card
                  title="Información adicional"
                >
                  <p className='mb-3'>Para realizar el reporte necesitamos conocerte, digital tus datos personales</p>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["reporting_user", "name"]}
                        rules={[{ required: true, message: 'Please input your name!' }]}
                      >
                        <Input type='text' placeholder='Nombre' />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["reporting_user", "surname"]}
                        rules={[{ required: true, message: 'Please input your surname!', whitespace: true }]}
                      >
                        <Input type='text' placeholder='Apellido' />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["reporting_user", "email"]}
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
                        <Input type='text' placeholder='Email' />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item<ReportAbandonedAnimalAddType>
                        name={["reporting_user", "phone"]}
                        rules={[{ required: true, message: 'Please input your phone!', whitespace: true }]}
                      >
                        <Input type='text' placeholder='N° de Teléfono' />
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
                <Form.Item className='float-end'>
                  <Button type="primary" htmlType="submit" shape="round" className="buttonSubmit">
                    Realizar Reporte
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
}