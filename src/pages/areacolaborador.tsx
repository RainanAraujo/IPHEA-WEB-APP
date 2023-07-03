import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import axios from 'axios'
import Head from 'next/head'
import { FormEvent } from 'react'

export default function TrabalheConosco() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formElement = new FormData(e.target as HTMLFormElement)
    axios.post('/api/sendEmail', formElement).then((res) => {
      alert('Mensagem enviada com sucesso!')
    })
  }
  return (
    <>
      <Head>
        <title>Instituto IPHEA - Área do colaborador</title>
      </Head>
      <ScrollToTop />
      <main className="min-h-screen h-full flex flex-col justify-between  max-md:gap-10 gap-20">
        <Header />
        <div className="flex flex-col max-w-3xl w-full m-auto justify-center items-center gap-10 px-9">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-slate-900">Solicitar declaração de vínculo</h1>
          </div>

          <form
            className="flex flex-col w-full gap-5"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input
              type="hidden"
              name="_next"
              value="iphea.org.br/areacolaborador"
            />
            <fieldset className="flex flex-col gap-1 w-full">
              <label className="text-slate-900">Nome completo *</label>
              <input
                required
                className="border  border-slate-400 rounded-md p-2"
                type="text"
                name="name"
              />
            </fieldset>

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
                <label className="text-slate-900">CPF *</label>
                <input
                  required
                  className="border border-slate-400 rounded-md p-2"
                  type="text"
                  name="cpfCnpj"
                />
              </fieldset>
            </div>
            <div className="flex gap-2 max-md:flex-wrap">
              <fieldset className="flex flex-col gap-1  w-full">
                <label className="text-slate-900">Vínculo *</label>
                <input
                  required
                  className="border border-slate-400 rounded-md p-2"
                  type="text"
                  name="vinculo"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-1  w-full">
                <label className="text-slate-900">Telefone / WhatsApp * </label>
                <input
                  className="border border-slate-400 rounded-md p-2"
                  type="tel"
                  name="whatsapp"
                  required
                />
              </fieldset>
            </div>
            <input
              type="hidden"
              name="typeSubject"
              value="vínculo de colaborador"
            />
            <div className="flex w-full justify-end ">
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-950 duration-200 w-full md:max-w-xs text-white rounded-md p-2"
              >
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
  )
}
