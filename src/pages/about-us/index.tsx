import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { NavigationMenuDemo } from '@/components/ui/NavComponent'
import Link from 'next/link'
import { EnvelopeClosedIcon, EnvelopeOpenIcon, ExternalLinkIcon, FileTextIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, MobileIcon, PinTopIcon, ShadowInnerIcon } from '@radix-ui/react-icons'

import { ChevronLeft, MapPinIcon, PartyPopperIcon, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col px-12 md:px-96 md:py-16 py-6 ${inter.className}`}
        >

            <Header />


            <div className='flex flex-col md:flex-row justify-between w-full gap-10 md:gap-20 mt-20'>

                <div className="flex flex-col md:hidden">
                    <Link href='/' className='flex mb-10 items-center gap-1 md:hidden'><ChevronLeft /> Voltar ao Início</Link>
                    <Image src={'/gsantana.jpg'} alt='image' width={300} height={300} quality={100} className='rounded-lg md:hidden' />
                </div>

                <Image src={'/gsantana.jpg'} alt='image' width={300} height={300} quality={100} className='hidden md:block rounded-lg' />



                <div className="flex flex-col">
                    <h1 className='text-xl font-bold'>Sobre mim</h1>
                    <p className='text-xs md:text-sm'>Olá, meu nome é Gabriel, e aos 20 anos, já me considero um Dev Full-Stack com uma paixão ardente pela tecnologia.

                        Atualmente, estou cursando Ciência da Computação na Unijorge, uma universidade de renome em Salvador, Bahia.

                        <br></br><br></br>O curso que escolhi aqui é, sem dúvida, uma das melhores opções para quem deseja explorar as profundezas do mundo da computação. Não é à toa que, segundo o MEC, a Unijorge ostenta o título de oferecer o melhor curso de Ciência da Computação do Brasil. Estudar em um ambiente acadêmico tão bem avaliado é um privilégio e uma oportunidade de aprendizado sem igual.

                        Uma das minhas paixões é a programação, e ao longo dos anos, desenvolvi habilidades sólidas em diversas tecnologias. <br></br><br></br>Tenho experiência prática com React.js, uma biblioteca JavaScript amplamente usada para construir interfaces de usuário interativas e responsivas. Além disso, mergulhei nas profundezas do Next.js, uma estrutura que aprimora o desenvolvimento de aplicativos web, oferecendo recursos poderosos para criar experiências de usuário excepcionais. E quando se trata do lado do servidor, estou à vontade com Node.js, uma plataforma que permite criar aplicativos escaláveis e de alto desempenho.

                        <br></br><br></br>

                        Mas, mais do que apenas habilidades técnicas, minha maior motivação é utilizar a tecnologia para solucionar problemas do mundo real. Minha paixão é enfrentar desafios e encontrar soluções inovadoras por meio da programação e do desenvolvimento de software. Cada dia representa uma nova oportunidade para aplicar meu conhecimento e criatividade na resolução de problemas, seja desenvolvendo aplicativos que melhorem a vida das pessoas ou otimizando processos empresariais.

                    </p>
                </div>

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
