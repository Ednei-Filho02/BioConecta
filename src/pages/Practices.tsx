
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  GraduationCap,
  Target,
  Clock,
} from 'lucide-react';

import plano from '../assets/images/plano-devoradores-de-estrelas.jpg';

const momentos = [
  {
    numero: '01',
    titulo: 'Levantamento dos conhecimentos prévios',
    descricao:
      'Preparação para a exibição, identificando os conhecimentos que os estudantes já possuem sobre microrganismos e ambientes extremos.',
  },
  {
    numero: '02',
    titulo: 'Exibição e leitura audiovisual',
    descricao:
      'Exibição e leitura em conjunto do trecho audiovisual selecionado do filme Devoradores de Estrelas.',
  },
  {
    numero: '03',
    titulo: 'Sistematização dos conteúdos',
    descricao:
      'Discussão e organização dos conhecimentos relacionados ao metabolismo e aos microrganismos extremófilos.',
  },
  {
    numero: '04',
    titulo: 'Socialização, síntese e avaliação',
    descricao:
      'Compartilhamento das ideias construídas pelos estudantes, retomada dos conteúdos e avaliação da aprendizagem.',
  },
];

export default function Practices() {
  return (
    <main>
      {/* ABERTURA */}
      <section className="bg-[#193b2d] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-5 flex items-center gap-3 text-[#b6d394]">
            <GraduationCap size={26} />
            <span className="text-xs font-semibold tracking-[3px]">
              PRÁTICAS PEDAGÓGICAS
            </span>
          </div>

          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Da ciência à sala de aula
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d5e2d8]">
            Propostas e experiências pedagógicas que aproximam os
            conhecimentos científicos de diferentes possibilidades
            de ensinar e aprender.
          </p>
        </div>
      </section>

      {/* PLANO DE AULA EM DESTAQUE */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              PLANO DE AULA EM DESTAQUE
            </span>
            <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
              Ciência, cinema e aprendizagem
            </h2>
          </div>

          <article className="grid overflow-hidden rounded-2xl border border-[#e8e6dc] bg-white md:grid-cols-2">
            <div className="min-h-[350px]">
              <img
                src={plano}
                alt="Imagem ilustrativa do plano de aula sobre Devoradores de Estrelas"
                className="h-full min-h-[350px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="text-xs font-bold tracking-[2px] text-[#80a95c]">
                BIOLOGIA • ENSINO MÉDIO
              </span>

              <h3 className="mt-4 font-serif text-3xl leading-snug text-[#245b43]">
                Microrganismos e sobrevivência em condições extremas
              </h3>

              <p className="mt-5 leading-8 text-[#68766d]">
                Uma abordagem pedagógica a partir do filme
                Devoradores de Estrelas, explorando relações entre
                metabolismo, microrganismos e condições extremas de vida.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#f1f4ed] p-4">
                  <span className="text-xs text-[#68766d]">Turma</span>
                  <p className="mt-1 font-semibold text-[#245b43]">
                    2º ano do Ensino Médio
                  </p>
                </div>

                <div className="rounded-lg bg-[#f1f4ed] p-4">
                  <span className="text-xs text-[#68766d]">Habilidade BNCC</span>
                  <p className="mt-1 font-semibold text-[#245b43]">
                    EM13CNT202
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-md bg-[#245b43] px-6 py-3 font-semibold text-white transition hover:bg-[#193b2d]"
              >
                Ver plano completo <ArrowRight size={18} />
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* ORGANIZAÇÃO DA AULA */}
      <section className="bg-[#f1f0e9] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              DESENVOLVIMENTO
            </span>
            <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
              Os quatro momentos da aula
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#68766d]">
              A proposta organiza o desenvolvimento da aula em quatro
              momentos, desde a preparação até a socialização e avaliação.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {momentos.map((momento) => (
              <article
                key={momento.numero}
                className="rounded-xl border border-[#e4e2d9] bg-white p-8"
              >
                <span className="font-serif text-4xl text-[#a4c77d]">
                  {momento.numero}
                </span>

                <h3 className="mt-4 font-serif text-2xl text-[#245b43]">
                  {momento.titulo}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#68766d]">
                  {momento.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ELEMENTOS DO PLANEJAMENTO */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              PLANEJAMENTO PEDAGÓGICO
            </span>
            <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
              Organização da proposta
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ClipboardList,
                title: 'Identificação',
                description: 'Dados gerais e caracterização da aula.',
              },
              {
                icon: Target,
                title: 'Objetivos',
                description: 'Objetivos gerais e específicos de aprendizagem.',
              },
              {
                icon: BookOpen,
                title: 'Conteúdos',
                description: 'Conhecimentos científicos trabalhados na proposta.',
              },
              {
                icon: Clock,
                title: 'Avaliação',
                description: 'Acompanhamento e avaliação da aprendizagem.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#e8e6dc] bg-white p-7"
                >
                  <Icon size={28} className="text-[#80a95c]" />
                  <h3 className="mt-5 font-serif text-xl text-[#245b43]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#68766d]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-[#f1f0e9] px-6 py-8">
        <div className="mx-auto flex max-w-[1200px] justify-between border-t border-[#deddd3] pt-8">
          <Link
            to="/ciencia"
            className="font-semibold text-[#568044] hover:text-[#245b43]"
          >
            ← Página anterior
          </Link>

          <Link
            to="/recursos"
            className="flex items-center gap-2 font-semibold text-[#568044] hover:text-[#245b43]"
          >
            Próxima página <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
