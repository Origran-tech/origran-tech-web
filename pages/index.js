import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-origran-red">
      <Head>
        <title>Origran technology</title>
        <meta name="description" content="Site officiel d'origran technology" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex items-center justify-center example1 md:h-[700px] h-96">
        <p className="slide text-center text-stroke uppercase text-origran-blue text-3xl md:text-6xl">
          Welcome to
          <br />
          origran technology !
        </p>
      </div>
      <p className="text-origran-white text-3xl text-center p-8 bg-origran-yellow">
        Je suis un jeune auto entrepreneur. Ayant une passion pour la
        programmation mon
        <br />
        but est de faciliter la création de votre site web, pour votre
        <br />
        business ou non.
      </p>
      <div className="md:flex md:items-center md:justify-center bg-origran-yellow">
        <Image width="760" height="653" src="/blob1.png"></Image>
        <p className="text-origran-white text-3xl text-center m-8 mb-0">
          Votre site web sera optimisé SEO,
          <br />
          il aura plus de chance de se
          <br />
          retrouver en haut de la page
          <br />
          de recherche.
        </p>
      </div>
      <div className="md:flex md:items-center md:justify-center bg-origran-yellow">
        <p className="text-origran-white text-3xl text-center p-8">
          Si vous n’avez pas de design pour votre
          <br />
          site, je peux en créer un rien que
          <br />
          pour vous !
        </p>
        <Image width="660" height="588" src="/blob2.png"></Image>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5b316"
          fillOpacity="1"
          d="M0,128L80,112C160,96,320,64,480,96C640,128,800,224,960,250.7C1120,277,1280,235,1360,213.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <p className="text-origran-white text-xl text-center md:text-3xl p-8">
        Toujours pas convaincu ? Alors regardez mes projets !
      </p>
      <div className="projects">
        <Link href="https://www.lesipake.origran.com">
          <a className="project text-center text-origran-white text-xl">
            <img src="logo.png" className="lesipakeimg" />
            <h2>Lesipake</h2>
            <p>Un site dictionaire</p>
          </a>
        </Link>
        <Link href="https://www.minage.origran.com">
          <a className="project text-center text-origran-white text-xl">
            <img src="logo.png" className="lesipakeimg" />
            <h2>Minage sim 2</h2>
            <p>Un jeu de minage</p>
          </a>
        </Link>
      </div>
      <div className="text-origran-white text-center grid">
        <p className="text-xl md:text-3xl p-8">
          C&apos;est bon ? Alors voici comment me contacter pour votre site web !
        </p>
        <Link href="mailto:leo.malloire@origran.com">
          <a className="md:text-xl">Mon email : leo.malloire@origran.com</a>
        </Link>
        <Link href="https://linktr.ee/leomalloire">
          <a className="md:text-xl pb-4">Mon linktr.ee</a>
        </Link>
      </div>
      <footer className="text-origran-white text-center">
        <p>&copy; Website by origran technology</p>
      </footer>
    </div>
  );
}
