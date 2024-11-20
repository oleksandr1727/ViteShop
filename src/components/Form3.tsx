// Form2.js
import React, { useState } from 'react';
import { Button, Checkbox, Form, FormProps, Input, InputNumber, message, Select, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import {DriverFormField, DriverModel} from '../models/DriverA';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const navigate = useNavigate();

function Form3({ participant }) {

  const [data, setData] = useState({
    name: '',
    address: '',
    phone: '',
    carModel: '',
    licensePlate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const api = import.meta.env.VITE_PRODUCTS_URL;

  const onSubmit: FormProps<DriverFormField>['onFinish'] = (item) => {

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
  }
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
      <h2>Форма: Інформація про {participant}</h2>
      <Form.Item<DriverFormField> label="Name" name="name">
                    <TextArea style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item<DriverFormField> label="Addres" name="adres">
                    <TextArea style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item<DriverFormField> label="Phone number" name="phonenumber">
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item<DriverFormField> label="Car 2" name="carMark">
                    <TextArea style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item<DriverFormField> label="License plate" name="licensePlate">
                    <TextArea style={{ width: '100%' }} />
                </Form.Item>
    </form>
    </Form>
  );
}
export default Form3;