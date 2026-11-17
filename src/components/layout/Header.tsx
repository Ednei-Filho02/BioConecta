
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Microscope, Menu, X } from 'lucide-react';

const links = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Ciência e Biologia', path: '/ciencia' },
  { name: 'Práticas Pedagógicas', path: '/praticas' },
  { name: 'Recursos Digitais', path: '/recursos' },
  { name: 'Educação Inclusiva', path: '/inclusao' },
  { name: 'TICs e Educação', path: '/tics' },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e6dc] bg-[#faf9f5]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">

        <Link
          to="/"
          onClick={() => setMenuAberto(false)}
          className="flex items-center gap-2"
        >
          <Microscope size={30} className="text-[#245b43]" />

          <span className="text-xl font-bold tracking-tight text-[#245b43] sm:text-2xl">
            BioConecta
          </span>
        </Link>

        {/* BOTÃO DO MENU MOBILE E TABLET */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#245b43] transition hover:bg-[#edf3e7] xl:hidden"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          {menuAberto ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-x-5 gap-y-3 xl:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#72a94c]'
                    : 'text-[#52645a] hover:text-[#245b43]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* MENU MOBILE E TABLET */}
        {menuAberto && (
          <nav className="flex w-full flex-col border-t border-[#e8e6dc] pt-3 xl:hidden">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMenuAberto(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#edf3e7] text-[#568044]'
                      : 'text-[#52645a] hover:bg-[#f1f0e9] hover:text-[#245b43]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
