import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const OrderFilds = () => {
  const navigate = useNavigate();
  const id = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (Data) => {
    toast.success("Order successful", {
      position: "top-center",
      onClose: () => {
        navigate("/menu")
      },
      autoClose: 500,
    });
  };
console.log(id,"id location")
  return (
    <div className="logincontainer">
      <div className="loginsection">
        <section>
          <h2 className="login-title">Orders Shoes</h2>
          <div className="contains">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="contain">
                <Row>
                  <Col md={12}>
                    <div className="form-group">
                      <Form.Label className="login-text">Email *</Form.Label>
                      <Form.Control
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is required",
                          },
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p style={{color:"red"}}>{errors.email.message}</p>
                      )}
                    </div>
                  </Col>
           
                  <Col md={12}>
                    <div className="form-group">
                      <Form.Label className="login-text">
                        Credit Card Number *
                      </Form.Label>
                      <Form.Control
                        type="number"
                        {...register("creditCard", {
                          required: {
                            value: true,
                            message: "Credit Card is required",
                          },
                          minLength: {
                            value: 15,
                            message: "Minimum 15 characters are required",
                          },
                          maxLength: {
                            value: 16,
                            message: "Maximum 16 characters are allowed",
                          },
                        })}
                      />
                      {errors.creditCard && (
                        <p style={{color:"red"}}>
                          {errors.creditCard.message}
                        </p>
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </Form>
          </div>
        </section>
        <ToastContainer />
      </div>
    </div>
  );
};

export default OrderFilds;
