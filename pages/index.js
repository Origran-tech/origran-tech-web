import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
      <div className="pannels">
        <div className="pannel1">
          <img src="logo.png" alt="logo de l'entreprise" className="img1"></img>
        </div>
        <h1>Notre entreprise</h1>
        <p>
          Nous sommes une entreprise basée en essonne. Nous dévelopons des sites
          internet en next.js pour vous. Nous avons aussi des projets de
          développement interne comme lesipake, minage sim 2 et d&apos;autres encore.
        </p>
        <h1>Nos projets</h1>
        <div className="projects">
          <Link href="https://www.lesipake.origran.com">
            <a className="project">
              <img src="lesipake.png" className="lesipakeimg" />
              <h1>Lesipake</h1>
              <p>Un site dictionaire</p>
            </a>
          </Link>
          <Link href="https://www.minage.origran.com">
            <a className="project">
              <img src="lesipake.png" className="lesipakeimg" />
              <h1>Minage sim 2</h1>
              <p>Un jeu de minage</p>
            </a>
          </Link>
          <Link href="https://www.origran.com">
            <a className="project">
              <img src="logo.png" className="lesipakeimg" />
              <h1>A venir</h1>
              <p>A venir</p>
            </a>
          </Link>
        </div>
        <iframe
          width="540"
          height="710"
          src="https://e4921acd.sibforms.com/serve/MUIEANsvC8dp6zEBet3rBXEe4SZdfPRfeqVaGt5DATWQIt377r3XwSk6A9G5NBrDh88yqrV2cJaiSh8fwaVSLOk5XunHhKilGbckq7YzKbnZjyH0vXumKGivnFrqByMk3pZzuNUWlVYzedS3fRi3tw7T6lsy1bboQKqay1AgXO07utoR5CiaSQAOKcCtuXBDm8FJLOalk3fkXt_s"
          frameBorder="0"
          allowFullScreen
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "100%",
          }}
        ></iframe>
      </div>
      <footer>
        <p>&copy; Website by origran technology</p>
      </footer>
    </div>
  );
}
