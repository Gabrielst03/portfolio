import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { NavigationMenuDemo } from '@/components/ui/NavComponent'
import Link from 'next/link'
import { EnvelopeClosedIcon, EnvelopeOpenIcon, ExternalLinkIcon, FileTextIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, MobileIcon, PinTopIcon, ShadowInnerIcon } from '@radix-ui/react-icons'

import { MapPinIcon, PartyPopperIcon, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col px-12 md:px-96 md:py-16 py-6 ${inter.className}`}
    >

      <Header />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full mt-10 md:mt-32">
        <div className='flex flex-col w-full md:w-[500px]'>
          <h1 className='text-xl md:text-3xl font-semibold'>Olá, Seja bem-vindo! 👋</h1>
          <p className='text-sm md:text-md text-gray-400'>Olá, me chamo Gabriel, tenho 20 anos e sou um Dev Full-Stack.</p>
          <p className='text-sm md:text-md text-gray-400'>Sou estudante de Ciência da Computação na <a href="https://unijorge.edu.br" target="_blank" className='text-yellow-400 underline'>Unijorge</a> em Salvador-BA, universidade que, segundo o MEC, tem o melhor curso de Ciência da Computação do Brasil!</p>
          <Link href={'/about-us'}>
            <Button className='w-full md:w-[200px] gap-2 mt-4'><ExternalLinkIcon />Saiba Mais </Button>
          </Link>

          <div className='mt-10'>
            <div className="flex items-center gap-1">
              <ShadowInnerIcon />
              Status

            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm animate-pulse">
              <div className='w-2 h-2 rounded-full bg-green-500'></div>
              Codando e escutando Lo-fi MPB. 🧑‍💻😁
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm animate-pulse">
              <div className='w-2 h-2 rounded-full bg-white'></div>
              Programador Cristão e cheio de Fé 🙏
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm animate-pulse">
              <div className='w-2 h-2 rounded-full bg-yellow-500'></div>
              Graduando em Ciência da Computação
            </div>
          </div>

        </div>

        <Image src="/frame.png" alt="frame" width={420} height={420} quality={100} />


      </div>

      <footer className='flex flex-col gap-10 md:flex-row justify-between py-4 w-full border-t mt-16'>
        <div>
          <h1 className='text-lg font-bold'>Contatos</h1>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <EnvelopeClosedIcon />
            santanag311@gmail.com
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MobileIcon />
            (71) 9 9277-7919
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <GitHubLogoIcon />
            gabrielst03
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <LinkedInLogoIcon />
            Gabriel Artur Santana
          </div>
          <div className="flex items-center gap-2 text-sm text-rose-500">
            <InstagramLogoIcon />
            Desativado Temporariamente
          </div>
        </div>

        <div>
          <h1 className='text-lg font-bold'>Endereço</h1>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MapPinIcon />
            Salvador/BA - Brasil
          </div>

        </div>

        <div className='w-[300px]'>
          <h1 className='text-lg font-bold'>Newsletter</h1>
          <p className='text-xs mb-2 text-zinc-400'>Assine minha Newsletter para receber novidades sobre tecnologia, ciencias e etc.</p>
          <div className="flex items-center gap-2">
            <Input placeholder='Seu melhor e-mail' />
            <Button className='gap-2'><PartyPopperIcon className='w-5 h-5' /> Assinar</Button>
          </div>
        </div>

      </footer>


    </main>
  )
}
