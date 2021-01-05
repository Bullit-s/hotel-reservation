import React, { useContext, MouseEvent } from "react";
import styled from "styled-components";
import { AuthContext } from "../core/context/AuthContext";
import { useAuthForm } from "../core/hooks/useAuthForm";

export const Booking = () => {
  const { user } = useContext(AuthContext);
  const { showSignInForm, showSignUpForm } = useAuthForm();

  const handleSignIn = (e: MouseEvent) => {
    e.preventDefault();
    showSignInForm();
  };

  const handleSignUp = (e: MouseEvent) => {
    e.preventDefault();
    showSignUpForm();
  };

  return (
    <Card>
      <Content>
        {user ? (
          <>sd</>
        ) : (
          <Text>
            Для того, чтобы забронированить номер&nbsp;
            <Link href={"#!"} onClick={handleSignIn}>
              Авторизуйтесь
            </Link>
            &nbsp;или&nbsp;
            <Link href={"#!"} onClick={handleSignUp}>
              Зарегистрируйтесь
            </Link>
            &nbsp;.
          </Text>
        )}
      </Content>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mainWhite);
  min-height: 150px;
  background-color: var(--primaryColor);
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Text = styled.div`
  text-align: center;
`;

const Link = styled.a`
  color: var(--mainWhite);
  text-decoration: underline;

  &:hover {
    color: var(--mainWhite);
    opacity: 0.7;
  }
`;
