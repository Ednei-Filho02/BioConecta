
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Palette,
  Gamepad2,
  Video,
  BrainCircuit,
  ClipboardList,
  Presentation,
  ExternalLink,
} from 'lucide-react';

const ferramentas = [
  {
    nome: 'Wordwall',
    categoria: 'Jogos educativos',
    descricao:
      'Criação de atividades interativas, questionários, associações e jogos para revisar conteúdos.',
    icon: Gamepad2,
    cor: 'bg-[#edf3e7]',
  },
  {
    nome: 'Kahoot!',
    categoria: 'Aprendizagem interativa',
    descricao:
      'Questionários e desafios que estimulam a participação dos estudantes.',
    icon: BrainCircuit,
    cor: 'bg-[#f5eddf]',
  },
  {
    nome: 'Canva',
    categoria: 'Criação visual',
    descricao:
      'Produção de apresentações, infográficos, cartazes e materiais didáticos.',
    icon: Palette,
    cor: 'bg-[#e9f0f5]',
  },
  {
    nome: 'YouTube',
    categoria: 'Recursos audiovisuais',
    descricao:
      'Utilização de vídeos, documentários e materiais audiovisuais como apoio às aulas.',
    icon: Video,
    cor: 'bg-[#f5e9e7]',
  },
  {
    nome: 'Google Forms',
    categoria: 'Atividades e avaliações',
    descricao:
      'Elaboração de formulários, questionários e instrumentos de acompanhamento da aprendizagem.',
    icon: ClipboardList,
    cor: 'bg-[#edf0f7]',
  },
  {
    nome: 'Inteligência Artificial',
    categoria: 'Tecnologia educacional',
    descricao:
      'Ferramentas de IA podem auxiliar na elaboração de atividades, organização de conteúdos e criação de materiais, com avaliação crítica das respostas.',
    icon: BrainCircuit,
    cor: 'bg-[#f1eaf5]',
  },
];

export default function Resources() {
  return (
    <main>
      {/* ABERTURA */}
      <section className="bg-[#193b2d] px-6 py-20 text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-5 flex items-center gap-3 text-[#b6d394]">
            <Presentation size={26} />
            <span className="text-xs font-semibold tracking-[3px]">
              RECURSOS DIGITAIS
            </span>
          </div>

          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
            A tecnologia como aliada da aprendizagem
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d5e2d8]">
            Conheça ferramentas digitais que podem enriquecer as práticas
            pedagógicas e criar novas possibilidades para o ensino de
            Ciências e Biologia.
          </p>
        </div>
      </section>

      {/* FERRAMENTAS */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
            CONHEÇA AS FERRAMENTAS
          </span>

          <h2 className="mt-3 font-serif text-4xl text-[#245b43]">
            Recursos para ensinar e aprender
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#68766d]">
            Diferentes recursos podem apoiar a criação de experiências
            educativas mais dinâmicas, criativas e participativas.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ferramentas.map((ferramenta) => {
              const Icon = ferramenta.icon;

              return (
                <article
                  key={ferramenta.nome}
                  className="rounded-xl border border-[#e8e6dc] bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${ferramenta.cor} text-[#568044]`}
                  >
                    <Icon size={28} />
                  </div>

                  <span className="mt-6 block text-[10px] font-bold tracking-[2px] text-[#80a95c]">
                    {ferramenta.categoria.toUpperCase()}
                  </span>

                  <h3 className="mt-3 font-serif text-2xl text-[#245b43]">
                    {ferramenta.nome}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68766d]">
                    {ferramenta.descricao}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APRENDA BRINCANDO */}
      <section className="bg-[#f1f0e9] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold tracking-[3px] text-[#80a95c]">
                APRENDA BRINCANDO
              </span>

              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#245b43]">
                Desafio dos Extremófilos
              </h2>

              <p className="mt-5 leading-8 text-[#68766d]">
                Quem consegue sobreviver? Explore o universo dos organismos
                extremófilos por meio de uma atividade interativa que
                relaciona os conhecimentos sobre microrganismos e ambientes
                extremos.
              </p>

              <div className="mt-7 flex items-center gap-3 text-sm text-[#568044]">
                <Gamepad2 size={21} />
                <span className="font-semibold">
                  Atividade interativa • Wordwall
                </span>
              </div>

              <div className="mt-8">
                <a
                  href="https://wordwall.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-md bg-[#245b43] px-6 py-4 font-semibold text-white transition hover:bg-[#193b2d]"
                >
                  Conhecer o Wordwall <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="flex min-h-[340px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#b9c9a9] bg-white p-10 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#edf3e7] text-[#568044]">
                <Gamepad2 size={40} />
              </div>

              <h3 className="mt-6 font-serif text-2xl text-[#245b43]">
                Seu desafio começa aqui!
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-[#68766d]">
                Espaço reservado para incorporar o jogo
                “Desafio dos Extremófilos – Quem consegue sobreviver?”.
              </p>

              <span className="mt-6 rounded-full bg-[#edf3e7] px-5 py-2 text-xs font-semibold text-[#568044]">
                JOGO EM PREPARAÇÃO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* USO PEDAGÓGICO */}
      <section className="bg-[#faf9f5] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-2xl bg-[#245b43] px-8 py-12 text-center md:px-16">
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              Tecnologia com intencionalidade pedagógica
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#d6e5d9]">
              A escolha de recursos digitais deve considerar os objetivos
              de aprendizagem, o contexto dos estudantes e as possibilidades
              de participação e inclusão.
            </p>
          </div>

          <div className="mt-10 flex justify-between border-t border-[#e4e2d9] pt-8">
            <Link
              to="/praticas"
              className="font-semibold text-[#568044] hover:text-[#245b43]"
            >
              ← Página anterior
            </Link>

            <Link
              to="/inclusao"
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
