import React, { useState } from "react";
import { Product_Dummy_Data } from "../Components/Constant";
import CommonModal from "../Components/Common/CommonModal";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navigation from "./Navigation";

const Products = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState(Product_Dummy_Data);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

      <div className="cardcss">
           <h2 className="section-title">men's Shoes Collection</h2>
        <Row>
          {tableData.map((item) => (
            <Col key={item.id} md={4} sm={6} xs={12}>
              <Card className="product-card">
                <Card.Img variant="top" src={item.img_src} />
                <Card.Body>
                  <Card.Title>{item.Product_Name}</Card.Title>
                  <Card.Text>
                    <strong>{item.Companie}</strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>Price: {item.Price}</strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>Quality: {item.Quality}</strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>Delivery Charge:</strong> {item.delivery_charge}
                  </Card.Text>
                  <button
                    onClick={() => handleOrderClick(item)}
                    className="order-btn"
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

export default Products;
