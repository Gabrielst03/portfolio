export function Timeline() {
    return (
        <>

            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Janeiro de 2019</time>
                    <h3 className="text-lg font-semibold text-zinc-100 dark:text-white">Primeiro contato com a programação</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Realizei o desenvolvimento de um aplicativo para controle de diabetes na feira de ciências do colégio no início do curso técnico.</p>
                    <p className="mb-4 text-base font-normal text-yellow-400">Colégio Estadual Edvaldo Fernandes - Salvador/BA</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Junho de 2021</time>
                    <h3 className="text-lg font-semibold text-zinc-100 dark:text-white">Estágio em Manutenção e Suporte em Informática</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Primeira experiência profissional, através do Curso Técnico em Manutenção e Suporte em Informática</p>
                    <p className="mb-4 text-base font-normal text-yellow-400">1ClickTI - Salvador/BA</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Setembro de 2021</time>
                    <h3 className="text-lg font-semibold text-zinc-100 dark:text-white">Estágio em Desenvolvimento Web</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Migrei da área de manutenção para a área de Desenvolvimento Web na mesma empresa.</p>
                    <p className="mb-4 text-base font-normal text-yellow-400">1ClickTI - Salvador/BA</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Março de 2023</time>
                    <h3 className="text-lg font-semibold text-zinc-100 dark:text-white">Desenvolvedor Full-Stack Web Freelancer</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Comecei a trabalhar no Modelo Freelancer desenvolvendo sistemas full-stacks por demanda.</p>
                    <p className="mb-4 text-base font-normal text-yellow-400">Freelancer - 100% Remoto</p>
                </li>

            </ol>

        </>
    )
}