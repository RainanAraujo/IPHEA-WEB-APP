import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, InstagramLogo, Phone } from "phosphor-react";
import MenuHamburger from "./MenuHamburger";

interface HeaderProps {
  hideNav?: boolean;
  currentPage?: "institucional" | "sobrenos" | "noticias" | "trabalheconosco";
}

export default function Header({ hideNav = false, currentPage }: HeaderProps) {
  return (
    <header className="w-full max-w-7xl px-20 m-auto flex flex-wrap justify-between items-center p-6 ">
      <Link href="/">
        <Image width={110} height={110} src="/images/logoiphea.svg" alt="" />
      </Link>
      {!hideNav ? (
        <nav className="hidden md:block">
          <ul className="flex justify-between gap-2 ">
            <Link href="/" className={`hover:font-bold duration-200`}>
              <li>Início</li>
            </Link>
            <Link
              href="/institucional"
              className={`hover:font-bold duration-200 ${
                currentPage == "institucional" && "font-bold"
              }`}
            >
              <li>Institucional</li>
            </Link>
            <Link
              href="/sobrenos"
              className={`hover:font-bold duration-200 ${
                currentPage == "sobrenos" && "font-bold"
              }`}
            >
              <li>O que fazemos</li>
            </Link>
            <Link
              href="/noticias"
              className={`hover:font-bold duration-200 ${
                currentPage == "noticias" && "font-bold"
              }`}
            >
              <li>Notícias</li>
            </Link>
            <Link
              href="/trabalheconosco"
              className={`hover:font-bold duration-200 ${
                currentPage == "trabalheconosco" && "font-bold"
              }`}
            >
              <li>Trabalhe conosco</li>
            </Link>
          </ul>
        </nav>
      ) : (
        <div className="flex gap-4 md:gap-3">
          <Link
            className="flex items-center duration-100 hover:font-semibold"
            href={""}
            target="_blank"
          >
            <Phone size={20} weight="fill" className="text-blue-900" />
            <span className="ml-2 hidden md:block">11 99999 9999</span>
          </Link>
          <Link
            className="flex items-center duration-100 hover:font-semibold"
            href={""}
            target="_blank"
          >
            <EnvelopeSimple size={20} weight="fill" className="text-blue-900" />
            <span className="ml-2  hidden md:block">contato@iphea.org.br</span>
          </Link>
          <Link
            className="flex items-center duration-100 hover:font-semibold"
            href={"https://www.instagram.com/institutoiphea/"}
            target="_blank"
          >
            <InstagramLogo size={20} weight="fill" className="text-blue-900 " />
            <span className="ml-2  hidden md:block">@institutoiphea</span>
          </Link>
        </div>
      )}
      <button
        className="bg-blue-900 text-sm text-white py-3 
        px-5 rounded-md hover:bg-blue-950 duration-200
        hidden md:block"
      >
        Área do Colaborador
      </button>
      <MenuHamburger />
    </header>
  );
}
