import { FC } from "react";
import { Form, Input, Button, FormInstance } from "antd";

import UploadPhoto from "./UploadPhoto";
import { FormValues } from "../../../../types/form";
import { createUser, useUserDispatch } from "../../../../context/user";

const CustomForm: FC = () => {
  const [form] = Form.useForm();
  const userDispatch = useUserDispatch();

  const onFinish = (values: FormValues) => {
    createUser(userDispatch, values);
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

      <Form.Item label="Images" name="images">
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
