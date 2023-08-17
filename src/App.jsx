import NavbarComp from "./components/navbarComp";
import React, { useEffect, useState } from "react";
import People from "./components/peoplelistComp";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPeople() {
      setLoading(true);
      try {
        let res = await fetch("https://swapi.dev/api/people/?format=json");
        if (!res.ok) {
          throw new Error("Error fetching data from API");
        }
        let data = await res.json();
        setPeople(data.results);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    }

    fetchPeople();
  }, []);

  return (
    <div className="App">
      <NavbarComp />
      {loading ? (
        <Row>
          <Col className="d-flex justify-content-center">
            <p>Loading...</p>
          </Col>
        </Row>
      ) : error ? (
        <Row>
          <Col className="d-flex justify-content-center">
            <p>{error}</p>
          </Col>
        </Row>
      ) : (
        <People data={people} />
      )}
    </div>
  );
}

export default App;
