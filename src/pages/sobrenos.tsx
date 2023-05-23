import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import {
  CaretRight,
  At,
  Newspaper,
  ListChecks,
  Handshake,
  Eye,
  Planet,
  DiamondsFour,
  Diamond,
  SketchLogo,
} from "phosphor-react";

export default function Oquefazemos() {
  return (
    <>
      <Head>
        <title>Instituto IPHEA</title>
      </Head>
      <main className="h-screen flex flex-col justify-between gap-32">
        <Header />
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
            <h6 className="text-sm text-blue-900 font-bold">Nossos serviços</h6>
            <h2 className="text-2xl font-bold">Gestão de serviços de Saúde</h2>
            <p className="text-base ">
              Atuamos com o objetivo de aprimorar a eficiência, qualidade e
              sustentabilidade dos serviços de saúde. Em parceria com
              instituições públicas e outros atores, desenvolvemos estratégias
              inovadoras e eficazes para otimizar processos, gerenciar recursos
              humanos e materiais, e elevar a qualidade do atendimento ao
              paciente. Nosso enfoque abrange a capacitação e desenvolvimento de
              profissionais, aprimoramento de processos e a implantação de
              sistemas de gestão eficientes. Comprometemo-nos em proporcionar
              uma experiência segura e de excelência aos pacientes e garantir o
              bem-estar de todos os envolvidos na prestação de cuidados em
              saúde.
            </p>
          </div>
        </section>
        <section className="max-w-7xl w-full flex justify-between m-auto px-20 gap-20">
          <div className="w-1/2 m-auto flex flex-col gap-1">
            <h6 className="text-sm text-blue-900 font-bold">Nossos serviços</h6>
            <h2 className="text-2xl font-bold">
              Atividades de assistência social
            </h2>
            <p className="text-base ">
              Nos dedicamos às Atividades de Assistência Social, com o propósito
              de promover a inclusão, o desenvolvimento e o bem-estar das
              comunidades vulneráveis. Em parceria com instituições públicas e
              privadas trabalhamos na concepção e implementação de programas e
              projetos que oferecem apoio, orientação e recursos para atender às
              necessidades básicas e promover a autonomia dos indivíduos.
            </p>
          </div>
          <div className="w-1/2 m-auto">
            <Image
              width={591}
              height={204}
              src="/images/grafico.png"
              alt=""
            ></Image>
          </div>
        </section>
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
            <h6 className="text-sm text-blue-900 font-bold">Nossos serviços</h6>
            <h2 className="text-2xl font-bold">
              Atividades de proteção e preservação do meio ambiente.
            </h2>
            <p className="text-base ">
              Buscamos equilibrar o desenvolvimento humano e a sustentabilidade
              ambiental. Colaboramos com instituições públicas e comunidades
              locais para criar e implementar projetos e políticas voltadas ao
              uso responsável dos recursos naturais, conservação da
              biodiversidade e mitigação dos impactos das mudanças climáticas.
              Através de nossas ações, buscamos conscientizar e engajar a
              sociedade na construção de um futuro mais verde e sustentável,
              garantindo um legado ambiental saudável para as gerações presentes
              e futuras.
            </p>
          </div>
        </section>
        <section className="max-w-7xl w-full flex justify-between m-auto px-20 gap-20">
          <div className="w-1/2 m-auto flex flex-col gap-1">
            <h6 className="text-sm text-blue-900 font-bold">Nossos serviços</h6>
            <h2 className="text-2xl font-bold">
              Atividades de assistência e extensão rural.
            </h2>
            <p className="text-base ">
              Atuamos com o objetivo de apoiar e fortalecer comunidades rurais,
              promovendo o desenvolvimento sustentável e a inclusão social.
              Trabalhamos em conjunto com instituições públicas, organizações
              locais e agricultores familiares, oferecendo capacitação técnica,
              orientação e recursos que permitam melhorar a produtividade,
              diversificar a produção e adotar práticas agrícolas sustentáveis.
              Nosso compromisso é contribuir para o bem-estar das famílias
              rurais, garantindo a segurança alimentar e a conservação dos
              recursos naturais, alinhados aos princípios do desenvolvimento
              humano e ambiental.
            </p>
          </div>
          <div className="w-1/2 m-auto">
            <Image
              width={591}
              height={204}
              src="/images/grafico.png"
              alt=""
            ></Image>
          </div>
        </section>

        <section className="max-w-7xl w-full m-auto px-20 flex flex-col gap-4 ">
          <div className="max-w-3xl w-3/5 m-auto px-20 flex flex-col text-center gap-1">
            <h6 className="text-sm text-blue-900 font-bold">Nossos serviços</h6>
            <h2 className="text-2xl font-bold">Atividades Culturais</h2>
          </div>
          <div className="flex justify-between gap-20">
            <div className="w-1/2 m-auto">
              <Image
                width={591}
                height={204}
                src="/images/grafico.png"
                alt=""
              ></Image>
            </div>
            <div className="w-1/2 m-auto flex flex-col gap-1">
              <p className="text-base ">
                Nossa atuação busca valorizar a diversidade, a expressão
                artística e o patrimônio cultural das comunidades. Colaboramos
                com instituições públicas, artistas, educadores e organizações
                locais para desenvolver e implementar projetos e eventos
                culturais que estimulem a criatividade, a participação e o
                engajamento social. Nosso trabalho abrange a promoção de
                oficinas, exposições, apresentações artísticas, preservação do
                patrimônio histórico e fomento à produção cultural local.
                Através das atividades culturais, buscamos contribuir para a
                construção de uma sociedade mais inclusiva, consciente e
                conectada com suas raízes e tradições.
              </p>
            </div>
          </div>
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
