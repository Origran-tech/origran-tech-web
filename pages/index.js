import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Origran technology</title>
        <meta name="description" content="Site officiel d'origran technology" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flexPannel">
        <div className="leftPannel">
          <img src="logo.png" alt="logo de l'entreprise"></img>
        </div>
        <div className="rightPannel">
          <h1>Notre entreprise</h1>
          <p>Nous sommes une entreprise basée en essonne. Nous dévelopons</p>
        </div>
      </div>
      <div className="pannel3">
        <h1>Nos projets</h1>
        <div className="flexPannel"><div><img src/><h1>Lesipake</h1><p></p></div></div>
      </div>
      <footer>
        <p>&copy; Website by origran technology</p>
      </footer>
    </div>
  );
}
