import { Link } from "react-router-dom";
import Burger from "./Burger";
import TopSearch from "./TopSearch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header>
        {/* TOP CONTAINER (MENU) */}
        <div className="top-cont">
          <Burger />

          <div className="header-item">
            <Link to="/">
              <svg
                viewBox="0 0 87.9 75.02"
                xmlns="http://www.w3.org/2000/svg"
                width="2500"
                height="2134"
              >
                <path d="M75.03 75.01c7.95-7.95 12.87-18.94 12.87-31.07C87.9 19.67 68.22 0 43.95 0S0 19.67 0 43.94c0 12.14 4.92 23.12 12.87 31.08l6.26-6.26c-6.36-6.35-10.3-15.12-10.3-24.81.02-19.38 15.74-35.08 35.13-35.08s35.11 15.7 35.11 35.07c0 9.68-3.93 18.45-10.28 24.8z" />
                <path d="M42.93 52.77l-7.8-7.8L60.11 23.1l4.69 4.69z" />
              </svg>
              {/* <img
                src={`${process.env.PUBLIC_URL}/image/speedtest.svg`}
                alt="logo"
              /> */}
            </Link>
          </div>

          <TopSearch />

          <div className="header-item">
            <Link to="/cart">
              <FontAwesomeIcon
                className="top-cont-icon"
                icon={faCartPlus}
                size="2x"
              />
            </Link>
          </div>
          <div className="header-item">
            <Link to="/auth">
              <FontAwesomeIcon
                className="top-cont-icon"
                icon={faUserCircle}
                size="2x"
              />
              <br />
              <span>Sign in</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
