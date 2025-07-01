import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/login");
  };

  return (
    <div className="registercontainer">
      <div className="registersection">
        <section>
          <div className="container">
            <h2 className="register-title">Sign up</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>First Name *</Form.Label>
                    <Form.Control
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                    />
                    {errors.first_name && (
                      <p style={{ color: "red" }}>
                        {errors.first_name.message}
                      </p>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Last Name *</Form.Label>
                    <Form.Control
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.last_name && (
                      <p style={{ color: "red" }}>{errors.last_name.message}</p>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                      type="email"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p style={{ color: "red" }}>{errors.email.message}</p>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Phone Number *</Form.Label>
                    <Form.Control
                      type="tel"
                      {...register("phone_number", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone_number && (
                      <p style={{ color: "red" }}>
                        {errors.phone_number.message}
                      </p>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Password *</Form.Label>
                    <Form.Control
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <p style={{ color: "red" }}>{errors.password.message}</p>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Confirm Password *</Form.Label>
                    <Form.Control
                      {...register("confirmpassword", {
                        required: "Confirm password is required",
                        validate: (value) =>
                          value === watch("password") ||
                          "Passwords do not match",
                      })}
                    />
                    {errors.confirmpassword && (
                      <p style={{ color: "red" }}>
                        {errors.confirmpassword.message}
                      </p>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <button type="submit" className="submit-button">
                Submit
              </button>
              <p className="login-link">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </Form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
