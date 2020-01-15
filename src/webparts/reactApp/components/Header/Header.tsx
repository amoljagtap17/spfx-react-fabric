import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../Header.module.scss";

interface ICustomNavLinkProps {
  to: string;
  label: string;
}

const CustomNavLink: React.FC<ICustomNavLinkProps> = ({ to, label }) => (
  <NavLink to={to} className={styles.navLink} activeClassName={styles.active}>
    {label}
  </NavLink>
);

export const Header = () => (
  <nav className={styles.header}>
    <ul>
      <li>
        <Link to="/" className={styles.navBrand}>
          LOGO 2
        </Link>
      </li>
      <li>
        <CustomNavLink to="/screen1" label="Screen 1" />
      </li>
      <li>
        <CustomNavLink to="/screen2" label="Screen 2" />
      </li>
    </ul>
  </nav>
);
