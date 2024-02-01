import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mtctmej",
        "template_cjleeqc",
        form.current,
        "OH-oxL7vjgBOdtTYC"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!"); // Display success notification
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message."); // Display error notification
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="user_name">Name</label>
                        <input
                          type="text"
                          id="user_name"
                          name="user_name"
                          placeholder="Name"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="user_email">Email</label>
                        <input
                          id="user_email"
                          type="email"
                          name="user_email"
                          placeholder="Email"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </section>
  );
};
