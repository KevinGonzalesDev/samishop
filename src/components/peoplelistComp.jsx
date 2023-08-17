import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function People(props) {
  const { data } = props;
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <Container>
      <Row className="mt-2">
        <Col xs={12} md={4}>
          <ListGroup>
            {data.map((people, i) => (
              <ListGroup.Item
                key={i}
                active={i === selectedItem}
                onClick={() => handleItemClick(i)}
              >
                <div>
                  <a>
                    <strong>{people.name}</strong>
                  </a>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={12} md={8} className="d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Body className="">
              {selectedItem !== null ? (
                <>
                  <Card.Title>{data[selectedItem].name}</Card.Title>
                  <Card.Text>
                    <p>Eye Color: {data[selectedItem].eye_color}</p>
                    <p>Hair Color: {data[selectedItem].hair_color}</p>
                    <p>Skin Color: {data[selectedItem].skin_color}</p>
                    <p>Birth Year: {data[selectedItem].birth_year}</p>
                    <Card.Title>Vehicles</Card.Title>
                    <p>Snowspeeder: {data[selectedItem].vehicles}</p>
                  </Card.Text>
                </>
              ) : (
                <div className="d-flex align-items-center">
                  <p>Please select an item</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
