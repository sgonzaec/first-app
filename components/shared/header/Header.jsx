import React from "react";
import Link from "next/link";
import './header.scss'

const Header = () => {
  return (
    <nav>
      <ul className="menu-nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
