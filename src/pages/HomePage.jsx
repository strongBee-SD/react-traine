import { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleClass = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      {/* MAIN MENU */}
      <nav>
        <ul className="main-menu">
          <li className="main-menu-list">
            <span>Плиточные материалы</span>
          </li>
          <li className="main-menu-list">
            <span>Мебельная фурнитура</span>
          </li>
          <li className="main-menu-list">
            <span>Напольные покрытия</span>
          </li>
          <li className="main-menu-list">
            <span>Столешницы, стенпанели</span>
          </li>
          <li className="main-menu-list">
            <span>Раздвижные и гардеробные системы</span>
          </li>
          <li className="main-menu-list">
            <span>Фасады</span>
          </li>
          <li className="main-menu-list">
            <span>Кухонная техника</span>
          </li>
          <li className="main-menu-list">
            <span>Услуги</span>
          </li>
        </ul>
      </nav>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Features */}
      <div className="company-services">
        <hr />
        <div className="cont-item-header">
          <h2>УСЛУГИ И ПРОИЗВОДСТВА</h2>
        </div>
        <div
          className="company-services-item"
          style={{
            background: `url('${process.env.PUBLIC_URL}/image/status-ready.png') no-repeat bottom`,
            backgroundSize: "cover",
          }}
        >
          <div className="services-item-header-cont">
            <span>Статус готовности</span> <br />
            <a href="/" rel="noopener noreferrer" target="_blank">
              {`Перейти >`}
            </a>
          </div>
        </div>
        <div
          className="company-services-item"
          style={{
            background: `url('${process.env.PUBLIC_URL}/image/callback.png') no-repeat bottom`,
            backgroundSize: "cover",
          }}
        >
          <div className="services-item-header-cont">
            <span>Обратная связь</span> <br />
            <a href="/" rel="noopener noreferrer" target="_blank">
              {`Перейти >`}
            </a>
          </div>
        </div>
        <div
          className="company-services-item"
          style={{
            background: `url('${process.env.PUBLIC_URL}/image/sroki-gotovnosti.jpg') no-repeat bottom`,
            backgroundSize: "cover",
          }}
        >
          <div className="services-item-header-cont">
            <span>Сроки готовности заказа</span> <br />
            <p>*при заказе и оплате сегодня до 18:00</p>
            <a href="/" rel="noopener noreferrer" target="_blank">
              {`Перейти >`}
            </a>
          </div>
        </div>
        <div
          className="company-services-item"
          style={{
            background: `url('${process.env.PUBLIC_URL}/image/plansh.png') no-repeat bottom`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className={`about-cont ${isOpened ? "active" : ""}`}>
        <hr />
        <div className="cont-item-header">
          <h2>О компании</h2>
        </div>

        <dl>
          <dt>
            О компании <q>ВиЯр</q>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet. Explicabo atque cum repellendus et.
            Temporibus dolor aliquid voluptatem sit. Iusto sapiente accusamus
            quam porro. Blanditiis facere omnis perspiciatis ut? Deleniti sequi
            in architecto numquam. Aliquid sint sit maiores explicabo! Placeat
            expedita possimus impedit eaque! Earum odio odit eos error! Animi
            consequatur tempora eum ipsa.
          </dd>
          <dd>
            Lorem ipsum dolor sit amet. Aut sint iure error suscipit. Rerum
            harum veniam nisi natus! Incidunt nostrum perferendis ullam
            mollitia? Nam vero laudantium praesentium sed! Eaque quo maiores
            culpa eum?
          </dd>
          <dd>
            Lorem ipsum dolor sit amet consectetur. Voluptates, quos sint!
            Asperiores, eveniet a? Vitae beatae consectetur ullam recusandae
            sequi. Doloremque eum unde cumque debitis magnam. Dolorem accusamus
            impedit facere adipisci rem. Praesentium quas deserunt quaerat modi
            optio. Error itaque laborum obcaecati animi praesentium?
          </dd>
          <dd>
            <ul>
              <li>dfhdghfgdgfgd</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </dd>
          <dd>
            Lorem ipsum dolor sit amet. Id repellendus quae at voluptatem.
            Tempore facere soluta consectetur ducimus. Distinctio sunt beatae
            tempora nisi? Repellendus sequi dolores illum recusandae! Aliquam
            fugiat consectetur vitae ex. Dolorum quia repellendus praesentium
            suscipit. Officia fugiat tempora qui recusandae.
          </dd>
          <dd>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            deleniti maiores labore commodi nisi explicabo, error molestiae quia
            quod rerum ducimus recusandae at alias facilis doloribus numquam
            suscipit praesentium id, cupiditate cumque est ullam fugit ex?
            Perspiciatis maxime dolore deleniti!
          </dd>
        </dl>
        <span>
          <b>Удачных покупок</b>
        </span>
        <div className="show-more-arrow" onClick={toggleClass}>
          <span>Show more </span>
          <span>
            <FontAwesomeIcon icon={faAngleDown} size="2x" />
          </span>
        </div>
      </div>

      <div className="partners-cont">
        <hr />
        <div className="cont-item-header">
          <h2>Наши партнёры</h2>
        </div>

        <Carousel fade className="partners-list">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default HomePage;
