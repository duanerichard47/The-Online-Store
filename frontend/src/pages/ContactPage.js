import React from 'react';

import './ContactPage.css';

import Card from 'react-bootstrap/Card';

import img1 from './staticImages/p1Big.jpg';
import img2 from './staticImages/p2Big.jpg';
import img3 from './staticImages/p3Big.jpg';

function ContactPage() {
  return (
    <div>
      <div className="pages">ccontactllssssss</div>

      <img src={img1} alt="First slide" />
      <img src={img2} alt="First slide" />
      <img src={img3} alt="First slide" />
      <Card>
        <Card.Body>This is some text within a card body.Loream</Card.Body>
      </Card>
    </div>
  );
}

export default ContactPage;
