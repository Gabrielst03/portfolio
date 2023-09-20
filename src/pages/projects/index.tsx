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
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col px-12 md:px-96 md:py-16 py-6 ${inter.className}`}
        >

            <Header />


            <div className='flex flex-col md:flex-row justify-between w-full gap-10 md:gap-20 mt-20'>

                <div className="flex flex-col">
                    <h1 className='text-lg font-bold'>Projetos</h1>
                    <p className='text-gray-400'>Confira a lista de projetos desenvolvidos por mim</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                        <div className="flex flex-col gap-1">
                            <Image src={'/cortiluxe.png'} width={700} height={700} alt='gabriel' />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h1>Site para empresa Cortiluxe Cortinas</h1>
                                    <div className="flex items-center gap-1">
                                        <Badge>HTML5</Badge>
                                        <Badge>CSS3</Badge>
                                        <Badge>Javascript</Badge>
                                    </div>

                                </div>
                                <Link target="_blank" href="https://cortiluxe.com.br"><Button className='w-[100px]' variant={'outline'}>Visitar <ExternalLinkIcon /></Button></Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Image src={'/1click.png'} width={700} height={700} alt='gabriel' />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h1>Site 1ClickTI</h1>
                                    <p className='text-xs text-rose-400'>* Este site foi desenvolvido na época do estágio na 1ClickTI, todo direito reservado a mesma.</p>
                                    <div className="flex items-center gap-1">
                                        <Badge>HTML5</Badge>
                                        <Badge>CSS3</Badge>
                                        <Badge>Javascript</Badge>
                                    </div>

                                </div>
                                <Link target="_blank" href="http://1clickti.com.br"><Button className='w-[100px]' variant={'outline'}>Visitar <ExternalLinkIcon /></Button></Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Image src={'/gestaoplena.png'} width={700} height={700} alt='gabriel' />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h1>Site para empresa Gestão Plena ADM</h1>
                                    <p className='text-xs text-rose-400'>* Este site foi desenvolvido na época do estágio na 1ClickTI, todo direito reservado a mesma.</p>

                                    <div className="flex items-center gap-1">
                                        <Badge>HTML5</Badge>
                                        <Badge>CSS3</Badge>
                                        <Badge>Bootstrap</Badge>
                                        <Badge>Javascript</Badge>
                                    </div>

                                </div>
                                <Link target="_blank" href="https://gestaoplenaadm.com.br/"><Button className='w-[100px]' variant={'outline'}>Visitar <ExternalLinkIcon /></Button></Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Image src={'/spotify.png'} width={700} height={700} alt='gabriel' />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h1>Clone do Spotify</h1>
                                    <div className="flex items-center gap-1">
                                        <Badge>NextJS</Badge>
                                        <Badge>Typescript</Badge>
                                        <Badge>TailwindCSS</Badge>
                                    </div>

                                </div>
                                <Link target="_blank" href="https://spotifytailwind.vercel.app/"><Button className='w-[100px]' variant={'outline'}>Visitar <ExternalLinkIcon /></Button></Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Image src={'/github.png'} width={700} height={700} alt='gabriel' />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h1>Github Finder</h1>
                                    <div className="flex items-center gap-1">
                                        <Badge>ReactJS</Badge>
                                        <Badge>Vite</Badge>
                                        <Badge>TailwindCSS</Badge>
                                    </div>

                                </div>
                                <Link target="_blank" href="https://githubfinder-react-ten.vercel.app/"><Button className='w-[100px]' variant={'outline'}>Visitar <ExternalLinkIcon /></Button></Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Image src={'/meugrao.png'} width={700} height={700} alt='gabriel' />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h1>Site Cafeteria</h1>
                                    <div className="flex items-center gap-1">
                                        <Badge>HTML5</Badge>
                                        <Badge>CSS3</Badge>
                                        <Badge>Javascript</Badge>

                                    </div>

                                </div>
                                <Link target="_blank" href="https://meugrao.vercel.app"><Button className='w-[100px]' variant={'outline'}>Visitar <ExternalLinkIcon /></Button></Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Image src={'/utask.png'} width={700} height={700} alt='gabriel' />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h1>Sistema de Tarefas Online</h1>
                                    <p className='text-xs text-gray-400'>Feito para compartilhar tarefas entre colegas de trabalho</p>
                                    <div className="flex items-center gap-1">
                                        <Badge>NextJS</Badge>
                                        <Badge>Firebase</Badge>
                                        <Badge>TailwindCSS</Badge>

                                    </div>

                                </div>
                                <Link target="_blank" href="https://utask.vercel.app"><Button className='w-[100px]' variant={'outline'}>Visitar <ExternalLinkIcon /></Button></Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Image src={'/verificador.png'} width={700} height={700} alt='gabriel' />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h1>Verificador de CNPJ</h1>
                                    <div className="flex items-center gap-1">
                                        <Badge>ReactJS</Badge>
                                        <Badge>NextJS</Badge>
                                        <Badge>TailwindCSS</Badge>
                                    </div>

                                </div>
                                <Link target="_blank" href="https://verificarempresa.vercel.app/"><Button className='w-[100px]' variant={'outline'}>Visitar <ExternalLinkIcon /></Button></Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Image src={'/gerador.png'} width={700} height={700} alt='gabriel' />
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h1>Gerador de Ticket para Evento</h1>
                                    <div className="flex items-center gap-1">
                                        <Badge>HTML5</Badge>
                                        <Badge>CSS3</Badge>
                                        <Badge>Javascript</Badge>
                                    </div>

                                </div>
                                <Badge variant={'destructive'}>No Preview</Badge>
                            </div>
                        </div>



                    </div>
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
