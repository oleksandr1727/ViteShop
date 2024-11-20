// Form4.js
import React, { useState } from 'react';
import { Button, Checkbox, Form, FormProps, Input, InputNumber, message, Select, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import {AccidentFormField, AccidentModel} from '../models/RoadAccidentA';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Form4() {
  const navigate = useNavigate();

    const [data, setData] = useState({
      name: '',
      address: '',
      phone: '',
      carModel: '',
      licensePlate: '',
    });

  const [circumstances, setCircumstances] = useState({
    overSpeeding: false,
    ignoringSigns: false,
    drivingWrongSide: false,
    notKeepingDistance: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCircumstances((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  const api = import.meta.env.VITE_PRODUCTS_URL;

  const onSubmit: FormProps<AccidentFormField>['onFinish'] = (item) => {

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
      <h2>Форма 4: Обставини ДТП</h2>
      <Form.Item<AccidentFormField> name="speedLimitBreak" valuePropName="checked" label={null}>
                <Checkbox>Speed limit break</Checkbox>
            </Form.Item>
            <Form.Item<AccidentFormField> name="ignoringRoadSigns" valuePropName="checked" label={null}>
                <Checkbox>Ignoring road sign</Checkbox>
            </Form.Item>
            <Form.Item<AccidentFormField> name="traficInTheOncomingLane" valuePropName="checked" label={null}>
                <Checkbox>Trafic on the oncoming line</Checkbox>
            </Form.Item>
            <Form.Item<AccidentFormField> name="distanceLimitBreak" valuePropName="checked" label={null}>
                <Checkbox>Safe distance limit break</Checkbox>
            </Form.Item>
    </form>
</Form>
    );
}
export default Form4;