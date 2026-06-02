'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="EventLahore Logo" className={styles.logoImg} />
          </Link>
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li className={`${styles.dropdown} ${isOpen ? styles.active : ''}`}>
            <Link href="/venues" className={styles.dropdownToggle} onClick={(e) => {
              if (window.innerWidth <= 1200) {
                e.preventDefault();
                const parent = e.currentTarget.parentElement;
                parent.classList.toggle(styles.active);
              } else {
                setIsOpen(false);
              }
            }}>
              Venues <span className={styles.arrow}>▼</span>
            </Link>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}><Link href="/venues/marriage-halls" onClick={() => setIsOpen(false)}>Marriage Halls</Link></li>
              <li className={styles.dropdownItem}><Link href="/venues/marquees" onClick={() => setIsOpen(false)}>Marquees</Link></li>
              <li className={styles.dropdownItem}><Link href="/venues/farmhouses" onClick={() => setIsOpen(false)}>Farmhouses</Link></li>
              <li className={styles.dropdownItem}><Link href="/birthday-vanue" onClick={() => setIsOpen(false)}>Birthday Venues</Link></li>
              <li className={styles.dropdownItem}><Link href="/venues/corporate-halls" onClick={() => setIsOpen(false)}>Corporate Halls</Link></li>
            </ul>
          </li>

          <li className={`${styles.dropdown} ${isOpen ? styles.active : ''}`}>
            <Link href="/packages" className={styles.dropdownToggle} onClick={(e) => {
              if (window.innerWidth <= 1200) {
                e.preventDefault();
                const parent = e.currentTarget.parentElement;
                parent.classList.toggle(styles.active);
              } else {
                setIsOpen(false);
              }
            }}>
              Packages <span className={styles.arrow}>▼</span>
            </Link>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}><Link href="/packages/wedding" onClick={() => setIsOpen(false)}>Wedding Packages</Link></li>
              <li className={styles.dropdownItem}><Link href="/packages/birthday" onClick={() => setIsOpen(false)}>Birthday Packages</Link></li>
              <li className={styles.dropdownItem}><Link href="/packages/mehndi" onClick={() => setIsOpen(false)}>Mehndi Packages</Link></li>
              <li className={styles.dropdownItem}><Link href="/packages/corporate" onClick={() => setIsOpen(false)}>Corporate Packages</Link></li>
            </ul>
          </li>

          <li className={`${styles.dropdown} ${isOpen ? styles.active : ''}`}>
            <Link href="/services" className={styles.dropdownToggle} onClick={(e) => {
              if (window.innerWidth <= 1200) {
                e.preventDefault();
                const parent = e.currentTarget.parentElement;
                parent.classList.toggle(styles.active);
              } else {
                setIsOpen(false);
              }
            }}>
              Services <span className={styles.arrow}>▼</span>
            </Link>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}><Link href="/services/catering" onClick={() => setIsOpen(false)}>Catering</Link></li>
              <li className={styles.dropdownItem}><Link href="/services/decor" onClick={() => setIsOpen(false)}>Decoration</Link></li>
              <li className={styles.dropdownItem}><Link href="/services/photography" onClick={() => setIsOpen(false)}>Photography</Link></li>
              <li className={styles.dropdownItem}><Link href="/services/dj&sounds" onClick={() => setIsOpen(false)}>DJ & Sound</Link></li>
              <li className={styles.dropdownItem}><Link href="/services/makeup" onClick={() => setIsOpen(false)}>Makeup Artist</Link></li>
            </ul>
          </li>

          <li><Link href="/how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link></li>
          {/* <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li> */}
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

          <li className={styles.mobileOnly}>
            <div className={styles.mobileActions}>
              <Link href="/login" onClick={() => setIsOpen(false)} className={styles.loginBtn}>Login</Link>
              <Link href="/book-now" onClick={() => setIsOpen(false)} className={styles.ctaBtn}>Book Now</Link>
            </div>
          </li>
        </ul>

        <div className={styles.actions}>
          <Link href="/login" className={styles.loginBtn}>Login</Link>
          <Link href="/book-now" className={styles.ctaBtn}>Book Now</Link>
        </div>

        <div className={styles.mobileToggle} onClick={toggleMenu}>
          <span className={isOpen ? styles.topBar : ''}></span>
          <span className={isOpen ? styles.midBar : ''}></span>
          <span className={isOpen ? styles.botBar : ''}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
