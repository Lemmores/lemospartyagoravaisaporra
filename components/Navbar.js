import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
       <p>
        <img src = "/images/logo.png" width= "100px"
  height = "100px" object-fit = "fill" alt="icone" />
      </p>
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
  )
}
