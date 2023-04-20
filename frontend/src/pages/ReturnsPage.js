import React from 'react';
import './ReturnsPage.css';
import Card from 'react-bootstrap/Card';

// import img1 from './staticImages/p1Big.jpg';
// import img2 from './staticImages/p2Big.jpg';
// import img3 from './staticImages/p3Big.jpg';

function ReturnsPage() {
  const img1 = './staticImages/p1Big.jpg';
  const img2 = './staticImages/p2Big.jpg';
  const img3 = './staticImages/p3Big.jpg';

  return (
    <div>
      <div className="pages">Return policyBllssssss</div>;
      <img src={img1} alt="First slide" />
      <img src={img2} alt="First slide" />
      <img src={img3} alt="First slide" />
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </div>
  );
}

export default ReturnsPage;
