import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import "../style/home.css";

export default function Home() {
  const { t } = useTranslation();

  const name = t("Home.2");

  const [getName, setName] = useState("");
  const [getNameBool, setNameBool] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const updateNameGrowth = () => {
    let text = name.substring(0, getName.length + 1);
    if (getName.length == name.length - 1) {
      setNameBool(true);
    }
    setTimeout(() => {
      setName(text);
    }, 200);
  };

  const updateNameDecrease = () => {
    let text = name.substring(0, getName.length - 1);
    if (getName.length === 1) {
      setNameBool(false);
      console.log("bool: false");
    }
    setTimeout(() => {
      setName(text);
    }, 100);
  };

  useEffect(() => {
    if (getNameBool) {
      updateNameDecrease();
    } else {
      updateNameGrowth();
    }
  }, [getName]);

  const changeBackground = () => {
    if (window.scrollY > 1660) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div id="home">
        <Container>
          <Row>
            <Col xs = '12' className="home_text">
              <img
                src="./images/Asilbek.jpg"
                alt=""
                className="rounded-circle"
              />
              <p>{t("Home.1")}</p>
              <h1>
                <span>{getName}</span>
              </h1>
              <h5 className="text-light">{t("Home.3")}</h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
