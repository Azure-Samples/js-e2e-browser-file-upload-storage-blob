import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardGroup, Accordion, Image} from "react-bootstrap";
import lynn_fertility from "./images/lynn-fertility.png";
import connected_pavel from "./images/connected-pavel.png";
import foundation_pavel from "./images/foundation-pavel.png";
import connected_data1 from "./images/connected-sun-data1.png";
import connected_data2 from "./images/connected-sun-image2.png";
import foundation_data1 from "./images/foundations-data1.PNG";
import foundation_data2 from "./images/foundation-data2.PNG";
import fertility_data1 from "./images/fertility-data1.png";
import fertility_data2 from "./images/fertility-data2.png";

function CardDisplay() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={connected_pavel} />
        <Card.Body>
          <Card.Title>Connected To The Sun </Card.Title>
          <Card.Text>
            Please join this beginner-level 90-minute yoga session with instructor Pavel to improve the state of your body and mind. 
            {" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Find Out More</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li> Instructor: Pavel Dmitriev</li>
                <li> Primary  health benefits  of this practice include (but are not limited to) helping with insomnia, sciatica, depression, asthma,  anxiety. </li>
                <li> Main focus of this session is on the following muscle groups: Spine extender, deltoid, Glute muscles, Quadricepts, triceps. </li>
                <Image src={connected_data2} rounded fluid/>
                <Image src={connected_data1} rounded fluid/>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src={lynn_fertility} />
        <Card.Body>
          <Card.Title>Yoga for fertility</Card.Title>
          <Card.Text>
          Please join this beginner-level 65-minute yoga session with instructor Lynn to improve the state of your body  and mind. {" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Find Out More</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li> Instructor: Lynn Jensen</li>
                <li> Primary  health benefits  of this practice include (but are not limited to) helping with anxiety, asthma, sciatica, insomnia, depression, calm, pregnancy.  </li>
                <li> Main focus of this session is on the following muscle groups: Spine extender, Trapezius and Rhomboid, inner upper back, triceps,  deltoid, Glute muscles, Set of muscles to bend hip towards muscle, Quadricepts. </li>
                <Image src={fertility_data1} rounded fluid/>
                <Image src={fertility_data2} rounded fluid/>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src={foundation_pavel}  />
        <Card.Body>
          <Card.Title>Foundational Program</Card.Title>
          <Card.Text>
            Please join this beginner-level 73-minute yoga session with instructor Pavel to improve  the state of your body and mind. {" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Find Out More</Accordion.Header>
            <Accordion.Body>
            <ul>
                <li> Instructor: Pavel Dmitriev</li>
                <li> Primary  health benefits  of this practice include (but are not limited to) helping with insomnia, sciatica, depression, asthma,  anxiety. </li>
                <li> Main focus of this session is on the following muscle groups: Spine extender, Glute muscles, triceps, Trapezius and Rhomboid, inner upper back, Hamstrings. </li>
                <Image src={foundation_data2} rounded fluid/>
                <Image src={foundation_data1} rounded fluid/>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
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
              Practice yoga anywhere, anytime with personalized yoga sessions. It’s yoga every day with some of the world's best teachers and guides. 
              Roll out your mat and choose your style, amount of time you have to practice, your teacher and level to get <a href="/find">started</a>.
              No matter where you are in your yoga journey, beginner to advanced, we have a session for you!
            </p>
            <CardDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;