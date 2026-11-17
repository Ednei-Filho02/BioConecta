
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Microscope,
  GraduationCap,
  Laptop,
  HeartHandshake,
  Lightbulb,
} from 'lucide-react';

import sobre from '../assets/images/sobre-caderno-cientifico.jpg';

const pilares = [
  {
    icon: Microscope,
    titulo: 'Ciência',
    descricao:
      'Valorização do conhecimento científico, da curiosidade e da descoberta.',
  },
  {
    icon: GraduationCap,
    titulo: 'Educação',
    descricao:
      'Construção de novas possibilidades para ensinar e aprender Ciências e Biologia.',
  },
  {
    icon: Laptop,
    titulo: 'Tecnologia',
    descricao:
      'Exploração de recursos digitais como apoio às práticas educativas.',
  },
  {
    icon: HeartHandshake,
    titulo: 'Inclusão',
    descricao:
      'Reconhecimento das diferentes formas de aprender e participar.',
  },
];

export default function About() {
  return (
    <main>
      {/* ABERTURA */}
      <section className="bg-[#193b2d] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1200px]">
          <span className="text-xs font-semibold tracking-[3px] text-[#b6d394]">
            SOBRE O BIOCONECTA
          </span>

          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Conectando a ciência a diferentes formas de aprender.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d5e2d8]">
            Um espaço dedicado à aproximação entre ciência,
            educação e tecnologia.
          </p>
        </div>
      </section>

      {/* NOSSA HISTÓRIA */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              NOSSA PROPOSTA
            </span>

            <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
              O que é o BioConecta?
            </h2>

            <p className="mt-6 leading-8 text-[#68766d]">
              O BioConecta nasceu da proposta de aproximar ciência,
              educação e tecnologia, explorando diferentes possibilidades
              de ensinar e aprender Ciências e Biologia.
            </p>

            <p className="mt-4 leading-8 text-[#68766d]">
              O espaço reúne conhecimentos científicos, recursos digitais,
              práticas pedagógicas e propostas inclusivas, valorizando
              a curiosidade, a participação e a construção do conhecimento.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={sobre}
              alt="Caderno científico representando estudo e construção do conhecimento"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OBJETIVO */}
      <section className="bg-[#f1f0e9] px-6 py-20">
        <div className="mx-auto max-w-[1000px] text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e2ecd8] text-[#568044]">
            <Lightbulb size={32} />
          </div>

          <span className="mt-6 block text-xs font-bold tracking-[3px] text-[#80a95c]">
            NOSSO PROPÓSITO
          </span>

          <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
            Conhecimento que transforma
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#68766d]">
            Promover o contato com conhecimentos científicos e apresentar
            possibilidades pedagógicas que integrem recursos tecnológicos
            e práticas inclusivas ao ensino e à aprendizagem de Ciências
            e Biologia.
          </p>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              O QUE NOS CONECTA
            </span>

            <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
              Os pilares do BioConecta
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pilares.map((pilar) => {
              const Icon = pilar.icon;

              return (
                <article
                  key={pilar.titulo}
                  className="rounded-xl border border-[#e8e6dc] bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#edf3e7] text-[#568044]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-[#245b43]">
                    {pilar.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68766d]">
                    {pilar.descricao}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENCERRAMENTO */}
      <section className="bg-[#245b43] px-6 py-20 text-center">
        <h2 className="font-serif text-4xl text-white">
          Vamos descobrir juntos?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#d6e5d9]">
          Explore nossos conteúdos, conheça práticas pedagógicas
          e descubra novas possibilidades para o ensino de Ciências
          e Biologia.
        </p>

        <Link
          to="/ciencia"
          className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#a4c77d] px-7 py-4 font-semibold text-[#193b2d] transition hover:bg-[#b9d797]"
        >
          Explorar conteúdos <ArrowRight size={19} />
        </Link>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-[#f1f0e9] px-6 py-8">
        <div className="mx-auto flex max-w-[1200px] justify-between border-t border-[#deddd3] pt-8">
          <Link
            to="/"
            className="font-semibold text-[#568044] hover:text-[#245b43]"
          >
            ← Página inicial
          </Link>

          <Link
            to="/ciencia"
            className="flex items-center gap-2 font-semibold text-[#568044] hover:text-[#245b43]"
          >
            Próxima página <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
