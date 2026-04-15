import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { assests } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className={styles.navbar}>
      <img src={assests.logo} alt="Logo" className={styles.logo} />

     <ul className={styles['navbar-menu']}>
  <li onClick={() => setMenu("home")} className={menu === "home" ? styles.active : ""}>Home</li>
  <li onClick={() => setMenu("menu")} className={menu === "menu" ? styles.active : ""}>Menu</li>
  <li onClick={() => setMenu("contact")} className={menu === "contact" ? styles.active : ""}>Contact</li>
  <li onClick={() => setMenu("about-us")} className={menu === "about-us" ? styles.active : ""}>About Us</li>
</ul>


      <div className={styles['navbar-right']}>
        <img src={assests.searchIcon} alt="Search" className={styles.icon} />

        <div className={styles['navbar-search-icon']}>
          <img src={assests.basketIcon} alt="Basket" className={styles.icon} />
          <div className={styles.dot}></div>
        </div>

        <button className={styles.visitBtn}>visit</button>
      </div>
    </div>
  );
};

export default Navbar;
