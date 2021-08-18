import React from "react";
import "../style/footer.css";
import { useTranslation } from "react-i18next";
import { CardImg, Container, NavLink } from "reactstrap";

const messager = [
  {
    title: "https://www.facebook.com/asilbek.ergashev.79",
    img: './images/facebok.svg',
  },
  {
    title: "https://t.me/asilbek_ergashev_devoloper",
    img: './images/telegram.svg',
  },
  {
      title: 'https://www.instagram.com/direct/asilbek025',
      img: './images/instagram.svg' 
  },
  {
      title: 'https://twitter.com/Asilbek48039358',
      img: './images/twitter.svg' 
  },
  {
      title: 'https://mail.google.com/mail/u/0/#inbox',
      img: './images/gmail.png' 
  },
];
export default function Footer() {
  const { t } = useTranslation();
  return (
    <main id="footer">
      <Container className="footer align-items-center">
        <div className="footer_first d-lg-flex d-block align-items-center">
          <div className="messanger_footer">
            {messager.map(({ title, img }) => (
              <NavLink href={title}><CardImg src = {img}></CardImg></NavLink>
            ))}
          </div>
          <div class="mapouter d-lg-flex d-md-flex d-block text-center align-items-center p-3">
            <div>
              <p>
                <span>{t("Contact.7")}</span> {t("Contact.8")}
              </p>
              <p>
                <span>{t("Contact.9")}</span>
                {t("Contact.10")}
              </p>
              <p>
                <span>{t("Contact.11")}</span>
                {t("Contact.12")}
              </p>
            </div>
            <div class="gmap_canvas">
              <iframe
                width="150"
                height="150"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Dang'ara%20tumani%20Abdusamad%20qishlog'i&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
