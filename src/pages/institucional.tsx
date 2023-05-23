import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { Handshake, Eye, Planet, SketchLogo } from "phosphor-react";

export default function Institucional() {
  return (
    <>
      <Head>
        <title>Instituto IPHEA - Institucional</title>
      </Head>

      <main className="h-screen flex flex-col justify-between gap-32">
        <Header currentPage="institucional" />
        <section className="max-w-7xl w-full flex justify-between m-auto px-20 gap-20">
          <div className="w-1/2 m-auto">
            <Image
              width={591}
              height={204}
              src="/images/grafico.png"
              alt=""
            ></Image>
          </div>
          <div className="w-1/2 m-auto flex flex-col gap-1">
            <h6 className="text-sm text-blue-900 font-bold">Sobre nós</h6>
            <h2 className="text-2xl font-bold">
              Desenvolvimento Sustentável de Forma Equilibrada e Inclusiva
            </h2>
            <p className="text-base ">
              O IPHEA é uma organização sem fins lucrativos, fundada em 1999,
              com o objetivo de promover o desenvolvimento sustentável através
              da integração equilibrada dos pilares humano, econômico e
              ambiental.
            </p>
          </div>
        </section>
        <section className="max-w-7xl w-full flex justify-between m-auto px-20 gap-20">
          <div className="w-1/3 ">
            <h6 className="text-sm text-blue-900 font-bold">
              No que acreditamos
            </h6>
            <h2 className="text-2xl font-bold">Desenvolvimento holístico</h2>
          </div>
          <div className="w-3/4 m-auto flex flex-col gap-1">
            <p className="text-base ">
              Acreditamos que a chave para um futuro melhor e mais próspero
              reside em enfrentar os desafios de nossa época de maneira
              holística e inclusiva, colocando o ser humano no centro de nossas
              ações. Por isso, nosso trabalho se concentra em conectar
              indivíduos, tomadores de decisão, setor público e sociedade civil,
              com foco no desenvolvimento social, saúde, educação e cultura,
              promovendo soluções inovadoras e eficazes que sejam economicamente
              viáveis e ambientalmente sustentáveis.
            </p>
          </div>
        </section>
        <section className="max-w-3xl w-3/5 m-auto px-20 flex flex-col text-center gap-1">
          <h1 className="font-bold text-2xl">
            Trazendo impacto positivo para o presente e o futuro
          </h1>
          <p className="">
            Nossos valores fundamentais incluem a transparência, a colaboração e
            o compromisso com a excelência. Nosso objetivo é gerar impacto
            positivo, garantindo que as ações tomadas hoje sejam benéficas não
            apenas para as gerações atuais, mas também para as futuras.
          </p>
        </section>
        <section className="max-w-7xl w-full m-auto px-20 flex justify-between gap-12">
          <div className="w-1/3 border-solid border-2 border-sky-100 rounded-md p-6   flex flex-col gap-2">
            <Handshake
              className="bg-sky-100 p-3 rounded-l-lg"
              width={60}
              height={60}
              color="#0c4a6e"
            ></Handshake>
            <h3 className="text-slate-900 text-xl font-semibold">Missão</h3>
            <p className="text-gray-500 text-base">
              Fomentar o desenvolvimento humano integral, por meio do
              aprimoramento das áreas sociais, de saúde, educação e cultura,
              promovendo práticas econômicas e ambientalmente sustentáveis, com
              o propósito de construir um legado duradouro e inclusivo para as
              gerações presentes e futuras.
            </p>
          </div>
          <div className="w-1/3 text-center flex flex-col items-center gap-2">
            <Planet width={100} height={100} color="#22C55E"></Planet>
            <h1 className="text-2xl font-extrabold  ">
              Construindo um futuro inclusivo e sustentável
            </h1>
          </div>
          <div className="w-1/3 border-solid border-2 border-sky-100 rounded-md p-6 flex flex-col gap-2">
            <Eye
              className="bg-green-100 p-3 rounded-l-lg"
              width={60}
              height={60}
              color="#22C55E"
            ></Eye>
            <h3 className="text-slate-900 text-xl font-semibold">Missão</h3>
            <p className="text-gray-500 text-base">
              Fomentar o desenvolvimento humano integral, por meio do
              aprimoramento das áreas sociais, de saúde, educação e cultura,
              promovendo práticas econômicas e ambientalmente sustentáveis, com
              o propósito de construir um legado duradouro e inclusivo para as
              gerações presentes e futuras.
            </p>
          </div>
        </section>
        <section className="max-w-7xl w-full flex justify-between m-auto px-20 gap-3">
          <div className="w-1/3 items-center flex flex-col gap-2 ">
            <SketchLogo
              className=" bg-sky-100 p-3 rounded-l-lg"
              width={60}
              height={60}
              color="#0c4a6e"
            ></SketchLogo>
            <h2 className="text-2xl font-bold">Valores</h2>
          </div>
          <div className="w-3/4 ">
            <ul className="list-disc leading-6 text-base">
              <li>
                <span className="font-bold"> Foco no ser humano:</span>{" "}
                Priorizamos o bem-estar e desenvolvimento integral das pessoas.
              </li>
              <li>
                <span className="font-bold">Sustentabilidade:</span> Valorizamos
                práticas econômicas e ambientais responsáveis.
              </li>
              <li>
                <span className="font-bold">Inovação:</span> Incentivamos
                soluções criativas e colaboração entre setores.
              </li>
              <li>
                <span className="font-bold">Integridade:</span> Agimos com
                ética, transparência e responsabilidade.
              </li>
              <li>
                <span className="font-bold">Inclusão:</span> Fomentamos
                diversidade, igualdade e participação de todos.
              </li>
              <li>
                <span className="font-bold">Excelência:</span> Buscamos melhoria
                contínua e impacto positivo em nossas ações.
              </li>
              <li>
                <span className="font-bold">Colaboração:</span> Estabelecemos
                parcerias para alcançar objetivos comuns e compartilhar
                conhecimentos.
              </li>
            </ul>
          </div>
        </section>
        <section className="max-w-3xl w-3/5 m-auto px-20 flex flex-col text-center gap-6">
          <h1 className="">
            No IPHEA, nossa atuação se concentra no desenvolvimento e
            fortalecimento de parcerias que resultem em avanços significativos
            nas áreas de políticas públicas, saúde, educação, cultura,
            assistência social e e sustentabilidade ambiental.
          </h1>
          <p className="font-bold ">
            Junte-se a nós na busca por um mundo mais justo, próspero e
            sustentável, onde o progresso humano, econômico e ambiental caminham
            lado a lado.
          </p>
        </section>
        <footer className="flex justify-center bg-slate-900 text-white p-5">
          <div className="text-white m-auto text-sm p-2">
            <p>© 2023 IPHEA | Todos os Direitos Reservados</p>
          </div>
        </footer>
      </main>
    </>
  );
}
