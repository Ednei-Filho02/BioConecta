
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Laptop,
  BrainCircuit,
  Users,
  Video,
  Accessibility,
  Lightbulb,
  GraduationCap,
} from 'lucide-react';

import tecnologia from '../assets/images/tics-microscopio-digital.jpg';

const temas = [
  {
    icon: Laptop,
    titulo: 'Tecnologias digitais no ensino',
    descricao:
      'Computadores, dispositivos móveis e plataformas digitais podem ampliar as possibilidades de acesso à informação e apoiar as atividades pedagógicas.',
  },
  {
    icon: BrainCircuit,
    titulo: 'Inteligência artificial na educação',
    descricao:
      'Ferramentas de inteligência artificial podem auxiliar na pesquisa, elaboração de atividades e organização de conteúdos, exigindo análise crítica e responsabilidade.',
  },
  {
    icon: Users,
    titulo: 'Metodologias ativas',
    descricao:
      'Estratégias que incentivam a participação dos estudantes, a investigação, a colaboração e a construção do conhecimento.',
  },
  {
    icon: Video,
    titulo: 'Recursos audiovisuais',
    descricao:
      'Vídeos, animações e documentários podem complementar as explicações e aproximar conceitos científicos da realidade dos estudantes.',
  },
  {
    icon: Accessibility,
    titulo: 'Inclusão e acessibilidade digital',
    descricao:
      'Recursos tecnológicos podem oferecer diferentes formas de acesso aos conteúdos, desde que planejados considerando as necessidades dos estudantes.',
  },
  {
    icon: Lightbulb,
    titulo: 'Possibilidades e desafios',
    descricao:
      'O uso das tecnologias envolve oportunidades de inovação, mas também exige atenção à infraestrutura, formação docente e desigualdade de acesso.',
  },
];

export default function Tics() {
  return (
    <main>
      {/* ABERTURA */}
      <section className="bg-[#193b2d] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-5 flex items-center gap-3 text-[#b6d394]">
            <Laptop size={27} />
            <span className="text-xs font-semibold tracking-[3px]">
              TICs E EDUCAÇÃO
            </span>
          </div>

          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Conectando tecnologia e aprendizagem
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d5e2d8]">
            As Tecnologias da Informação e Comunicação transformam
            possibilidades de ensinar, aprender, pesquisar e compartilhar
            conhecimentos.
          </p>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              EDUCAÇÃO E TRANSFORMAÇÃO
            </span>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#245b43]">
              Novas possibilidades para o ensino de Ciências e Biologia
            </h2>

            <p className="mt-6 leading-8 text-[#68766d]">
              As tecnologias digitais oferecem diferentes recursos
              para apoiar o trabalho pedagógico. Simulações, vídeos,
              plataformas educativas e ferramentas de pesquisa podem
              enriquecer o contato dos estudantes com os conhecimentos
              científicos.
            </p>

            <p className="mt-4 leading-8 text-[#68766d]">
              Entretanto, a tecnologia não substitui o planejamento
              pedagógico. Seu uso precisa estar relacionado aos objetivos
              de aprendizagem e às características do contexto escolar.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={tecnologia}
              alt="Microscópio digital utilizado como recurso tecnológico no ensino de Ciências"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TEMAS */}
      <section className="bg-[#f1f0e9] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              PRINCIPAIS TEMAS
            </span>

            <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
              Tecnologia na prática educativa
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#68766d]">
              Alguns aspectos importantes para compreender as relações
              entre tecnologia, educação e aprendizagem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {temas.map((tema) => {
              const Icon = tema.icon;

              return (
                <article
                  key={tema.titulo}
                  className="rounded-xl border border-[#e4e2d9] bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#edf3e7] text-[#568044]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-[#245b43]">
                    {tema.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68766d]">
                    {tema.descricao}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REFLEXÃO FINAL */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-2xl bg-[#245b43] px-8 py-14 text-center md:px-16">
            <GraduationCap
              size={42}
              className="mx-auto text-[#b6d394]"
            />

            <h2 className="mt-6 font-serif text-3xl text-white md:text-4xl">
              A tecnologia faz sentido quando aproxima pessoas e conhecimento.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#d6e5d9]">
              Mais do que utilizar ferramentas digitais, integrar
              tecnologia à educação significa criar experiências
              de aprendizagem significativas, críticas e participativas.
            </p>

            <Link
              to="/"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#a4c77d] px-7 py-4 font-semibold text-[#193b2d] transition hover:bg-[#b9d797]"
            >
              Voltar ao início <ArrowRight size={19} />
            </Link>
          </div>

          <div className="mt-14 flex justify-between border-t border-[#e4e2d9] pt-8">
            <Link
              to="/inclusao"
              className="font-semibold text-[#568044] hover:text-[#245b43]"
            >
              ← Página anterior
            </Link>

            <Link
              to="/"
              className="font-semibold text-[#568044] hover:text-[#245b43]"
            >
              Página inicial →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
