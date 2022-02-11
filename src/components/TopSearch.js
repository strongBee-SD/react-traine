import { useState, useRef } from "react";

import { CSSTransition } from "react-transition-group";
import { Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

const TopSearch = () => {
  const emailInputRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  const toggleState = () => {
    setIsOpened(!isOpened);
  };

  const pressHandler = (event) => {
    if (event.key === "Escape") {
      setIsOpened(false);
    }
  };

  return (
    <div className="header-item ">
      <FontAwesomeIcon
        className="top-cont-icon"
        icon={faSearchengin}
        size="2x"
        onClick={toggleState}
      />
      <CSSTransition
        in={isOpened}
        timeout={1500}
        classNames="show-search"
        onEntered={() => emailInputRef.current.focus()}
        mountOnEnter
        unmountOnExit
      >
        <Form className="top-search-cont">
          <Form.Group className="mb-3 ">
            <Form.Control
              onKeyDown={pressHandler}
              onBlur={() => {
                setIsOpened(false);
              }}
              type="search"
              ref={emailInputRef}
            />
          </Form.Group>
        </Form>
      </CSSTransition>
    </div>
  );
};

export default TopSearch;
