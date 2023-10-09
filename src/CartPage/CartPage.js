import React from "react";
import { Container, Row, Col } from "reactstrap";
import { CartProvider, useCart } from "react-use-cart";
import Navbar from "../HomePage/Navbar";
import { NavLink } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
function Cart() {
  const {
    emptyCart,
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    cartTotal
  } = useCart();

  if (isEmpty) {
    return <h2 className="text-center text-danger mt-5 ">Your cart is empty</h2>;
  }

  return (
    <div>
      <h1 className="text-center text-secondary mt-5 mb-4">
        Cart ({totalUniqueItems})
        <button className="btn btn-danger mx-3" onClick={() => emptyCart()}>
          Delete All Items
        </button>
      </h1>

      <Container>
        <Row>
          <Col md="12">
            <table className="table table-dark table-bordered text-center">
              <thead className="bg-success">
                <th> username </th>
                <th> Quantity </th>
                <th> Price </th>
                <th> Opperation </th>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.quantity} x {item.username}
                    </td>
                    <td>{item.quantity} </td>
                    <td>{item.price * item.quantity}$ </td>

                    <td>
                      <button
                        className="btn btn-success "
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-primary mx-3"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="text-center text-info"> Total Numbers of Users(<span className="text-warning">{totalItems} </span>) And Total Of Price(<span className="text-warning"> {cartTotal}$ </span> )</h3>
            <div className="text-center">
            <NavLink className=" btn btn-outline-success mx-3 mb-5"  to="/">Backe Home</NavLink>
            <NavLink className=" btn btn-outline-primary mx-3 mb-5 "  to="/user">Payment</NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
function CartPage() {
  return (
    <CartProvider>
      <Navbar />
      <div className="mt-5 pt-5"></div>
      <Cart />
      <ScrollToTop smooth
      viewBox="0 0 24 24"
      svgPath="M13,8.70710678 L13,17.5 C13,17.7761424 12.7761424,18 12.5,18 C12.2238576,18 12,17.7761424 12,17.5 L12,8.70710678 L8.85355339,11.8535534 C8.65829124,12.0488155 8.34170876,12.0488155 8.14644661,11.8535534 C7.95118446,11.6582912 7.95118446,11.3417088 8.14644661,11.1464466 L12.1464466,7.14644661 C12.3417088,6.95118446 12.6582912,6.95118446 12.8535534,7.14644661 L16.8535534,11.1464466 C17.0488155,11.3417088 17.0488155,11.6582912 16.8535534,11.8535534 C16.6582912,12.0488155 16.3417088,12.0488155 16.1464466,11.8535534 L13,8.70710678 Z M22,12.5 C22,17.7467051 17.7467051,22 12.5,22 C7.25329488,22 3,17.7467051 3,12.5 C3,7.25329488 7.25329488,3 12.5,3 C17.7467051,3 22,7.25329488 22,12.5 Z M21,12.5 C21,7.80557963 17.1944204,4 12.5,4 C7.80557963,4 4,7.80557963 4,12.5 C4,17.1944204 7.80557963,21 12.5,21 C17.1944204,21 21,17.1944204 21,12.5 Z
      "fill="#000000"
      color="white"
      style={{backgroundColor:"black"}}/>

    </CartProvider>
  );
}
export default CartPage;
