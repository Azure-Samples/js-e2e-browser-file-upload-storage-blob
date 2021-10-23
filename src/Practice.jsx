import React from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";

function CardDisplay() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
        <Card.Body>
          <Card.Title>Card title </Card.Title>
          <Card.Text>
            Card Text This card has supporting text below as a natural lead-in
            to additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="http://askavy.com/demo/img/img-card.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Card Text his card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 11 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

function Practice() {
  return (
    <div>
      <div >
        <div >
          
          <div >
            <h2 >Practice</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <CardDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;