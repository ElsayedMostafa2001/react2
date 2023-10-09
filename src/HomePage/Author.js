import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { CartProvider } from 'react-use-cart'

export class Author extends Component {
  render() {
    return (
      <CartProvider>
<section className="book-section section-padding" id='section-12' >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <img src="images/tablet-screen-contents.jpg" className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="book-section-info">
                                <h6>Modern &amp; Creative</h6>


                                <h2 className="mb-4">About The Book</h2>

                                
                                <p>Credit goes to 
                                    <NavLink NavLink rel="nofollow" to="https://freepik.com" target="_blank">FreePik</NavLink> 
                                    for images used in this ebook landing page template. You may browse FreePik to download more free images for your website.</p>

                                <p>TemplateMo is one of the best websites to download free CSS templates for any purpose. This is an ebook landing page template using Bootstrap 5 CSS layout.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

      </CartProvider>
    )
  }
}

export default Author