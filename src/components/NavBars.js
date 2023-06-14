import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

function NavBars() {
    return (
        <>

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='name-size'>Go Food</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" className='font-size'>Home</Nav.Link>
                        <Nav.Link href="#features" className='font-size'>Features</Nav.Link>
                        <Nav.Link href="#pricing" className='font-size'>Pricing</Nav.Link>
                        <Nav.Link href="/Login" className='font-size'>Login</Nav.Link>
                        <Nav.Link href="/Signup" className='font-size'>Signup</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
}

export default NavBars;