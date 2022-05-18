import React from "react"
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import BottomNav from "../BottomNav/BottomNav";
//Un componente padre puede contener tanto funciones
//como componentes hijos o de presentacion
export default function Header ({category1,category2,category3}) {

    {/* -------------------- State hooks ------------------- */}
  const [text, setText] = React.useState("Este es nuestro valor inicial")
  const [count, setCount] = React.useState(0)




    {/* -------------------- funcion manejadora ------------------- */}
  const handleRest = () => {
    console.log("ejecuta")
    if(count > 0) {
      setCount( count - 1)
    }
  }
  
    {/* -------------------- Use effects ------------------- */}
    React.useEffect(() => {
      alert("Clickeaste el boton")
    }, [count])


  return (
    <>
    {/* -------------------- Codigo o maqueta del componente ------------------- */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">{category1}</Nav.Link>
              <Nav.Link href="#link">{category2}</Nav.Link>
              <Nav.Link href="#link">{category3}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ---------------------------- Componentes hijos --------------------------- */}
      <BottomNav />
       {/* ---------------------------- IMPRIMIR --------------------------- */}
      { text }
       {/* ---------------------------- CAMBIAR TXT --------------------------- */}
      <input type="button" value= "clickeame" onClick={() => setText("TXT UNA VEZ CLICKEADO")}/>
       {/* ---------------------------- SUMA 1 AL STATE --------------------------- */}
      <input type="button" value= "+" onClick={() => setCount(count + 1)}/>
      { count }
    
      <input type="button" value= "-" onClick={handleRest}/>

       {/* ---------------------------- IMPRIMIR --------------------------- */}


      
    </>
  );
}

