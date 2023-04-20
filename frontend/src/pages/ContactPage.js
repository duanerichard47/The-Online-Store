import React from 'react';

import './ContactPage.css';

import {Container, Row, Col} from 'react-bootstrap';



function ContactPage() {
return(
      <div className="content">
          <Container>
          <Row
            className= "mb-5 mt-3">
              <Col lg = '8'>
              <h1 className = "display-4 mb-4">
                  Contact Us
              </h1>
              </Col>
          </Row>

          <Row className = "sec_sp">
              <Col lg= '5' className ="mb-5">
                  <h3 className="color_sec py-4">Let us Help You</h3>
                  <address>
                    <strong>Email: help@theonlinestore.com</strong>
                    <br/>
                    <br/>
                    <p>
                      <strong>Phone: 205-555-5555</strong>
                    </p> 
                  </address>
                <p>Lorem ipsum dolor sit amet. 33 nobis quia nam recusandae molestiae quo minima internos. In quas aliquam et aliquam doloremque eum dicta dignissimos eos perspiciatis optio. Non quae officia eos velit illo eos veritatis dolore sed numquam laboriosam ut cumque corrupti aut libero excepturi et reprehenderit doloribus!</p>
                </Col>
                <Col lg = '7' className="d-flex align-items-center">
                  <form classname = "contact_form w-100">
                      <Row>
                          <Col lg = '6' className = "form-group">
                              <input
                                className = "form-control rounded-0"
                                id = "name"
                                name= "name"
                                placeholder = "Name"
                                type = "text"
                              />
                          </Col>
                          <Col lg = '6' className = "form-group">
                              <input
                                className = "form-control rounded-0"
                                id = "email"
                                name = "email"
                                placeholder = "Email"
                                type = "email"
                            />
                          </Col>    
                        </Row>
                        <textarea 
                                  className = "form-contol rounded-0" id = "message"
                                  name = "message"
                                  placeholder = "Message"
                                  rows='5'
                      ></textarea>
                      <br/>
                      <Row>
                        <Col lg = '12' className = "form-group">
                              <button className = "btn ac_btn" type = "submit"> Send </button>
                        </Col>
                      </Row>
                  </form>
                </Col>
              </Row>
        </Container>
      </div>
 )
}

export default ContactPage;
