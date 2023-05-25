import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import handler from "./api/sendEmail";

export default function TrabalheConosco() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const cpfCnpj = formData.get("cpfCnpj") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const type = formData.get("type") as string;
    const file = formData.get("file");

    const data = new FormData();
    data.append("name", name);
    data.append("cpfCnpj", cpfCnpj);
    data.append("email", email);
    data.append("phone", phone);
    data.append("message", message);
    data.append("whatsapp", whatsapp);
    data.append("type", type);
    if (file) {
      data.append("file", file);
    }
    console.log(data);
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      body: data,
    });
    const json = await res.json();
  }
  return (
    <>
      <Head>
        <title>Instituto IPHEA - Notícias</title>
      </Head>
      <ScrollToTop />
      <main className="h-screen flex flex-col justify-between  max-md:gap-10 gap-20">
        <Header currentPage="trabalheconosco" />
        <div className="flex flex-col max-w-3xl w-full m-auto justify-center items-center gap-10 px-9">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-slate-900">
              Trabalhe Conosco
            </h1>
          </div>

          <form
            className="flex flex-col w-full gap-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex gap-2 max-md:flex-wrap">
              <fieldset className="flex flex-col gap-1 w-full">
                <label className="text-slate-900">Nome ou Empresa *</label>
                <input
                  required
                  className="border  border-slate-400 rounded-md p-2"
                  type="text"
                  name="name"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-1  w-full">
                <label className="text-slate-900">CPF/CNPJ *</label>
                <input
                  required
                  className="border border-slate-400 rounded-md p-2"
                  type="text"
                  name="cpfCnpj"
                />
              </fieldset>
            </div>
            <div className="flex gap-2 max-md:flex-wrap">
              <fieldset className="flex flex-col gap-1 w-full">
                <label className="text-slate-900">E-mail *</label>
                <input
                  required
                  className="border border-slate-400 rounded-md p-2"
                  type="email"
                  name="email"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-1  w-full">
                <label className="text-slate-900">Telefone *</label>
                <input
                  required
                  className="border border-slate-400 rounded-md p-2"
                  type="text"
                  name="phone"
                />
              </fieldset>
            </div>

            <fieldset className="flex flex-col gap-1">
              <label className="text-slate-900">WhatsApp</label>
              <input
                className="border border-slate-400 rounded-md p-2"
                type="text"
                name="whatsapp"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="text-slate-900">Selecione uma opção *</label>
              <select
                className="border border-slate-400 rounded-md p-2"
                name="type"
              >
                <option>Recursos Humanos (enviar currículo)</option>
                <option>Fornecedores (enviar apresentação)</option>
              </select>
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="text-slate-900">Mensagem *</label>
              <textarea
                className="border border-slate-400 rounded-md p-2"
                name="message"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="text-slate-900">
                Upload de arquivo (Currículo ou Apresentação) *
              </label>
              <input
                required
                className="border border-slate-400 rounded-md p-2"
                type="file"
                name="file"
              />
            </fieldset>
            <div className="flex w-full justify-end">
              <button className="bg-blue-900 hover:bg-blue-950 duration-200 w-full md:max-w-xs text-white rounded-md p-2">
                Enviar
              </button>
            </div>
          </form>
        </div>

        <footer className="flex justify-center bg-slate-900 text-white p-5">
          <div className="text-white m-auto text-sm p-2">
            <p>© 2023 IPHEA | Todos os Direitos Reservados</p>
          </div>
        </footer>
      </main>
    </>
  );
}
