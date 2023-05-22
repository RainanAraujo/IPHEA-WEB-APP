import Head from "next/head";
import Image from "next/image";
import {
  CaretRight,
  At,
  Newspaper,
  ListChecks,
  Handshake,
} from "phosphor-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Instituto IPHEA</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="h-screen flex flex-col justify-between">
        <header className="w-full ">
          <div className="max-w-7xl px-20 flex flex-wrap justify-between items-center p-6">
            <div className="">
              <Image
                width={100}
                height={100}
                src="/images/logoiphea.svg"
                alt=""
              ></Image>
            </div>
            <div className="bg-blue-900 text-white p-2 rounded-md">
              <button>Área do Colaborador</button>
            </div>
          </div>
        </header>
        <section className="max-w-7xl w-full flex justify-between m-auto px-20">
          <div className="w-1/2 m-auto">
            <h1 className="text-5xl font-extrabold  tracking-tighter">
              Instituto para o Progresso Humano,Econômico e Ambiental
            </h1>
            <h2 className="text-gray-500">Subtítulo da Sessão</h2>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/ipheaimg.png"
              width={500}
              height={1}
              alt=""
            ></Image>
          </div>
        </section>
        <section className="text-white w-full bg-slate-900 flex flex-col p-12">
          <div className="flex justify-between m-auto flex-row gap-5">
            <div className="min-w-min p-3 bg-none border-solid border-2 border-sky-600 rounded-md flex justify-between gap-4">
              <At width={32} height={32} color="#ffff" className="m-auto" />
              <div className="m-auto text-xl">
                <h3>Institucional</h3>
                <div className="flex flex-row gap-3 text-base items-center ">
                  <p>Acessar</p>
                  <CaretRight width={16} height={16} color="#ffff" />
                </div>
              </div>
            </div>
            <div className="min-w-min p-3 bg-none border-solid border-2 border-sky-600 rounded-md flex justify-between gap-4">
              <ListChecks
                size={32}
                height={32}
                color="#ffff"
                className="m-auto"
              />
              <div className="m-auto text-xl">
                <h3>O que fazemos</h3>
                <div className="flex flex-row gap-3 text-base items-center ">
                  <p>Acessar</p>
                  <CaretRight width={16} height={16} color="#ffff" />
                </div>
              </div>
            </div>
            <div className="min-w-min p-3 bg-none border-solid border-2 border-sky-600 rounded-md flex justify-between gap-4">
              <Newspaper width={32} height={32} color="#ffff" />
              <div className="m-auto text-xl">
                <h3>Notícias</h3>
                <div className="flex flex-row gap-3 text-base items-center ">
                  <p>Acessar</p>
                  <CaretRight size={16} height={16} color="#ffff" />
                </div>
              </div>
            </div>
            <div className="min-w-min p-3 bg-none border-solid border-2 border-sky-600 rounded-md flex justify-between gap-4">
              <Handshake width={32} height={32} color="#ffff" />
              <div className="m-auto text-xl">
                <h3>Trabalhe conosco</h3>
                <div className="flex flex-row gap-3 text-base items-center ">
                  <p>Acessar</p>
                  <CaretRight width={16} height={16} color="#ffff" />
                </div>
              </div>
            </div>
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
