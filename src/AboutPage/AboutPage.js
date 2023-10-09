/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import axios from "axios";
import Navbar from "../HomePage/Navbar";
import { Col, Container, Row } from "reactstrap";
import ScrollToTop from "react-scroll-to-top";
import { CartProvider } from "react-use-cart";
export class ApoutPage extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get("/js/Api.json")
    .then((result) => {
      this.setState(
        {
        products: result.data.users
      }
      );
    });
  }

  render() {
    return (
      <CartProvider>
        <Navbar/>
    
        <Container className="mt-5 pt-5">
            <Row>
            { this.state.products.map((item)=>
        <Col md="4" className="text-center mb-2  " key={item.id}>
            <img
                src={item.image}
                className="img-fluid"
                style={{ width: "350px" }}
              ></img>
              <h3>{item.username}</h3>
              <h4>{item.email}</h4>
              <h5>{item.age}</h5>
            
        </Col>
        )
        }
            </Row>
        </Container>
        <ScrollToTop smooth
      viewBox="0 0 24 24"
      svgPath="M13,8.70710678 L13,17.5 C13,17.7761424 12.7761424,18 12.5,18 C12.2238576,18 12,17.7761424 12,17.5 L12,8.70710678 L8.85355339,11.8535534 C8.65829124,12.0488155 8.34170876,12.0488155 8.14644661,11.8535534 C7.95118446,11.6582912 7.95118446,11.3417088 8.14644661,11.1464466 L12.1464466,7.14644661 C12.3417088,6.95118446 12.6582912,6.95118446 12.8535534,7.14644661 L16.8535534,11.1464466 C17.0488155,11.3417088 17.0488155,11.6582912 16.8535534,11.8535534 C16.6582912,12.0488155 16.3417088,12.0488155 16.1464466,11.8535534 L13,8.70710678 Z M22,12.5 C22,17.7467051 17.7467051,22 12.5,22 C7.25329488,22 3,17.7467051 3,12.5 C3,7.25329488 7.25329488,3 12.5,3 C17.7467051,3 22,7.25329488 22,12.5 Z M21,12.5 C21,7.80557963 17.1944204,4 12.5,4 C7.80557963,4 4,7.80557963 4,12.5 C4,17.1944204 7.80557963,21 12.5,21 C17.1944204,21 21,17.1944204 21,12.5 Z
      "fill="#000000"
      color="white"
      style={{backgroundColor:"black"}}
      />
      </CartProvider>
    );
  }
}

export default ApoutPage;