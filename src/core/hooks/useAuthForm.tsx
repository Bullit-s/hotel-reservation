import { Form, Modal } from "antd";
import React, { useContext, useEffect } from "react";
import { LoginForm } from "../../components/Forms/LoginForm";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { FormTitle } from "../../components/Forms/FormTitle";
import { signUp, SignUpParams } from "../../api/user/signUp";
import { signIn, SignInParams } from "../../api/user/singIn";
import { AuthContext } from "../context/AuthContext";

const { confirm } = Modal;

export const useAuthForm = () => {
  const { user } = useContext(AuthContext);
  const [loginForm] = Form.useForm<SignInParams>();
  const [registerForm] = Form.useForm<SignUpParams>();

  useEffect(() => {
    if (user) {
      Modal.destroyAll();
    }
  }, [user]);

  const handleSignIn = async () => {
    loginForm
      .validateFields()
      .then(async values => {
        await signIn(values);
        loginForm.resetFields();
      })
      .catch(info => {
        console.log("Ошибка авторизации:", info);
      });
  };

  const handleSignUp = async () => {
    registerForm
      .validateFields()
      .then(async values => {
        await signUp(values);
        registerForm.resetFields();
      })
      .catch(info => {
        console.log("Ошибка регистрации:", info);
      });
  };

  const showSignInForm = () => {
    confirm({
      title: <FormTitle>Авторизация</FormTitle>,
      content: <LoginForm form={loginForm} />,
      okText: "Вход",
      cancelText: "Отмена",
      icon: null,
      centered: true,
      closable: true,
      okButtonProps: { onClick: async () => await handleSignIn() }
    });
  };

  const showSignUpForm = () => {
    confirm({
      title: <FormTitle>Регистрация</FormTitle>,
      content: <RegisterForm form={registerForm} />,
      okText: "Регистрация",
      cancelText: "Отмена",
      icon: null,
      centered: true,
      closable: true,
      okButtonProps: { onClick: async () => await handleSignUp() }
    });
  };
  return { showSignInForm, showSignUpForm };
};
