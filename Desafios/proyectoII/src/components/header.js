import { Nav,Navbar,Container } from "react-bootstrap";

function Menu() {
    return (
        <header className="App-header">
  <Navbar className="nav" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Mi primera App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Nosotros</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </header>
    );
  }
  
  export default Menu;
  