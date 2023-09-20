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
            className={`flex min-h-screen flex-col px-12 md:px-96 md:py-16 py-6 ${inter.className}`}
        >

            <Header />


            <div className='flex flex-col md:flex-row justify-between w-full gap-10 md:gap-20 mt-20'>

                <Timeline />

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
