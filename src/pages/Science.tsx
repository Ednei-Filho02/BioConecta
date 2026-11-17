
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Microscope } from 'lucide-react';

import fonteHidrotermal from '../assets/images/ambientes-extremos-fonte-hidrotermal.jpg';
import extremofilos from '../assets/images/extremofilos-fonte-termal.jpg';
import curiosidades from '../assets/images/curiosidades-placas-de-petri.jpg';

const conteudos = [
  {
    categoria: 'MICROBIOLOGIA',
    titulo: 'A diversidade dos microrganismos',
    descricao:
      'Conheça a diversidade dos seres microscópicos e sua importância para a vida.',
    imagem: curiosidades,
    leitura: '5 min de leitura',
  },
  {
    categoria: 'BIOLOGIA',
    titulo: 'A vida em ambientes extremos',
    descricao:
      'Explore ambientes com condições extremas e as possibilidades de vida nesses locais.',
    imagem: fonteHidrotermal,
    leitura: '7 min de leitura',
  },
  {
    categoria: 'CURIOSIDADES',
    titulo: 'Organismos extremófilos',
    descricao:
      'Descubra organismos que conseguem viver em condições ambientais extremas.',
    imagem: extremofilos,
    leitura: '6 min de leitura',
  },
];

export default function Science() {
  return (
    <main>
      {/* ABERTURA DA PÁGINA */}
      <section className="bg-[#193b2d] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-5 flex items-center gap-3 text-[#b6d394]">
            <Microscope size={25} />
            <span className="text-xs font-semibold tracking-[3px]">
              CIÊNCIA E BIOLOGIA
            </span>
          </div>

          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            Descobrindo a vida em suas diferentes formas
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d5e2d8]">
            Um espaço para explorar conhecimentos científicos, conhecer
            a diversidade da vida e despertar a curiosidade sobre o mundo
            que nos cerca.
          </p>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
              DESTAQUE
            </span>
            <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
              A vida em ambientes extremos
            </h2>
          </div>

          <article className="grid overflow-hidden rounded-2xl border border-[#e8e6dc] bg-white md:grid-cols-2">
            <div className="min-h-[320px]">
              <img
                src={fonteHidrotermal}
                alt="Ambiente de fonte hidrotermal no fundo do oceano"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="text-xs font-bold tracking-[2px] text-[#80a95c]">
                ORGANISMOS EXTREMÓFILOS
              </span>

              <h3 className="mt-4 font-serif text-3xl leading-snug text-[#245b43]">
                Como a vida consegue existir em condições extremas?
              </h3>

              <p className="mt-5 leading-8 text-[#68766d]">
                Existem ambientes com temperaturas, pressões e condições
                químicas muito diferentes daquelas que encontramos no
                cotidiano. Estudar esses locais amplia nossa compreensão
                sobre a diversidade e os limites da vida.
              </p>

              <div className="mt-7 flex items-center gap-2 text-sm text-[#89938b]">
                <Clock size={16} />
                7 min de leitura
              </div>

              <button
                type="button"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-md bg-[#245b43] px-6 py-3 font-semibold text-white transition hover:bg-[#193b2d]"
              >
                Explorar conteúdo <ArrowRight size={18} />
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* OUTROS TEMAS */}
      <section className="bg-[#f1f0e9] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
            EXPLORE
          </span>

          <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
            Outros temas
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#68766d]">
            Conheça outros assuntos relacionados à Microbiologia e à
            diversidade dos seres vivos.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {conteudos.map((item) => (
              <article
                key={item.titulo}
                className="overflow-hidden rounded-xl border border-[#e4e2d9] bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <span className="text-[10px] font-bold tracking-[2px] text-[#80a95c]">
                    {item.categoria}
                  </span>

                  <h3 className="mt-3 font-serif text-2xl text-[#245b43]">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68766d]">
                    {item.descricao}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#eeede6] pt-5">
                    <span className="flex items-center gap-2 text-xs text-[#89938b]">
                      <Clock size={14} />
                      {item.leitura}
                    </span>

                    <span className="text-[#568044]">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 flex justify-between border-t border-[#deddd3] pt-8">
            <Link
              to="/sobre"
              className="font-semibold text-[#568044] hover:text-[#245b43]"
            >
              ← Página anterior
            </Link>

            <Link
              to="/praticas"
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
