import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Input,
    Badge
} from 'reactstrap';

const HeaderNav = ({ filter, handleSearch, handleCartModal, totalCarts }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">E-SHOP</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink target="_black" href="https://github.com/jobayer637/react-eshop-app">GitHub</NavLink>
                        </NavItem>
                    </Nav>

                    <Input onChange={handleSearch} type="text" value={filter} placeholder="Enter Product Title to Find Your Product"></Input>
                </Collapse>
            </Navbar>
            <Navbar color="light" light expand="md" className="d-flex justify-content-between">
                <h5>Jobayer Hossain</h5>
                <Button className="rounded-circle btn-success float-right" onClick={handleCartModal}>Cart <Badge>{totalCarts}</Badge></Button>
            </Navbar>
        </div>
    );
}

export default HeaderNav;