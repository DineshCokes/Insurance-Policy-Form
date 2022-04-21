import {Container, Nav, Navbar} from "react-bootstrap"
export const Menu=()=>
{
    return(
        <>
        <Navbar bg="primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">Example Router</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link active href="/">Component One</Nav.Link>
        <Nav.Link active href="/first">Component Two</Nav.Link>
        <Nav.Link active href="/second">Component Three</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container> 
</Navbar>
        </>
    );
}