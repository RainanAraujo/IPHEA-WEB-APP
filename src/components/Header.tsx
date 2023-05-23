import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  hideNav?: boolean;
}

export default function Header({ hideNav = false }: HeaderProps) {
  return (
    <header className="w-full max-w-7xl px-20 m-auto flex flex-wrap justify-between items-center p-6 ">
      <Link href="/">
        <Image width={120} height={120} src="/images/logoiphea.svg" alt="" />
      </Link>
      {!hideNav && (
        <nav>
          <ul className="flex justify-between gap-2 ">
            <Link href="/" className="hover:font-bold duration-200">
              <li>Início</li>
            </Link>
            <Link
              href="/institucional"
              className="hover:font-bold duration-200"
            >
              <li>Institucional</li>
            </Link>
            <Link href="/sobrenos" className="hover:font-bold duration-200">
              <li>O que fazemos</li>
            </Link>
            <Link href="/noticias" className="hover:font-bold duration-200">
              <li>Notícias</li>
            </Link>
            <Link
              href="/trabalheconosco"
              className="hover:font-bold duration-200"
            >
              <li>Trabalhe conosco</li>
            </Link>
          </ul>
        </nav>
      )}
      <button
        className="bg-blue-900 text-sm text-white py-3 
        px-5 rounded-md hover:bg-blue-950 duration-200"
      >
        Área do Colaborador
      </button>
    </header>
  );
}