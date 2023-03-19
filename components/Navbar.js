import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <button type="button" className={styles.logoButton}>
        <a href="https://convitelemosparty.vercel.app/">
          <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        </a>
      </button>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/duvidas">Dúvidas</Link>
        </li>
        <li>
          <Link href="/local">Localização</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
