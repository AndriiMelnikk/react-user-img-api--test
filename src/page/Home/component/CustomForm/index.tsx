import { FC } from "react";
import { Form, Input, Button } from "antd";

import UploadPhoto from "./UploadPhoto";
import { FormValues } from "../../../../types/form";
import {
  createUser,
  useUserDispatch,
  useUserState,
} from "../../../../context/user";
import { StatusReq } from "../../../../types/api";
import { MessageInstance } from "antd/es/message/interface";

type Props = {
  closeModal: (status: boolean) => void;
  messageApi: MessageInstance;
  onUserAdded: () => void;
};

const CustomForm: FC<Props> = ({ closeModal, messageApi, onUserAdded }) => {
  const [form] = Form.useForm();
  const userDispatch = useUserDispatch();
  const { status } = useUserState();

  const onFinish = (values: FormValues) => {
    createUser(userDispatch, values)
      .then((res) => {
        onUserAdded();
        form.resetFields();
        messageApi.open({
          type: "success",
          content: res?.data?.message,
        });
        closeModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Button
          color="purple"
          variant="solid"
          htmlType="submit"
          loading={status === StatusReq.pending}
        >
          Add User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
