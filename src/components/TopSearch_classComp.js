import React, { Component } from "react";

import { CSSTransition } from "react-transition-group";
import { Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

class TopSearch extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
    };
    this.inputRef = React.createRef();
  }

  toggleState = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  pressHandler = (event) => {
    console.log("pressHandler: ", event);
    if (event.key === "Escape") {
      this.setState({
        isOpened: false,
      });
    }
  };

  render() {
    return (
      <div className="header-item ">
        <FontAwesomeIcon
          className="top-cont-icon"
          icon={faSearchengin}
          size="2x"
          onClick={this.toggleState}
        />
        <CSSTransition
          in={this.state.isOpened}
          timeout={1500}
          classNames="show-search"
          onEntered={() => this.inputRef.current.focus()}
          onExited={() => this.inputRef.current.blur()}
          mountOnEnter
          unmountOnExit
        >
          <Form>
            <Form.Group className="mb-3 top-search-cont">
              <Form.Control
                ref={this.inputRef}
                onBlur={() => {
                  this.setState({
                    isOpened: false,
                  });
                }}
                onKeyDown={this.pressHandler}
                type="search"
              />
            </Form.Group>
          </Form>
        </CSSTransition>
      </div>
    );
  }
}
export default TopSearch;
