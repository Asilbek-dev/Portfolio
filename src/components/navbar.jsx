import "../style/navbar.css";
import React,{ useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  CardImg,
  Container,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const selectLanguageValue = useRef();

  const menus = [
    {
      title: t("Navbar.1"),
      to: "/",
      id: "#home",
    },
    {
      title: t("Navbar.2"),
      to: "/service",
      id: "#service",
    },
    {
      title: t("Navbar.3"),
      to: "/about",
      id: "#about",
    },
    {
      title: t("Navbar.4"),
      to: "/contact",
      id: "#contact",
    },
  ];

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const selectHandleClick = (e) => {
    i18n.changeLanguage(selectLanguageValue.current.value);
  };

  return (
    <div id="navbar">
      <Container className="navbar-expand-md d-flex justify-content-between align-items-center ">
        <NavbarBrand>
          <CardImg src="./images/svg.png" alt="" className="logo ml-sm-1" />
        </NavbarBrand>
        <Nav className={clicked ? "navbar_nav" : "nav"}>
          {menus.map(({ title, id,to }) => (
            <NavItem key={id}>
              <Link className = 'nav-link'  to = {to} onClick={() => handleClick()} >{title}</Link>
              {/* <NavLink href = {id}>{title}</NavLink> */}
            </NavItem>
          ))}
        </Nav>
        <div className = 'd-flex align-items-center'>
            <select
              className="form-select text-light p-1"
              ref={selectLanguageValue}
              onChange={() => selectHandleClick()}
            >
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>
            <div className="navbar-icon d-lg-none d-block" onClick={() => handleClick()}>
              <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
        </div>
      </Container>
    </div>
  );
}
