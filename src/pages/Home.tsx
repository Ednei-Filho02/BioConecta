
import { Link } from 'react-router-dom';
import {
  Microscope,
  GraduationCap,
  Laptop,
  HeartHandshake,
  ArrowRight,
  Clock,
} from 'lucide-react';

import hero from '../assets/images/hero-microorganismos.jpg';
import extremofilos from '../assets/images/extremofilos-fonte-termal.jpg';
import plano from '../assets/images/plano-devoradores-de-estrelas.jpg';
import curiosidades from '../assets/images/curiosidades-placas-de-petri.jpg';

const pilares = [
  {
    icon: Microscope,
    title: 'Ciência',
    description: 'Descobertas, conhecimentos científicos e curiosidades sobre a vida.',
    path: '/ciencia',
  },
  {
    icon: GraduationCap,
    title: 'Educação',
    description: 'Práticas pedagógicas e novas formas de ensinar e aprender.',
    path: '/praticas',
  },
  {
    icon: Laptop,
    title: 'Tecnologia',
    description: 'Recursos digitais e ferramentas para transformar a aprendizagem.',
    path: '/recursos',
  },
  {
    icon: HeartHandshake,
    title: 'Inclusão',
    description: 'Possibilidades para uma educação acessível e participativa.',
    path: '/inclusao',
  },
];

const artigos = [
  {
    category: 'MICROBIOLOGIA',
    title: 'Organismos extremófilos: a vida nos ambientes extremos',
    description: 'Conheça os organismos capazes de sobreviver em condições ambientais extremas.',
    image: extremofilos,
    time: '6 min de leitura',
    path: '/ciencia',
  },
  {
    category: 'PRÁTICAS PEDAGÓGICAS',
    title: 'Microrganismos e sobrevivência em condições extremas',
    description: 'Uma proposta de ensino de Biologia a partir do filme Devoradores de Estrelas.',
    image: plano,
    time: 'Plano de aula',
    path: '/praticas',
  },
  {
    category: 'CURIOSIDADES',
    title: 'Um universo invisível: curiosidades sobre a Microbiologia',
    description: 'Descubra um pouco mais sobre o fascinante mundo dos microrganismos.',
    image: curiosidades,
    time: '5 min de leitura',
    path: '/ciencia',
  },
];

export default function Home() {
  return (
    <main>
      {/* BANNER PRINCIPAL */}
      <section
        className="relative flex min-h-[580px] items-center bg-[#153d2d] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-[#102f24]/75" />

        <div className="relative mx-auto w-full max-w-[1200px] px-8 py-24">
          <span className="mb-6 inline-block rounded-full border border-[#a8c98a]/40 bg-white/10 px-5 py-2 text-xs font-semibold tracking-[3px] text-[#c5dfa8]">
            CIÊNCIA • EDUCAÇÃO • TECNOLOGIA
          </span>

          <h1 className="max-w-[800px] font-serif text-5xl leading-tight text-white md:text-7xl">
            A ciência está em todo lugar.
            <span className="block text-[#a8ca83]">
              Vamos descobrir juntos?
            </span>
          </h1>

          <p className="mt-7 max-w-[650px] text-lg leading-8 text-[#e1e9e2]">
            Um espaço dedicado à divulgação científica e à construção de
            novas possibilidades para o ensino e a aprendizagem de Ciências
            e Biologia.
          </p>

          <Link
            to="/ciencia"
            className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#8dbb62] px-7 py-4 font-semibold text-[#193b2d] transition hover:bg-[#a5ce7d]"
          >
            Explorar conteúdos <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-[#faf9f5] px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 text-center">
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              NOSSA PROPOSTA
            </span>
            <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
              Conhecimento que conecta
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#68766d]">
              Quatro pilares que orientam nossa proposta de aproximar
              ciência, educação e tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilares.map((pilar) => {
              const Icon = pilar.icon;

              return (
                <Link
                  key={pilar.title}
                  to={pilar.path}
                  className="group block rounded-xl border border-[#e8e6dc] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#b6d394] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#568044]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#edf3e7] text-[#568044] transition group-hover:bg-[#e2ecd8]">
                    <Icon size={29} />
                  </div>

                  <h3 className="font-serif text-2xl text-[#245b43]">
                    {pilar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68766d]">
                    {pilar.description}
                  </p>

                  <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#568044]">
                    Conhecer mais
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTEÚDOS EM DESTAQUE */}
      <section className="bg-[#f1f0e9] px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
                EXPLORE O CONHECIMENTO
              </span>
              <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
                Conteúdos em destaque
              </h2>
            </div>

            <Link
              to="/ciencia"
              className="flex items-center gap-2 font-semibold text-[#568044] hover:text-[#245b43]"
            >
              Ver conteúdos <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {artigos.map((artigo) => (
              <Link
                to={artigo.path}
                key={artigo.title}
                className="group overflow-hidden rounded-xl border border-[#e4e2d9] bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={artigo.image}
                    alt={artigo.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <span className="text-[10px] font-bold tracking-[2px] text-[#80a95c]">
                    {artigo.category}
                  </span>

                  <h3 className="mt-3 font-serif text-2xl leading-snug text-[#245b43]">
                    {artigo.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68766d]">
                    {artigo.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#eeede6] pt-5">
                    <span className="flex items-center gap-2 text-xs text-[#89938b]">
                      <Clock size={14} /> {artigo.time}
                    </span>

                    <span className="text-[#568044]">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA PARA A PRÓXIMA PÁGINA */}
      <section className="bg-[#245b43] px-6 py-20 text-center">
        <span className="text-xs font-bold tracking-[3px] text-[#b6d394]">
          CONHEÇA O BIOCONECTA
        </span>

        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
          Ciência, educação e tecnologia em conexão.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#d6e5d9]">
          Descubra nossa proposta e conheça o espaço que reúne conhecimentos
          científicos, práticas pedagógicas, recursos digitais e inclusão.
        </p>

        <Link
          to="/sobre"
          className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#a4c77d] px-7 py-4 font-semibold text-[#193b2d] transition hover:bg-[#b9d797]"
        >
          Conheça o BioConecta <ArrowRight size={19} />
        </Link>
      </section>
    </main>
  );
}
