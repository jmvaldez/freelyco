import React from "react";
import ReactDOM from "react-dom";
import "./LoginModalStyles.css";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const LoginModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <Form>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="password"
                    />
                  </Col>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default LoginModal;
