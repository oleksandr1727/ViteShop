import React, { useState } from 'react';
import { Button, Checkbox, Form, FormProps, Input, InputNumber, message, Select, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import {InfoModel, InfoFormField} from '../models/MainInfo';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
function Form1() {


  const [data, setData] = useState({
    date: '',
    time: '',
    location: '',
    address: '',
    physicalHarm: false,
    propertyDamage: false,
    witnessName: '',
    witnessAddress: '',
    witnessPhone: '',
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const api = import.meta.env.VITE_PRODUCTS_URL;

  const onSubmit: FormProps<InfoFormField>['onFinish'] = (item) => {

    console.log(item);

    fetch(api, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => {
        if (res.status === 200) {
            message.success("Product created successfully!");
            navigate("/products");
        }
        else
            message.error("Something went wrong!");
    });

  return (
    <Form
    labelCol={{
        span: 4,
    }}
    wrapperCol={{
        span: 19,
    }}
    layout="horizontal"
    onFinish={onSubmit}
>
    <form>
      <h2>Форма 1: Основна інформація</h2>
      <Form.Item<InfoFormField> label="Date" name="date">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item<InfoFormField> label="Time" name="time">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item<InfoFormField> label="Location" name="location">
                    <TextArea style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item<InfoFormField> label="Addres" name="adres">
                    <TextArea style={{ width: '100%' }} />
                </Form.Item>
 <Form.Item<InfoFormField> name="anyPeoplesDamage" valuePropName="checked" label={null}>
                <Checkbox>Anyone got damaged</Checkbox>
            </Form.Item>
            <Form.Item<InfoFormField> name="anyTransportDamage" valuePropName="checked" label={null}>
                <Checkbox>Anyone got damaged</Checkbox>
            </Form.Item>
      <h3>Свідки:</h3>
      <Form.Item<InfoFormField> label="First name" name="firstName">
                    <TextArea style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item<InfoFormField> label="Addres" name="adres">
                    <TextArea style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item<InfoFormField> label="Phone number" name="phoneNumber">
                    <TextArea style={{ width: '100%' }} />
                </Form.Item>
    </form>
    </Form>
  );
}
}
export default Form1;
