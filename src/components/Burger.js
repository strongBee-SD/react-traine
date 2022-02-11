import { useState } from "react";
import { Link } from "react-router-dom";
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faBalanceScale,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { Offcanvas, Form, Nav } from "react-bootstrap";

const Burger = () => {
  // const [isActive, setActive] = useState(false);

  // const triggerState = useCallback(() => {
  //   setActive(!isActive);
  // }, [isActive, setActive]);

  // isActive ? disableBodyScroll(document) : enableBodyScroll(document);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div id="burger" onClick={handleShow} className="burger header-item">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <svg
                viewBox="0 0 87.9 75.02"
                xmlns="http://www.w3.org/2000/svg"
                width="2500"
                height="2134"
              >
                <path d="M75.03 75.01c7.95-7.95 12.87-18.94 12.87-31.07C87.9 19.67 68.22 0 43.95 0S0 19.67 0 43.94c0 12.14 4.92 23.12 12.87 31.08l6.26-6.26c-6.36-6.35-10.3-15.12-10.3-24.81.02-19.38 15.74-35.08 35.13-35.08s35.11 15.7 35.11 35.07c0 9.68-3.93 18.45-10.28 24.8z" />
                <path d="M42.93 52.77l-7.8-7.8L60.11 23.1l4.69 4.69z" />
              </svg>
            </Offcanvas.Title>
            <div>
              <a href="/asdf">UA</a>
              <span> | </span>
              <a href="/asdf">EN</a>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="burger-menu" key="shopCart">
              <div className="burger-menu-features">
                <div>
                  <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </span>
                  <Form.Select aria-label="Default select example">
                    <option value="Dnipro">Dnipro</option>
                    <option value="Kharkiv">Kharkiv</option>
                    <option value="Kyiv">Kyiv</option>
                    <option value="Lviv">Lviv</option>
                    <option value="Vinniza">Vinniza</option>
                  </Form.Select>
                </div>
                <div onClick={handleClose}>
                  <Link to="/">
                    <FontAwesomeIcon icon={faBalanceScale} size="2x" />
                    <br />
                    <span>Сравнение</span>
                  </Link>
                </div>
                <div onClick={handleClose}>
                  <Link to="/auth">
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                    <br />
                    <span>Sign in</span>
                  </Link>
                </div>
              </div>

              <Nav onClick={handleClose}>
                <Nav.Item>
                  <Link to="/">О компании</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/auth">Новости</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/">Наши сервисы</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/">Доставка и оплата</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/">Работа</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/">Загрузки</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/">Контакты</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/">Маркетинговая поддержка</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/">ViyarPro</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/">Академия</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/cart">Корзина</Link>
                </Nav.Item>
              </Nav>
              <span className="top-list-phone">
                <a href="tel:08008001112">0 (800) 800 1112</a>
              </span>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Burger;
