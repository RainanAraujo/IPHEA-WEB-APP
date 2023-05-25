import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import Image from "next/image";
import { Handshake, Eye, Planet, SketchLogo, Target } from "phosphor-react";

export default function Institucional() {
  return (
    <>
      <Head>
        <title>Instituto IPHEA - Institucional</title>
      </Head>
      <ScrollToTop />
      <main className="h-screen flex flex-col justify-between gap-20 max-md:m-0 max-md:gap-10 max-md:p-0">
        <Header currentPage="institucional" />
        <section className="max-w-7xl w-full flex justify-between m-auto px-20 gap-20 max-md:flex-wrap-reverse max-md:justify-center max-md:p-0 max-md:gap-4">
          <div className="w-1/2 m-auto">
            <Image
              width={591}
              height={204}
              src="/images/grafico.svg"
              alt=""
            ></Image>
          </div>
          <div className="w-[60%] m-auto flex flex-col gap-1 max-md:w-[82%] max-md:text-center  ">
            <h6 className="text-sm text-blue-900 font-bold">Sobre nós</h6>
            <h2 className="text-4xl font-bold tracking-tighter leading-[1.4]   ">
              Desenvolvimento Sustentável de Forma Equilibrada e Inclusiva
            </h2>
            <p className="text-base mt-3 text-gray-500 leading-[1.52]">
              O IPHEA é uma organização sem fins lucrativos, fundada em 1999,
              com o objetivo de promover o desenvolvimento sustentável através
              da integração equilibrada dos pilares humano, econômico e
              ambiental.
            </p>
          </div>
        </section>
        <section className="max-w-7xl w-full flex justify-between m-auto px-20 gap-20 max-md:flex-wrap max-md:justify-center max-md:p-0 max-md:gap-4">
          <div className="w-1/3 max-md:text-center max-md:w-full  ">
            <h6 className="text-sm text-blue-900 font-bold">
              No que acreditamos
            </h6>
            <h2 className="text-4xl font-bold tracking-tighter leading-[1.4] max-md">
              Desenvolvimento holístico
            </h2>
          </div>
          <p className=" w-3/4 text-base text-gray-500 leading-[1.52] max-md:text-center">
            Acreditamos que a chave para um futuro melhor e mais próspero reside
            em enfrentar os desafios de nossa época de maneira holística e
            inclusiva, colocando o ser humano no centro de nossas ações. Por
            isso, nosso trabalho se concentra em conectar indivíduos, tomadores
            de decisão, setor público e sociedade civil, com foco no
            desenvolvimento social, saúde, educação e cultura, promovendo
            soluções inovadoras e eficazes que sejam economicamente viáveis e
            ambientalmente sustentáveis.
          </p>
        </section>
        <section className="max-w-3xl w-3/5 m-auto px-20 flex flex-col text-center gap-4 max-md:m-0 max-md:w-full max-md:justify-center max-md:p-9 ">
          <h1 className="text-4xl font-bold tracking-tighter leading-[1.4]">
            Trazendo impacto positivo para o presente e o futuro
          </h1>
          <p className="text-gray-500 leading-[1.52]">
            Nossos valores fundamentais incluem a transparência, a colaboração e
            o compromisso com a excelência. Nosso objetivo é gerar impacto
            positivo, garantindo que as ações tomadas hoje sejam benéficas não
            apenas para as gerações atuais, mas também para as futuras.
          </p>
        </section>
        <section className="max-w-7xl w-full m-auto px-20 flex justify-between gap-12 max-md:flex-col max-md:p-0 max-md: max-md:items-center max-md:w-full">
          <div className="w-1/3 border-solid border-2 border-sky-100 rounded-md p-6 flex flex-col gap-2 max-md:w-[80%] ">
            <Target
              className="bg-sky-100 p-3 rounded-t-lg rounded-l-lg "
              width={60}
              height={60}
              color="#0c4a6e"
            ></Target>
            <h3 className="text-slate-900 text-xl font-semibold mt-3">
              Missão
            </h3>
            <p className="text-gray-500 text-base leading-[1.8]">
              Fomentar o desenvolvimento humano integral, por meio do
              aprimoramento das áreas sociais, de saúde, educação e cultura,
              promovendo práticas econômicas e ambientalmente sustentáveis, com
              o propósito de construir um legado duradouro e inclusivo para as
              gerações presentes e futuras.
            </p>
          </div>
          <div className="w-1/3 text-center flex flex-col items-center gap-6">
            <Planet width={100} height={100} color="#22C55E"></Planet>
            <h1 className="text-4xl font-extrabold tracking-tighter leading-[1.09]">
              Construindo um futuro inclusivo e sustentável
            </h1>
          </div>
          <div className="w-1/3 border-solid border-2 border-sky-100 rounded-md p-6 flex flex-col gap-2 max-md:w-[80%] ">
            <Eye
              className="bg-green-100 p-3 rounded-t-lg rounded-l-lg "
              width={60}
              height={60}
              color="#22C55E"
            ></Eye>
            <h3 className="text-slate-900 text-xl font-semibold mt-3">Visão</h3>
            <p className="text-gray-500 text-base leading-[1.8]">
              Fomentar o desenvolvimento humano integral, por meio do
              aprimoramento das áreas sociais, de saúde, educação e cultura,
              promovendo práticas econômicas e ambientalmente sustentáveis, com
              o propósito de construir um legado duradouro e inclusivo para as
              gerações presentes e futuras.
            </p>
          </div>
        </section>
        <section className="max-w-7xl w-full flex justify-between m-auto px-20 gap-3 max-md:flex-wrap max-md:justify-center  max-md:p-9">
          <div className="w-1/3 items-center flex flex-col gap-6 m-auto">
            <SketchLogo
              className=" bg-sky-100 p-3 rounded-t-lg rounded-l-lg  "
              width={64}
              height={64}
              color="#3B82F6"
            ></SketchLogo>
            <h2 className="text-4xl font-bold tracking-tighter">Valores</h2>
          </div>
          <div className="w-3/4 ">
            <ul className="list-disc leading-10 text-base tracking-tighter text-gray-500  ">
              <li>
                <span className="font-bold text-gray-900">
                  Foco no ser humano:
                </span>{" "}
                Priorizamos o bem-estar e desenvolvimento integral das pessoas;
              </li>
              <li>
                <span className="font-bold text-gray-900">
                  Sustentabilidade:
                </span>{" "}
                Valorizamos práticas econômicas e ambientais responsáveis;
              </li>
              <li>
                <span className="font-bold text-gray-900">Inovação:</span>{" "}
                Incentivamos soluções criativas e colaboração entre setores;
              </li>
              <li>
                <span className="font-bold text-gray-900">Integridade:</span>{" "}
                Agimos com ética, transparência e responsabilidade;
              </li>
              <li>
                <span className="font-bold text-gray-900">Inclusão:</span>{" "}
                Fomentamos diversidade, igualdade e participação de todos;
              </li>
              <li>
                <span className="font-bold text-gray-900">Excelência:</span>{" "}
                Buscamos melhoria contínua e impacto positivo em nossas ações;
              </li>
              <li>
                <span className="font-bold text-gray-900">Colaboração:</span>{" "}
                Estabelecemos parcerias para alcançar objetivos comuns e
                compartilhar conhecimentos.
              </li>
            </ul>
          </div>
        </section>
        <section className="max-w-3xl w-3/5 m-auto px-20 flex flex-col text-center gap-6 max-md:m-0 max-md:w-full max-md:justify-center max-md:p-9 ">
          <h1 className="text-gray-500 tracking-tighter leading-[1.52]">
            No IPHEA, nossa atuação se concentra no desenvolvimento e
            fortalecimento de parcerias que resultem em avanços significativos
            nas áreas de políticas públicas, saúde, educação, cultura,
            assistência social e e sustentabilidade ambiental.
          </h1>
          <p className="font-bold text-gray-900 tracking-tighter leading-[1.52]">
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
