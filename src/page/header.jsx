import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {ReactSVG} from 'react-svg'
import logo from '../img/logo-heksa-dark.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={{marginLeft:'50px'}} href="/"><img src={logo} alt=""/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' style={{marginRight:60}} navbar>
            <NavItem >
              <NavLink style={{fontSize:'20px', color:'black',marginRight:'30px'}} href="/components/">Fitur</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:'20px', color:'black', marginRight:'30px'}} href="https://github.com/reactstrap/reactstrap">Produk</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:'20px', color:'black', marginRight:'30px'}} href="https://github.com/reactstrap/reactstrap">Jangkauan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:'20px', color:'black', marginRight:'30px'}} href="https://github.com/reactstrap/reactstrap">Promo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:'20px', color:'black', marginRight:'30px'}} href="https://github.com/reactstrap/reactstrap">Bantuan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontSize:'20px', color:'black', marginRight:'30px'}} href="https://github.com/reactstrap/reactstrap">Login</NavLink>
            </NavItem>
            <NavItem>
              <button className='btn btn' style={{backgroundColor:'#ff4c47', width:'150px', height:'40px', marginTop:'5px', borderRadius:'20px', color:'white', borderColor:'none', border:'1px solid #ff4c47', fontWeight:'bold'}}>Beli Sekarang</button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header