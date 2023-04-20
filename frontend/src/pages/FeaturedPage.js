import React from 'react';
import './FeaturedPage.css';

import img1 from './staticImages/p1Big.jpg';
import img2 from './staticImages/p2Big.jpg';
import img3 from './staticImages/p3Big.jpg';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function FeaturedPage() {
  return (
            <div>
                    <div>
                    <div className="pages">feautereBllssssss</div>

                    <div>
                        <img src={img1} alt="First slide" />
                        <img src={img2} alt="First slide" />
                        <img src={img3} alt="First slide" />
                    </div>
                    </div>

                    <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                    </Row>
            </div>
  );
}

export default FeaturedPage;

