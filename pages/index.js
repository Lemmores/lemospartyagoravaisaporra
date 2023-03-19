import styles from '../styles/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>LemosParty</title>
        <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa para você"
        ></meta>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
     crossorigin="anonymous" />
      
      </Head>
      <h1 className={styles.title}>Você foi convocado para LemosParty!</h1>
      <br></br>
       <iframe width="300" height="200" src="https://www.youtube.com/embed/kcuZuR70Lpc" 
       title="YouTube video player" frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
       picture-in-picture; web-share" allowfullscreen></iframe>

       <br></br>
      <br></br>
      <h2>🙅🏻‍♂️EXQUEÇA TUDO!🙅🏻‍♂️</h2>
      <br></br>
      <br></br>
      <h4>Confira o local ou tire suas dúvidas sobre a LemosParty na barra de navegação.</h4>
      
    </>
  )}
