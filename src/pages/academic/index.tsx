import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { NavigationMenuDemo } from '@/components/ui/NavComponent'
import Link from 'next/link'
import { EnvelopeClosedIcon, EnvelopeOpenIcon, ExternalLinkIcon, FileTextIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, MobileIcon, PinTopIcon, ShadowInnerIcon } from '@radix-ui/react-icons'

import { ChevronLeft, MapPinIcon, PartyPopperIcon, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Timeline } from '@/components/Timeline'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col px-12 md:px-20 2xl:px-56 md:py-16 py-6 ${inter.className}`}
        >

            <Header />


            <div className='flex flex-col md:flex-row justify-between w-full gap-10 md:gap-20 mt-20'>


                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Junho de 2020</time>
                        <h3 className="text-lg font-semibold text-zinc-100 dark:text-white">Iniciando os Estudos na Programação Web</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Iniciei estudos na <a className='text-yellow-400 underline' target='_blank' href="https://dio.me">Dio</a>  e na <a className='text-violet-500 underline' target='_blank' href="https://rocketseat.com.br">Rocketseat</a> </p>
                        <p className="mb-4 text-base font-normal text-yellow-400">Digital Innovation One & Rocketseat</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Janeiro de 2022</time>
                        <h3 className="text-lg font-semibold text-zinc-100 dark:text-white">Engenharia de Software</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Cursei 3 semestres de Engenharia de Software na Estácio, de Jan. 2022 até Jun. 2023</p>
                        <p className="mb-4 text-base font-normal text-yellow-400">Universidade Estácio de Sá - Salvador/BA (Campus Bela Vista)</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Agosto de 2023</time>
                        <h3 className="text-lg font-semibold text-zinc-100 dark:text-white">Ciência da Computação</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Iniciando o 4° Semestre em Ciência da Computação na Unijorge, transferência da Estácio para a mesma.</p>
                        <p className="mb-4 text-base font-normal text-yellow-400">Unijorge - Salvador/BA (Campus Paralela)</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Atualmente</time>
                        <h3 className="text-lg font-semibold text-zinc-100 dark:text-white">Resumo</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Cursando o 4° Semestre de Ciência da Computação, estudando conteúdos na Rocketseat e buscando conteúdos estrangeiros.</p>
                        <p className="mb-4 text-base font-normal text-yellow-400"></p>
                    </li>

                </ol>

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
