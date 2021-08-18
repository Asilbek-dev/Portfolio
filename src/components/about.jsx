import React from "react";
import { CardImg, Col, Container, Row,NavLink, Button } from "reactstrap";
import "../style/about.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <main id="about">
      <Container>
        <Row>
          <Col xs="12" className = 'about_theme'>
            <h4 className="text-center text-dark">{t("About.1")}</h4>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: "6" }} xs="12" className = 'about_card'>
            <CardImg src="./images/picture.png"></CardImg>
          </Col>
          <Col lg={{ size: "6" }} xs="12" className = 'about_text about_card'>
            <p>
              {t("About.2")}
              <span>{t("About.3")}</span>
            </p>
            <p>
              {t("About.4")}
              <span>{t("About.5")}</span>
            </p>
            <p>
              {t("About.6")}
              <span>{t("About.7")}</span>
            </p>
            <p>
              {t("About.9")}
              <span>{t("About.10")}</span>
            </p>
            <NavLink href="https://resume.io/r/2x038gfHl">
              <Button>{t("About.8")}</Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
