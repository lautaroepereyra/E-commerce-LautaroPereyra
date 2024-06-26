import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cartwidget from '../CartWidget/CartWidget';

function BarraDeNavegacion() {
  return (
    <>
      <Navbar className="" expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >{<Link to='/'>MSP-Imports</Link>}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to='/'>Productos</Link>
                <Link to='/orders'>Ordenes</Link>
                <Link to='/cart'>{<Cartwidget/>}</Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BarraDeNavegacion;