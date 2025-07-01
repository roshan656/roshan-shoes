import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/home");
  };

  return (
    <div className="logincontainer">
      <div className="loginsection">
        <section>
          <h2 className="login-title">Log in</h2>
          <div className="contains">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md={12}>
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

                <Col md={12}>
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
              </Row>

              <button type="submit" className="submit-button">
                Submit
              </button>
              <p className="signup-text">
                Don’t have an account? <Link to="/register">Sign up</Link>
              </p>
            </Form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
