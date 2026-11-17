
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Accessibility,
  Ear,
  Eye,
  Hand,
  BookOpen,
  Users,
  Volume2,
  Lightbulb,
} from 'lucide-react';

import modeloTatil from '../assets/images/inclusiva-modelo-tatil.jpg';

const recursos = [
  {
    icon: Eye,
    titulo: 'Acessibilidade visual',
    descricao:
      'Utilização de textos legíveis, bom contraste, organização visual e descrições alternativas para imagens.',
  },
  {
    icon: Ear,
    titulo: 'Acessibilidade auditiva',
    descricao:
      'Uso de legendas e transcrições para ampliar o acesso aos conteúdos audiovisuais.',
  },
  {
    icon: Hand,
    titulo: 'Materiais táteis',
    descricao:
      'Modelos tridimensionais e materiais manipuláveis que permitem explorar conceitos científicos pelo toque.',
  },
  {
    icon: Volume2,
    titulo: 'Recursos sonoros',
    descricao:
      'Áudios e explicações narradas como possibilidades complementares de acesso à informação.',
  },
  {
    icon: BookOpen,
    titulo: 'Linguagem acessível',
    descricao:
      'Explicações organizadas, linguagem clara e diferentes formas de apresentar os conteúdos.',
  },
  {
    icon: Users,
    titulo: 'Participação diversificada',
    descricao:
      'Atividades que consideram diferentes formas de expressão, interação e demonstração da aprendizagem.',
  },
];

export default function Inclusion() {
  return (
    <main>
      {/* ABERTURA */}
      <section className="bg-[#193b2d] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-5 flex items-center gap-3 text-[#b6d394]">
            <Accessibility size={27} />
            <span className="text-xs font-semibold tracking-[3px]">
              EDUCAÇÃO INCLUSIVA
            </span>
          </div>

          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Ciência para todos
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d5e2d8]">
            Diferentes formas de aprender, participar e construir
            conhecimentos. A inclusão amplia as possibilidades de
            ensinar e aprender Ciências e Biologia.
          </p>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              APRENDIZAGEM E DIVERSIDADE
            </span>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#245b43]">
              Diferentes caminhos para construir conhecimento
            </h2>

            <p className="mt-6 leading-8 text-[#68766d]">
              Cada estudante possui características e necessidades
              próprias. Por isso, as práticas pedagógicas podem oferecer
              diferentes recursos e estratégias para favorecer o acesso
              aos conteúdos e a participação nas atividades.
            </p>

            <p className="mt-4 leading-8 text-[#68766d]">
              No ensino de Ciências e Biologia, imagens, modelos,
              experimentações, recursos sonoros e materiais táteis
              podem contribuir para aproximar os estudantes dos
              conhecimentos científicos.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={modeloTatil}
              alt="Modelo didático tátil utilizado como recurso de aprendizagem"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* RECURSOS DE ACESSIBILIDADE */}
      <section className="bg-[#f1f0e9] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              ESTRATÉGIAS PEDAGÓGICAS
            </span>

            <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
              Possibilidades para uma aprendizagem acessível
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#68766d]">
              Conheça alguns recursos que podem ser utilizados para
              diversificar a apresentação dos conteúdos e ampliar
              a participação dos estudantes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recursos.map((recurso) => {
              const Icon = recurso.icon;

              return (
                <article
                  key={recurso.titulo}
                  className="rounded-xl border border-[#e4e2d9] bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#edf3e7] text-[#568044]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-[#245b43]">
                    {recurso.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68766d]">
                    {recurso.descricao}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESTAQUE */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-10 rounded-2xl bg-[#245b43] p-8 md:grid-cols-2 md:p-12">
            <div>
              <div className="flex items-center gap-3 text-[#b6d394]">
                <Lightbulb size={25} />
                <span className="text-xs font-bold tracking-[3px]">
                  INCLUSÃO NA PRÁTICA
                </span>
              </div>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-white">
                A ciência também pode ser explorada pelo toque
              </h2>

              <p className="mt-5 leading-8 text-[#d6e5d9]">
                Modelos táteis e tridimensionais podem representar
                estruturas biológicas e conceitos científicos,
                oferecendo outras possibilidades de exploração
                e construção do conhecimento.
              </p>
            </div>

            <div className="flex min-h-[250px] items-center justify-center rounded-xl bg-white/10 p-6">
              <div className="text-center text-white">
                <Hand size={55} className="mx-auto text-[#b6d394]" />
                <p className="mt-5 font-serif text-2xl">
                  Aprender de diferentes maneiras
                </p>
                <p className="mt-3 text-sm text-[#d6e5d9]">
                  Recursos visuais, sonoros e táteis podem atuar
                  de forma complementar.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex justify-between border-t border-[#e4e2d9] pt-8">
            <Link
              to="/recursos"
              className="font-semibold text-[#568044] hover:text-[#245b43]"
            >
              ← Página anterior
            </Link>

            <Link
              to="/tics"
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
