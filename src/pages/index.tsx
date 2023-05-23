import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  CaretRight,
  At,
  Newspaper,
  ListChecks,
  Handshake,
} from "phosphor-react";

export default function Home() {
  const buttonsNav: {
    title: string;
    icon: JSX.Element;
    link: string;
  }[] = [
    {
      title: "Institucional",
      icon: <At width={32} height={32} color="#ffff" />,
      link: "/institucional",
    },
    {
      title: "O que fazemos",
      icon: <ListChecks size={32} height={32} color="#ffff" />,
      link: "/sobrenos",
    },
    {
      title: "Notícias",
      icon: <Newspaper width={32} height={32} color="#ffff" />,
      link: "/noticias",
    },
    {
      title: "Trabalhe conosco",
      icon: <Handshake width={32} height={32} color="#ffff" />,
      link: "/trabalheconosco",
    },
  ];

  return (
    <>
      <Head>
        <title>Instituto IPHEA</title>
      </Head>
      <main className="h-screen flex flex-col justify-between">
        <Header hideNav />
        <section className="max-w-7xl w-full flex justify-between m-auto items-center px-20">
          <div className="w-1/2">
            <h1 className="text-5xl font-extrabold tracking-tighter leading-[1.15]">
              Instituto para o <br /> Progresso Humano,
              <br /> Econômico e Ambiental
            </h1>
            <h2 className="text-gray-500 mt-4">
              O lugar onde o cuidador e o amor pela vida andam juntos.
              <br />
              Bem vindo ao IPHEA!
            </h2>
          </div>
          <Image
            src="/images/ipheaimg.png"
            width={500}
            height={1}
            alt=""
          ></Image>
        </section>
        <section className="text-white w-full bg-slate-900 flex flex-col p-12">
          <div className="flex justify-between m-auto flex-row gap-5">
            {buttonsNav.map((button) => (
              <Link
                key={button.title}
                href={button.link}
                className="min-w-[200px] p-3
                 bg-none border-solid border-2 
                 border-[#375373] rounded-md flex items-center
                 gap-4 hover:scale-105 transition-all ease-in-out"
              >
                {button.icon}
                <div className=" text-xl">
                  <h3>{button.title}</h3>
                  <div className="flex flex-row gap-3 text-base items-center ">
                    <p>Acessar</p>
                    <CaretRight width={16} height={16} color="#ffff" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <footer className="flex justify-center bg-slate-900 text-white">
          <div className="text-white m-auto text-sm p-2">
            <p>© 2023 IPHEA | Todos os Direitos Reservados</p>
          </div>
        </footer>
      </main>
    </>
  );
}
