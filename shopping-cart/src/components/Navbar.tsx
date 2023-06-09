import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useShoppingCart} from "../context/ShoppingCartContext";

export function Navbar() {
  const {openCart,cartQuantity} = useShoppingCart()
  return(
    <NavbarBs sticky='top' className='bg-white shadown-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
          <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
          <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
        </Nav>
        {cartQuantity > 0 && (<Button onClick={openCart} className='rounded-circle' style={{width:'3rem',height:'3rem',fill:'white',position:'relative'}} variant='outline-primary'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000">
<metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g><path d="M186.1,132.5H40.6c-16.9,0-30.6-13.7-30.6-30.6C10,85,23.7,71.3,40.6,71.3h145.5c16.9,0,30.6,13.7,30.6,30.6C216.7,118.8,203,132.5,186.1,132.5L186.1,132.5z M844.5,775.6H346.9c-16.9,0-30.6-13.7-30.6-30.6c0-16.9,13.7-30.6,30.6-30.6h497.7c16.9,0,30.6,13.7,30.6,30.6C875.2,761.9,861.4,775.6,844.5,775.6L844.5,775.6z M959.4,255H232c-16.9,0-30.6-13.7-30.6-30.6c0-16.9,13.7-30.6,30.6-30.6h727.3c16.9,0,30.6,13.7,30.6,30.6C990,241.3,976.3,255,959.4,255L959.4,255z M911.5,438.8H279.9c-16.9,0-30.6-13.7-30.6-30.6c0-16.9,13.7-30.6,30.6-30.6h631.6c16.9,0,30.6,13.7,30.6,30.6C942.1,425,928.4,438.8,911.5,438.8L911.5,438.8z M867.5,622.5H327.7c-16.9,0-30.6-13.7-30.6-30.6c0-16.9,13.7-30.6,30.6-30.6h539.8c16.9,0,30.6,13.7,30.6,30.6C898.1,608.8,884.4,622.5,867.5,622.5L867.5,622.5z M588,618.7c-16.9,0-30.6-13.7-30.6-30.6V258.8c0-16.9,13.7-30.6,30.6-30.6c16.9,0,30.6,13.7,30.6,30.6V588C618.7,605,605,618.7,588,618.7L588,618.7z M798.8,236.8l-39.2,326.9c-2,16.8-17.3,28.8-34.1,26.8c-16.8-2-28.8-17.3-26.8-34L738,229.6c2-16.8,17.3-28.8,34.1-26.8C788.9,204.8,800.8,220.1,798.8,236.8L798.8,236.8z M988.3,232.6l-88.3,356c-4,16.4-20.6,26.5-37.1,22.4c-16.4-4-26.5-20.6-22.4-37.1l88.3-356c4-16.4,20.6-26.5,37.1-22.4C982.3,199.6,992.3,216.2,988.3,232.6L988.3,232.6z M451.5,595.2c-16.8,2.2-32.1-9.7-34.3-26.5l-39.4-307.6c-2.2-16.8,9.7-32.1,26.5-34.3c16.8-2.2,32.1,9.7,34.3,26.5L478,560.9C480.1,577.7,468.3,593,451.5,595.2L451.5,595.2z M352.6,768.4c-16.5,4.1-33.1-5.9-37.2-22.3L158,115.5c-4.1-16.4,5.9-33,22.4-37.1c16.5-4.1,33.1,5.9,37.2,22.3l157.3,630.6C379,747.7,369,764.4,352.6,768.4L352.6,768.4z M400.5,928.7c-33.8,0-61.2-27.4-61.2-61.2c0-33.8,27.4-61.3,61.2-61.3c33.8,0,61.2,27.4,61.2,61.3C461.7,901.3,434.3,928.7,400.5,928.7L400.5,928.7z M775.6,928.7c-33.8,0-61.2-27.4-61.2-61.2c0-33.8,27.4-61.3,61.2-61.3c33.8,0,61.3,27.4,61.3,61.3C836.9,901.3,809.4,928.7,775.6,928.7L775.6,928.7z"/></g>
</svg>
          <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
          style={{
            color:'white',
            width:'1.5rem',
            height:'1.5rem',
            position:'absolute',
            bottom:0,
            right:0,
            transform:'translate(25%,25%)',
          }}>
            {cartQuantity}
          </div>
        </Button>)}
      </Container>
    </NavbarBs>
  )
}