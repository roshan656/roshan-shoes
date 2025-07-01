import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    toast.success("Message Sent Successfully!");
    reset();
  };

  return (
    <>
      <Navigation />
      <Container className="contact-container">
        <Row>
          <Col md={6} className="contact-info">
            <h2>Contact Us</h2>
            <p>If you have any queries, feel free to reach out to us.</p>
            <p>
              <FaMapMarkerAlt /> 123, ABC Street, Chandigarh, India
            </p>
            <p>
              <FaPhone /> +91 9876543210
            </p>
            <p>
              <FaEnvelope /> contact@yourwebsite.com
            </p>

            <div className="social-icons">
              <a href="https://facebook.com">
                <FaFacebook />
              </a>
              <a href="https://twitter.com">
                <FaTwitter />
              </a>
              <a href="https://instagram.com">
                <FaInstagram />
              </a>
            </div>
          </Col>

          <Col md={6}>
            <h2>Send a Message</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="error">{errors.phone.message}</p>
                )}
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="error">{errors.message.message}</p>
                )}
              </Form.Group>

              <Button variant="primary" type="submit" className="submit-btn">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        <ToastContainer position="top-center" autoClose={2000} />
      </Container>
    </>
  );
};

export default Contact;
