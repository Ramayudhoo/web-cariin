import {NavbarBrand, Navbar, Container} from "react-bootstrap"

const style = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/"> 
          <img 
          alt="" src="Logo3icon.ico" 
          
          width="70"
          height="70" className="logo"
          />{' '}</Navbar.Brand>
          </Container>
      </Navbar>
    </div>
  )
}

export default style