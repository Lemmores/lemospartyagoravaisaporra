import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Página de Contato</title>
      </Head>
	  <br></br>
	  <br></br>
	  <br></br>
	  <br></br>
      <h2>Siga minhas redes sociais ou entre em contato
        comigo para maiores informações!</h2>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <button type="button" style={{color: "white", backgroundColor: "white", height: "80px",
	width: "300px", borderColor: "white"}} > 
    
    <a href = "https://www.instagram.com/lemosparty/" style={{ textDecoration : "none", textAlign : "center"}}> <img src="/images/iconeinsta.png" width= "40px"
  height = "40px" object-fit = "fill"  /> <br></br><br></br> <b style = {{color : "black"}}>INSTAGRAM LEMOSPARTY</b> </a>
  
  </button>
  <br></br>
  <br></br>
  <br></br>
  <button type="button" style={{color: "white", backgroundColor: "white", height: "80px",
	width: "300px", borderColor: "white"}} > 
    
    <a href = "https://contate.me/lemosparty" style={{ textDecoration : "none", textAlign : "center"}}> <img src="/images/iconewpp.png" width= "40px"
  height = "40px" object-fit = "fill"  /> <br></br><br></br><b style = {{color : "black"}}>WHATSAPP LEMOSPARTY</b></a>
  
  </button>
    </>
  )
}
