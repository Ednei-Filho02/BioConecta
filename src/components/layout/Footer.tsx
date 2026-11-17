
import { Microscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#193b2d] px-6 py-12 text-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex items-center gap-3">
          <Microscope size={30} />
          <span className="text-2xl font-bold">BioConecta</span>
        </div>

        <p className="max-w-xl text-sm leading-7 text-[#d1ded5]">
          Conectando a ciência a diferentes formas de aprender.
          Um espaço dedicado à ciência, educação e tecnologia.
        </p>

        <div className="my-8 border-t border-white/20" />

        <div className="flex flex-col justify-between gap-3 text-sm text-[#d1ded5] md:flex-row">
          <span>Projeto acadêmico — Licenciatura em Ciências Biológicas</span>
          <span>© {new Date().getFullYear()} BioConecta</span>
        </div>
      </div>
    </footer>
  );
}
