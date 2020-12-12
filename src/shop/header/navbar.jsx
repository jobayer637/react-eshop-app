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
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
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