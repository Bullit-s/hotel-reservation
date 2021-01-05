import React from "react";
import { FormInstance } from "antd/es/form";
import { Form, Input } from "antd";
import { required } from "../../core/helpers/formRules";

interface Props {
  form: FormInstance;
}

export const RegisterForm = ({ form }: Props) => {
  return (
    <Form
      form={form}
      layout="vertical"
      name="auth-form"
      hideRequiredMark={true}
    >
      <Form.Item name="name" label="Имя" rules={[required("Имя")]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[required("Email")]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Пароль" rules={[required("Пароль")]}>
        <Input />
      </Form.Item>
    </Form>
  );
};
