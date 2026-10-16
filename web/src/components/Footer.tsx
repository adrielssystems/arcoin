import type { LegalTab } from './LegalModal';

interface FooterProps {
  onOpenLegal?: (tab: LegalTab) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="full-width bottom bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="w-full px-4 sm:px-space-xl py-space-xl max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-space-md">
        {/* Brand & Corporate Legal Footprint */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2.5">
            <img src="/logo.jpg" alt="ARCOIN Logo" className="h-9 w-9 object-cover rounded shadow-md border border-slate-700" />
            <span className="text-headline-sm font-headline-sm font-bold text-white tracking-tight">
              ARCOIN C.A.
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-0.5">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-code-spec text-[11px] font-bold text-amber-400 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              RIF J-298524731
            </span>
            <span className="font-body-sm text-body-sm text-slate-300">
              | Sede operativa: Isla de Margarita, Edo. Nueva Esparta.
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-slate-400">
            © 2026 ARCOIN C.A. Todos los derechos reservados.
          </p>
          <p className="font-label-sm text-[12px] text-slate-400 mt-0.5">
            Plataforma diseñada y desarrollada por <a href="https://adrielssystems.com" target="_blank" rel="noopener noreferrer" className="font-bold text-sky-400 hover:text-sky-300 hover:underline transition-colors">Adriel's Systems</a>
          </p>
        </div>
        
        {/* Footer Navigation Links to Real Sections & Legal Links */}
        <div className="flex flex-col items-center md:items-end gap-3.5 text-center md:text-right max-w-xl">
          {/* Main Sections Navigation */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-3.5 gap-y-2">
            <a className="text-slate-200 hover:text-white font-body-sm text-body-sm transition-colors hover:underline" href="#servicios">Servicios SEV</a>
            <span className="text-slate-600 text-[12px]">•</span>
            <a className="text-slate-200 hover:text-white font-body-sm text-body-sm transition-colors hover:underline" href="#metodologia">Metodología</a>
            <span className="text-slate-600 text-[12px]">•</span>
            <a className="text-slate-200 hover:text-white font-body-sm text-body-sm transition-colors hover:underline" href="#paquetes">Planes</a>
            <span className="text-slate-600 text-[12px]">•</span>
            <a className="text-slate-200 hover:text-white font-body-sm text-body-sm transition-colors hover:underline" href="#tecnologia">Equipamiento</a>
            <span className="text-slate-600 text-[12px]">•</span>
            <a className="text-slate-200 hover:text-white font-body-sm text-body-sm transition-colors hover:underline" href="#casos">Casos de Éxito</a>
            <span className="text-slate-600 text-[12px]">•</span>
            <a className="text-slate-200 hover:text-white font-body-sm text-body-sm transition-colors hover:underline" href="#faq">Preguntas</a>
            <span className="text-slate-600 text-[12px]">•</span>
            <a className="text-amber-400 hover:text-amber-300 font-bold font-body-sm text-body-sm hover:underline transition-colors" href="#cotizar">Cotizar</a>
          </div>

          {/* Legal Links (Venezuelan Law) */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-3.5 gap-y-1.5 text-[12px] text-slate-400 border-t border-slate-800 pt-2.5 w-full">
            <button 
              type="button" 
              onClick={() => onOpenLegal ? onOpenLegal('terminos') : window.location.hash = 'legal-terminos'} 
              className="hover:text-white transition-colors hover:underline cursor-pointer"
            >
              Términos del Servicio
            </button>
            <span className="text-slate-600">•</span>
            <button 
              type="button" 
              onClick={() => onOpenLegal ? onOpenLegal('privacidad') : window.location.hash = 'legal-privacidad'} 
              className="hover:text-white transition-colors hover:underline cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span className="text-slate-600">•</span>
            <button 
              type="button" 
              onClick={() => onOpenLegal ? onOpenLegal('seguridad') : window.location.hash = 'legal-seguridad'} 
              className="hover:text-white transition-colors hover:underline cursor-pointer"
            >
              Seguridad de la Información (Leyes VE)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
