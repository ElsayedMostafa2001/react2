/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useCart,CartProvider } from "react-use-cart";
// import Navbar from "../HomePage/Navbar";

function Navbar() {
    const { totalItems } = useCart()
  return (
    <CartProvider>
      <nav className="navbar navbar-expand-lg bg-dark text-white" style={{position:"fixed", width:"100%",top:"0"}} >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <i className="navbar-brand-icon bi-book me-2"></i>
            <span>ebook</span>
          </NavLink>

          <div className="d-lg-none ms-auto me-3">
            <NavLink
              to="#"
              className="btn custom-btn custom-border-btn btn-naira btn-inverted"
            >
              <i className="btn-icon bi-cloud-download"></i>
              <span>Download</span>
            </NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
          

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto me-lg-4">

              <li className="nav-item">
                <NavLink className="nav-link click-scroll" to="/">
                  Home
                </NavLink>
              </li>

              

              <li className="nav-item">
                <Link
                  className="nav-link click-scroll"
                  to="section-11"
                  smooth={true}
                offset={-100}
                duration={1000}>
                  The Book
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="section-12"
                smooth={true}
                offset={-100}
                duration={1000}>
                  Author
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="section-13"
                smooth={true}
                offset={-100}
                duration={1000}>
                  Reviews
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="section-14"
                smooth={true}
                offset={-50}
                duration={1000}>
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link click-scroll" to="/About">
                  About
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link click-scroll" to="/user"
                >
                  Users
                </NavLink>
              </li>

              
              
            </ul>

            <div className="d-none d-lg-block">
                            <a href="#" className="btn custom-btn custom-border-btn btn-naira btn-inverted">
                                <i className="btn-icon bi-cloud-download"></i>
                                <span>Download</span>
                                {/* <!-- duplicated above one for mobile --> */}
                            </a>
                        </div>

            <li className="nav-item   ">
                <NavLink className="nav-link " to="/Cart">
                <i className="fa-solid fa-cart-shopping w-100 " >  </i> <span className="text-info">({ totalItems })</span>
                </NavLink>
              </li>

          </div>
        </div>
      </nav>

      {/* <!-- 
        ======================
        End Nav Bar
    ==========================
    --> */}
    </CartProvider>
  );
}
export default Navbar;
