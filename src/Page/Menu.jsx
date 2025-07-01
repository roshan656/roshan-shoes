import React, { useState } from "react";
import {
  Product_Dummy_Data,
  Dummy_Girl_Shoes_Data,
} from "../Components/Constant";
import CommonModal from "../Components/Common/CommonModal";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navigation from "./Navigation";

const Menu = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const confirmOrder = () => {
    if (selectedProduct) {
      navigate(`/order?id=${selectedProduct.id}`);
    }
    setShowModal(false);
  };

  return (
    <>
      <Navigation />
      {showModal && selectedProduct && (
        <CommonModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title="Confirm Order"
          onConfirm={confirmOrder}
        >
          <p>
            Are you sure you want to order{" "}
            <strong>{selectedProduct.Product_Name}</strong>?
          </p>
        </CommonModal>
      )}

      <div className="menu-container">
        <Row>
          {Dummy_Girl_Shoes_Data.map((item, idx) => (
            <Col key={idx} md={4} sm={6} xs={12} className="mb-4">
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src={item?.img_src}
                  className="product-image"
                />
                <Card.Body>
                  <Card.Title>{item?.Product_Name}</Card.Title>
                  <Card.Text>
                    <strong>Company:</strong> {item?.Companie}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> {item?.Price}
                  </Card.Text>
                  <Card.Text>
                    <strong>Quality:</strong> {item?.Quality}
                  </Card.Text>
                  <Card.Text>
                    <strong>Delivery Charge:</strong> {item?.delivery_charge}
                  </Card.Text>
                  <button
                    onClick={() => handleOrderClick(item)}
                    className="order-btn"
                    style={{ backgroundColor: "darkorange" }}
                  >
                    Order Now
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {Product_Dummy_Data.map((item) => (
            <Col key={item.id} md={4} sm={6} xs={12}>
              <Card className="product-card">
                <Card.Img variant="top" src={item.img_src} />
                <Card.Body>
                  <Card.Title>{item.Product_Name}</Card.Title>
                  <Card.Text>
                    <strong>Company:</strong> {item.Companie}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> {item.Price}
                  </Card.Text>
                  <Card.Text>
                    <strong>Quality:</strong> {item.Quality}
                  </Card.Text>
                  <Card.Text>
                    <strong>Delivery Charge:</strong> {item.delivery_charge}
                  </Card.Text>
                  <button
                    onClick={() => handleOrderClick(item)}
                    className="order-btn"
                    style={{ backgroundColor: "darkorange" }}
                  >
                    Order Now
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Menu;
