import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{ filter: "invert(1)" }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.facebook.com/profile.php?id=61551508643100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="facebook" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulrahman-ismail-272720268/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="linkedIn" />
              </a>
            </div>

            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
