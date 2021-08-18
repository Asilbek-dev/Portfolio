import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Form, Input, Button } from "antd";
import "../style/contact.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main id="contact">
      <Container>
        <Row>
          <Col xs="12" className="contact_theme">
            <h4>{t("Contact.1")}</h4>
          </Col>
        </Row>
        <Form
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Row>
            <Col xs="12" lg={{ size: "6" }} className="contact_input">
              <div>
                <Form.Item
                  name={["user", "name"]}
                  label={t("Contact.2")}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <br />
                <Form.Item
                  name={["user", "email"]}
                  label={t("Contact.3")}
                  rules={[{ type: "email" }]}
                >
                  <Input />
                </Form.Item>
                <br />
                <Form.Item name="phone" label={t("Contact.4")}>
                  <Input type="number" />
                </Form.Item>
              </div>
              <br />
            </Col>
            <Col xs="12" lg={{ size: "6" }} className="contact_input">
              <div>
                <Form.Item
                  name={["user", "introduction"]}
                  label={t("Contact.5")}
                >
                  <Input.TextArea />
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col xs = '12' className="contact_input">
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                {t("Contact.6")}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
