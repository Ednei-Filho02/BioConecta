
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  MonitorSmartphone,
  Microscope,
  Lightbulb,
} from 'lucide-react';

import sobre from '../assets/images/sobre-caderno-cientifico.jpg';

const objetivos = [
  {
    numero: '01',
    titulo: 'Divulgar conhecimentos científicos',
    descricao:
      'Compartilhar conteúdos de Ciências e Biologia com linguagem acessível e embasamento em referências confiáveis.',
  },
  {
    numero: '02',
    titulo: 'Compartilhar práticas pedagógicas',
    descricao:
      'Apresentar planos de aula e propostas didáticas que possam inspirar professores em formação e em atuação.',
  },
  {
    numero: '03',
    titulo: 'Explorar recursos digitais',
    descricao:
      'Mostrar como ferramentas tecnológicas podem ser integradas ao ensino com intenção pedagógica.',
  },
  {
    numero: '04',
    titulo: 'Promover a educação inclusiva',
    descricao:
      'Pensar diferentes formas de acesso, participação e expressão do conhecimento científico.',
  },
  {
    numero: '05',
    titulo: 'Valorizar a curiosidade',
    descricao:
      'Estimular perguntas, investigação e pensamento crítico sobre a ciência e suas representações.',
  },
  {
    numero: '06',
    titulo: 'Favorecer a participação',
    descricao:
      'Incentivar atividades interativas em que os estudantes participam da construção do conhecimento.',
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#fafaf7]">

      {/* Hero */}
      <section className="relative bg-[#193b2d] px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b6d394]/30 bg-[#b6d394]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9dfa9]">
              <Microscope size={15} />
              Conheça o projeto
            </span>

            <h1 className="mt-7 max-w-xl font-serif text-5xl leading-[1.12] md:text-6xl">
              Sobre o
              <span className="block text-[#b6d394]">BioConecta</span>
            </h1>

            <div className="my-7 h-1 w-16 rounded-full bg-[#b6d394]" />

            <p className="max-w-xl text-base leading-8 text-[#e0e9e2] md:text-lg">
              Conectando a ciência a diferentes formas de aprender.
              Um espaço dedicado à divulgação científica e à construção
              de novas possibilidades para o ensino e a aprendizagem.
            </p>

            <Link
              to="/ciencia"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#b6d394] px-7 py-3.5 text-sm font-bold text-[#193b2d] transition-all hover:-translate-y-1 hover:bg-white"
            >
              Explorar conteúdos
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl border border-[#b6d394]/40" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={sobre}
                alt="Caderno científico aberto com anotações e elementos relacionados à ciência"
                className="h-[300px] w-full object-cover md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#193b2d]/40 to-transparent" />
            </div>

            <div className="absolute -bottom-7 right-5 rounded-2xl bg-white px-5 py-4 shadow-xl md:right-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#66845c]">
                Nossa essência
              </p>
              <p className="mt-1 font-serif text-lg text-[#193b2d]">
                Ciência para todos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#66845c]">
              Nossa história
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#193b2d] md:text-4xl">
              Como surgiu o BioConecta?
            </h2>

            <div className="mt-6 h-1 w-14 rounded-full bg-[#b6d394]" />
          </div>

          <div className="border-l-2 border-[#dce8d3] pl-6 md:pl-10">
            <p className="text-base leading-9 text-[#52635a] md:text-lg">
              O BioConecta nasceu da proposta de aproximar ciência, educação
              e tecnologia, explorando diferentes possibilidades de ensinar
              e aprender Ciências e Biologia. O espaço reúne conhecimentos
              científicos, recursos digitais, práticas pedagógicas e propostas
              inclusivas, valorizando a curiosidade, a participação e a
              construção do conhecimento.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa proposta */}
      <section className="bg-[#eef2e9] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 md:grid-cols-2 md:gap-20">
          <div className="order-2 md:order-1">
            <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
              <Lightbulb size={38} className="mb-6 text-[#66845c]" />

              <p className="font-serif text-2xl leading-relaxed text-[#193b2d] md:text-3xl">
                A ciência também se constrói por meio da curiosidade,
                da troca de experiências e da descoberta.
              </p>

              <div className="mt-7 h-1 w-16 rounded-full bg-[#b6d394]" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#66845c]">
              Nossa proposta
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#193b2d] md:text-4xl">
              Por que o BioConecta?
            </h2>

            <p className="mt-6 text-base leading-8 text-[#52635a]">
              Acreditamos que a ciência pode ser apresentada de diferentes
              maneiras, tornando-se mais próxima da realidade dos estudantes.
              Por isso, buscamos reunir conteúdos, experiências e ferramentas
              que contribuam para uma aprendizagem mais dinâmica, significativa
              e participativa.
            </p>
          </div>
        </div>
      </section>

      {/* Objetivos do projeto */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-block rounded-full bg-[#e8efdf] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#52764b]">
              Objetivos do projeto
            </span>

            <h2 className="mt-5 font-serif text-3xl text-[#193b2d] md:text-5xl">
              O que buscamos construir
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#64736a]">
              O BioConecta busca aproximar ciência, educação e tecnologia
              por meio de diferentes possibilidades de ensinar, aprender
              e compartilhar conhecimentos.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {objetivos.map((objetivo) => (
              <article
                key={objetivo.numero}
                className="group relative overflow-hidden rounded-2xl border border-[#e5e9df] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b6d394] hover:shadow-xl hover:shadow-[#193b2d]/5 md:p-8"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#f2f5ed] transition-colors group-hover:bg-[#e8efdf]" />

                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8efdf] font-bold text-[#52764b] transition-colors group-hover:bg-[#193b2d] group-hover:text-white">
                    {objetivo.numero}
                  </span>

                  <h3 className="mt-6 font-serif text-xl leading-snug text-[#193b2d] md:text-2xl">
                    {objetivo.titulo}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#64736a]">
                    {objetivo.descricao}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-[#b6d394] transition-all duration-300 group-hover:w-16" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O blog como prática de TICs */}
      <section className="relative overflow-hidden bg-[#193b2d] px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b6d394]">
              Tecnologia e educação
            </span>

            <h2 className="mt-5 font-serif text-3xl leading-tight md:text-5xl">
              O blog também é uma prática de
              <span className="text-[#b6d394]"> TICs</span>
            </h2>

            <div className="my-7 h-1 w-16 rounded-full bg-[#b6d394]" />

            <p className="text-base leading-8 text-[#d1ded5]">
              Além de compartilhar conteúdos sobre ciência e educação,
              o próprio BioConecta representa uma possibilidade de
              utilização das Tecnologias da Informação e Comunicação
              no contexto educacional.
            </p>

            <p className="mt-5 text-base leading-8 text-[#d1ded5]">
              A criação e a utilização de ambientes digitais permitem
              explorar novas formas de organizar informações, compartilhar
              conhecimentos e ampliar as possibilidades de interação
              e aprendizagem.
            </p>
          </div>

          <div className="grid gap-5">
            <Link
              to="/tics"
              className="group rounded-2xl bg-white p-7 text-[#193b2d] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1f5eb] md:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8efdf] text-[#52764b]">
                    <BookOpen size={25} />
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl">
                    Reflexões sobre TICs e Educação
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#64736a]">
                    Conheça reflexões sobre o papel das tecnologias
                    digitais nos processos educativos.
                  </p>
                </div>

                <ArrowRight
                  className="mt-2 shrink-0 text-[#66845c] transition-transform group-hover:translate-x-2"
                  size={23}
                />
              </div>
            </Link>

            <Link
              to="/recursos"
              className="group rounded-2xl bg-white p-7 text-[#193b2d] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#f1f5eb] md:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8efdf] text-[#52764b]">
                    <MonitorSmartphone size={25} />
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl">
                    Recursos digitais para aprender
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#64736a]">
                    Explore ferramentas e recursos que podem contribuir
                    para o ensino de Ciências e Biologia.
                  </p>
                </div>

                <ArrowRight
                  className="mt-2 shrink-0 text-[#66845c] transition-transform group-hover:translate-x-2"
                  size={23}
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      
      
      {/* Navegação */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex justify-between border-t border-[#e4e2d9] pt-8">
            <Link
              to="/"
              className="font-semibold text-[#568044] hover:text-[#245b43]"
            >
              ← Página anterior
            </Link>

            <Link
              to="/ciencia"
              className="flex items-center gap-2 font-semibold text-[#568044] hover:text-[#245b43]"
            >
              Próxima página <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
