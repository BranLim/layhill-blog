import React from 'react';
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';

const Header: React.FC = () => {
  return (
    <header className="flex">
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Layhill Blog</p>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/aboutme">About Me</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/blogs">Blog</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
