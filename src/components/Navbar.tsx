import React, { useContext, useMemo, useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useAuthForm } from "../core/hooks/useAuthForm";
import { AuthContext } from "../core/context/AuthContext";
import { signOut } from "../api/user/signOut";

export const Navbar = () => {
  const { user, isLoadingAuth } = useContext(AuthContext);
  const [openStatus, setOpenStatus] = useState(false);
  const { showSignInForm, showSignUpForm } = useAuthForm();

  const menu = useMemo(
    () => (
      <Menu>
        <Menu.Item onClick={showSignInForm}>Вход</Menu.Item>
        <Menu.Item onClick={showSignUpForm}>Регистрация</Menu.Item>
      </Menu>
    ),
    [showSignInForm, showSignUpForm]
  );

  const profile = useMemo(
    () => (
      <Menu>
        <Menu.Item onClick={() => signOut()}>Выход</Menu.Item>
      </Menu>
    ),
    []
  );

  const profileDropdown = useMemo(
    () =>
      isLoadingAuth ? null : (
        <Dropdown overlay={user ? profile : menu} trigger={["click"]}>
          <a
            className="ant-dropdown-link"
            href={"#!"}
            onClick={e => e.preventDefault()}
          >
            {user ? user.displayName : "Авторизация"} <DownOutlined />
          </a>
        </Dropdown>
      ),
    [user, menu, profile, isLoadingAuth]
  );

  const handleToggle = () => {
    setOpenStatus(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Logo to="/">Hotel</Logo>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={openStatus ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/rooms">Номера</Link>
          </li>
          {profileDropdown}
        </ul>
      </div>
    </nav>
  );
};

const Logo = styled(Link)`
  color: var(--mainWhite);
  font-size: 2em;
  line-height: 1;
  padding: 5px 15px;
  border-radius: 90px;
  background: var(--primaryColor);
  border: 2px solid var(--primaryColor);

  &:hover {
    color: var(--primaryColor);
    background: transparent;
    transition: background 0.3s;
  }
`;
