import React from "react";
import '../style/service.css'
import { useTranslation } from "react-i18next";
import { Card, CardImg, Col, Container, Row,NavLink } from "reactstrap";


const card = [
    {
        link: 'https://foods-table.netlify.app/',
        img: './images/project.jpg',
        title: 'Foods'
    },
    {
        link: 'https://maindemoweb.netlify.app/',
        img: './images/project2.jpg',
        title: 'Main Demo'
    },
    {
        link: 'https://bonfirex.netlify.app/',
        img: './images/project3.jpg',
        title: 'Bonfire'
    },
    {
        link: 'https://travellandingpag.netlify.app/',
        img: './images/project4.jpg',
        title: 'Jadoo'
    },
    {
        link: 'https://edulandingedu.netlify.app/',
        img: './images/project5.jpg',
        title: 'Edu Landing'
    },
]
export default function Service() {
  const { t } = useTranslation();
  return (
    <main id="service" >
      <Container>
        <Row>
          <Col xs = '12' className="text-center service_theme">
            <h4>{t("Services.1")}</h4>
          </Col>
        </Row>
        <Row>
            {card.map(({link,img,title}) => (
                <Col xs = '12' lg = {{size: '3'}} md = {{size: '6'}} sm = {{size: '6'}} className = 'p-2'>
                    <Card>
                        <NavLink href = {link}>
                            <CardImg src = {img}></CardImg>
                        </NavLink>
                        <p>{title}</p>
                    </Card>
            </Col>
            ))}
        </Row>
      </Container>
    </main>
  );
}
