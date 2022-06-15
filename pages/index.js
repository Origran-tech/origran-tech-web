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
      <p className="text-origran-blue text-3xl text-center p-8 bg-origran-yellow">
        Bonjour ! Vous souhaitez que votre évènement soit unique ? Vous êtes au
        bon endroit ! Origran technology s&apos;occupe de créer un site web pour
        votre évènement. Vous ne voulez pas que le site soit public ? Pas de
        problème, il n&apos;apparaîtra pas dans les résultats de recherche !
      </p>
      <div className="md:flex md:items-center md:justify-center bg-origran-yellow">
        <Image width="760" height="653" src="/blob1.png"></Image>
        <p className="text-origran-blue text-3xl text-center m-8 mb-0">
          Avec ce site, vous pourrez envoyer des invitations par mail. Fini les
          invitations papier perdu ! Affichez les photos prises et vos invités
          pourons les télécharger. Vous pourrez aussi donner des nouvelles
          pendant la préparation de l&apos;évènement !
        </p>
      </div>
      <div className="md:flex md:items-center md:justify-center bg-origran-yellow">
        <p className="text-origran-blue text-3xl text-center p-8">
          Avec un design complètement personnalisable, rendez votre évènement
          unique ! Fournissez juste un logo, le texte et des idées de mise en
          forme pour que votre site ressemble à ce que vous avez imaginé !
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
      <div className="text-origran-white text-center grid">
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
