import React from "react";
import { Form, Input, Button, Upload, message } from "antd";

import { UploadOutlined } from "@ant-design/icons";

import type { UploadFile } from "antd";

interface FormValues {
  name: string;
  city: string;
  image: any;
}

const CustomForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const fileList: UploadFile[] = [
    {
      uid: "0",
      name: "xxx.png",
      status: "uploading",
      percent: 33,
    },
    {
      uid: "-1",
      name: "yyy.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      thumbUrl:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "zzz.png",
      status: "error",
    },
  ];

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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button color="purple" variant="solid" htmlType="submit">
          Add User
        </Button>
      </Form.Item>

      <Form.Item label="Images" name="image" valuePropName="fileList">
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture"
          defaultFileList={fileList}
          onRemove={(file) => {
            console.log(file);
          }}
        >
          <Button color="cyan" variant="outlined" icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
