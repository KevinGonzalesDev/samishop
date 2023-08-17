import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function NavbarComp() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Ravn Star Wars Registry</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
