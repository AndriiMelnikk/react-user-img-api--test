import React from "react";
import { Form, Input, Button } from "antd";

import UploadPhoto from "./UploadPhoto";
import { FormValues } from "../../../../types/form";

const CustomForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="add user"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: "Please input your city!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Images" name="image" valuePropName="fileList">
        <UploadPhoto />
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 8, span: 16 }}
        style={{ textAlign: "right" }}
      >
        <Button color="purple" variant="solid" htmlType="submit">
          Add User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
