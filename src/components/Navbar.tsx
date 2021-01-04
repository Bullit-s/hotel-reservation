import React, { Component } from "react";

import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IStateNavbar {
  isOpen: boolean;
}

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

export default class Navbar extends Component<{}, IStateNavbar> {
  public readonly state: Readonly<IStateNavbar> = {
    isOpen: false
  };

  public render() {
    const { isOpen } = this.state;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Logo to="/">Hotel</Logo>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/rooms">Номера</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  private handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
}
