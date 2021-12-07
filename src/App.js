import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/AppStyles.scss';
import {Navbar, NavDropdown, Nav, Container, Row, Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Metadata from './Components/Metadata';
import SendTokens from './Components/SendTokens';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'; //added by fry 


import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  return(
    <React.Fragment>
    <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Block-Transfer</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>
      <Nav>
        <Nav.Link onClick={(window.accountId===''?login:logout)} >
          {window.accountId===''?'Login':window.accountId}
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    {(window.accountId!=='')?
    <Container>
      <Row className="d-flex justify-content-center"><Metadata/></Row>
      <Row className="d-flex justify-content-center"><SendTokens/></Row>
    </Container>
    :<Card class="card" style={{width:'30%',margin:'auto',marginTop:'200px'}} >
      <Card.Header as="h5">Hello User!</Card.Header>
      <Card.Body>
        <Card.Title> Please Login</Card.Title>
        <Card.Text>
          This app will not work if you are not Logged.
        </Card.Text>
        <Button onClick={login}>Login Now</Button>
      </Card.Body>
    </Card>
    
    }
    
  <MDBFooter backgroundColor='light' className='text-center text-lg-left'> 
<div className='text-center p-3' style={{ backgroundColor: 'rgba(22,22,22,0.7)' , color:'white',position:'fixed',bottom:'0px',width:'100%',marginTop:'30%',height:'50px'}}>
        &copy; {new Date().getFullYear()}{' '}
        <a className='text-light' href=''>
          Block-Transfer
        </a>
      </div>
    </MDBFooter>
 
  </React.Fragment>

  );
}
