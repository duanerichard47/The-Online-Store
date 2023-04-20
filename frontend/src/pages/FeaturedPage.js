import React from 'react';
import './FeaturedPage.css';

import img1 from './staticImages/VacuumMop.jpg';
import img2 from './staticImages/p2Big.jpg';
import img3 from './staticImages/p3Big.jpg';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function FeaturedPage() {
  return (
<div>
    <h1 className='change-text-color'>Hot Item !!!</h1>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body className='change-text-color'>
        <Card.Title>Hot Sale</Card.Title>
        <Card.Text>
        Station pro Robot Vacuum and Mop, Self-Cleaning 3 in 1, Robotic Vacuum with Dual Power Spin Mopping, 3000Pa Suction, Smart Mapping, Carpet Detection, Pet-Friendly Design with 750ml Dustbin
        </Card.Text>
      </Card.Body >
      <ListGroup className="list-group-flush, ">
        <ListGroup.Item>Station pro Robot Vacuum and Mop</ListGroup.Item>
        <ListGroup.Item>In Stock</ListGroup.Item>
        <ListGroup.Item>-30% discount !!!</ListGroup.Item>
      </ListGroup>
      <Card.Body className='change-text-color'>
        <p>Price only $559.99 !!!</p>
      </Card.Body>
    </Card>


    <div className="transition"><br/>Get It While Supplies Last !</div>
    <div className="transform"><br/>Don't Let it Get Away !</div>
 </div>
  );
}

export default FeaturedPage;

