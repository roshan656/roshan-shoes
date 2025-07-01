import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Dummy_Girl_Shoes_Data } from "../Components/Constant";
import { useNavigate } from "react-router-dom";
import CommonModal from "../Components/Common/CommonModal";
import Navigation from "./Navigation";

function Woman() {
  const navigate = useNavigate();
  const [WomanDummyData] = useState(Dummy_Girl_Shoes_Data);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleGirlOrder = (productName) => {
    setSelectedProduct(productName);
    setShowModal(true);
  };

  const confirmOrder = () => {
    setShowModal(false);
    navigate("/order");
  };

  return (
    <>

      <Navigation />
      {showModal && (
        <CommonModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title="Confirm Order"
          onConfirm={confirmOrder}
        >
          <p>
            Are you sure you want to order <strong>{selectedProduct}</strong>?
          </p>
        </CommonModal>
      )}

      <div className="woman-card-container">
        <h2 className="section-title">Women's Shoes Collection</h2>
        <Row>
          {WomanDummyData.map((item, idx) => (
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
                    <strong>Price:</strong> ₹{item?.Price}
                  </Card.Text>
                  <Card.Text>
                    <strong>Quality:</strong> {item?.Quality}
                  </Card.Text>
                  <Card.Text>
                    <strong>Delivery Charge:</strong> ₹{item?.delivery_charge}
                  </Card.Text>

                  <Button
                    variant="primary"
                    onClick={() => handleGirlOrder(item?.Product_Name)}
                    className="order-button"
                    style={{ backgroundColor: "darkorange" }}
                  >
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Woman;
