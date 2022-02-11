import ArrowToTop from "./ArrowToTop";
import { Form, Button, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faInfoCircle,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faViber,
  faTelegramPlane,
  faInstagram,
  faYoutube,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <ArrowToTop />

      <div className="subscribe-cont">
        <div className="subscribe-header">
          <span style={{ marginRight: "5px" }}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </span>
          <span>Все акции и новости в одном письме!</span>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Button variant="primary" type="submit" className="sub-btn">
            Subscribe
          </Button>
        </Form>
      </div>
      <div className="wrap-cont">
        <div className="footer-wrap-item contacts">
          <h3>Контакты</h3>
          <hr />
          <div>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <span>ул. Вискозная, 3</span>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <span>б-р Ивана Лепсе (Вацлава Гавела), 16</span>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <span>ул. Новоконстантиновская, 1В</span>
          </div>
          <div>
            <Button href="#" variant="primary" size="lg">
              Схема проезда
            </Button>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faInfoCircle} />
            </span>
            <span>
              <a href="tel:08008001112">0800 800 1112</a>
            </span>
          </div>
        </div>
        <div className="footer-wrap-item">
          <h3>Информационная поддержка</h3>
          <hr />
          <Nav>
            <Nav.Item>
              <Nav.Link href="#">О компании</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Новости</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Наши сервисы</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Доставка и оплата</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Возврат и обмен</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Работа</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Загрузки</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Вопросы и ответы</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Контакты</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Публичная оферта</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="footer-wrap-item ">
          <h3>Наши сервисы</h3>
          <hr />
          <Nav>
            <Nav.Item>
              <Nav.Link href="#">Академия ВиЯр</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">ViyarPro</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Маркетинговая поддержка</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Viyar Bazar</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="footer-wrap-item footer-info-cont">
          <h3>Информационные кнопки</h3>
          <hr />
          <Button href="#" variant="primary" size="lg" className="footer-info">
            <span style={{ marginRight: "10px" }}>
              <FontAwesomeIcon icon={faCalendarCheck} size="2x" />
            </span>
            <span> Статус заказа</span>
          </Button>
          <Button href="#" variant="primary" size="lg" className="footer-info">
            <span>
              <FontAwesomeIcon icon={faStreetView} size="2x" />
            </span>
            <span> Посмотреть 3D тур</span>
          </Button>
        </div>
        <div className="footer-wrap-item social-network-cont">
          <h3>Мы в соцсетях</h3>
          <hr />
          <a href="/">
            <FontAwesomeIcon icon={faViber} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <div className="bottom-line">© 2002-2222, ТМ"ВIIIIIIІЯР"</div>
      </div>
    </footer>
  );
};

export default Footer;
