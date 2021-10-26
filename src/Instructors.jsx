import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pavel from "./images/pavel-instructor.png";
import lynn from "./images/lynn-instructor.png";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";

function CardDisplay() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={pavel} />
        <Card.Body>
          <Card.Title>Pavel Dmitriev </Card.Title>
          <Card.Text>
          Pavel is a certified yoga teacher, VP of Data Science at Outreach, board member - Star.AI, PhD{" "}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={lynn} />
        <Card.Body>
          <Card.Title>Lynn Jensen</Card.Title>
          <Card.Text>
          Lynn is a certified yoga teacher, writer, MBA and leads "Yoga for Women classes at Microsoft"){" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

function Instructor() {
  return (
    <div>
      <h2>Meet the Instructors</h2>
      <CardDisplay />
    </div>
     );
}

export default Instructor;