import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";
import {
  At,
  Handshake,
  House,
  Link,
  List,
  ListChecks,
  Newspaper,
  Users,
} from "phosphor-react";
import React, { ReactNode, useState } from "react";

interface MenuHamburgerProps {}

export default function MenuHamburger(props: MenuHamburgerProps) {
  const itemButtons = [
    {
      label: "Início",
      icon: <House size={16} weight="fill" className="text-blue-900 mr-2" />,
      href: "/",
    },
    {
      label: "Institucional",
      icon: <At size={16} weight="fill" className="text-blue-900 mr-2" />,
      href: "/institucional",
    },
    {
      label: "O que fazemos",
      icon: (
        <ListChecks size={16} weight="fill" className="text-blue-900 mr-2" />
      ),
      href: "/sobrenos",
    },
    {
      label: "Notícias",
      icon: (
        <Newspaper size={16} weight="fill" className="text-blue-900 mr-2" />
      ),
      href: "/noticias",
    },
    {
      label: "Trabalhe conosco",
      icon: <Users size={16} weight="fill" className="text-blue-900 mr-2" />,
      href: "/trabalheconosco",
    },
    {
      label: "Área do colaborador",
      icon: (
        <Handshake size={16} weight="fill" className="text-blue-900 mr-2" />
      ),
      href: "/parceiros",
    },
  ];
  return (
    <div className="relative inline-block text-left md:hidden">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild className="cursor-pointer">
          <List
            size={24}
            className="text-slate-900 hover:text-slate-950 duration-200"
          />
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={clsx(
              "radix-side-top:animate-slide-up  radix-side-bottom:animate-slide-down",
              "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
              "bg-white"
            )}
          >
            {itemButtons.map((item, i) => (
              <a key={i} href={item.href}>
                <DropdownMenuPrimitive.Item
                  className={clsx(
                    "flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none",
                    "text-gray-400 focus:bg-gray-50 cursor-pointer"
                  )}
                >
                  {item.icon}
                  <span className="flex-grow text-gray-700">{item.label}</span>
                </DropdownMenuPrimitive.Item>
              </a>
            ))}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
}
