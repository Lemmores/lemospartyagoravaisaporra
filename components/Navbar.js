import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
   <ul className={styles.navbar}>
       <button type="button" style={{color: "black", backgroundColor: "black", height: "80px",
	width: "100px", borderColor: "black" , boxShadow: "none", borderBlockStartColor: "black", background: "transparent", border: "none", margin:"5px 10px 10px 4px"}} > 
   <a href = "https://convitelemosparty.vercel.app/" style={{ textDecoration : "none", textAlign : "center"}}> <img src="/images/logo.png" width= "100px"
  height = "100px" object-fit = "fill"  /> </a>
    
  </button>
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
