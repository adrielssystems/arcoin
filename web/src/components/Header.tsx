import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/*  Top Announcement Bar / Geolocation Live Beacon  */}
      <aside className="hidden md:flex w-full bg-surface-container-lowest border-b border-outline-variant/30 px-space-md py-1 text-center items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-semibold text-primary">OPERACIONES ACTIVAS:</span>
            <span className="text-on-surface">Nueva Esparta (Isla de Margarita, Coche y Cubagua)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-secondary">Acreditación CIV N° 194.208 / SOVG</span>
            <span className="font-code-spec text-primary font-medium tracking-tight">FREQ: 0.5–256 Hz | SCHLUMBERGER STD</span>
          </div>
        </div>
      </aside>
      {/*  Navigation Bar Component (TopNavBar)  */}
      <header className="docked full-width top-0 sticky z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
        <div className="flex justify-between items-center w-full px-4 sm:px-space-xl max-w-7xl mx-auto h-16 sm:h-20">
          {/*  Brand Logo Anchor  */}
          <a className="flex items-center gap-2 sm:gap-3 group" href="#">
            <img src="/logo.jpg" alt="Arcoin Logo" className="h-8 sm:h-12 w-auto mix-blend-multiply group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-[1.1rem] sm:text-headline-sm font-headline-sm font-bold tracking-tight text-primary leading-tight">ARCOIN Geofísica</span>
              <span className="font-label-sm text-[8px] sm:text-[9px] tracking-widest uppercase text-secondary font-semibold">Ingeniería &amp; Sondeo SEV</span>
            </div>
          </a>
          {/*  Desktop Navigation Links  */}
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-primary font-title-sm text-title-sm border-b-2 border-primary pb-1" href="#servicios">Servicios SEV</a>
            <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#metodologia">Metodología</a>
            <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#tecnologia">Equipamiento</a>
            <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="#casos">Casos de Éxito</a>
          </nav>
          {/*  Trailing Action CTA Cluster  */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-50 text-emerald-800 font-label-md text-label-md hover:bg-emerald-100 hover:border-emerald-500 transition-colors" href="https://wa.me/584166967096?text=Hola%20ARCOIN,%20deseo%20cotizar%20un%20estudio%20geof%C3%ADsico%20SEV" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[16px] text-emerald-600" data-icon="chat">chat</span>
              <span>WhatsApp Directo</span>
            </a>
            <a className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-primary-container hover:bg-primary text-white font-title-sm text-title-sm shadow hover:shadow-md transition-all active:scale-[0.99]" href="#cotizar">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400"></span>
              <span>Cotizar</span>
            </a>
            {/* Botón de Menú Móvil */}
            <button 
              className="md:hidden flex items-center justify-center p-1.5 rounded bg-surface-container-high border border-outline-variant/30 text-primary hover:bg-surface-container-highest transition-colors shadow-sm" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Alternar menú móvil"
            >
              <span className="material-symbols-outlined text-[24px]" data-icon={isMobileMenuOpen ? 'close' : 'menu'}>
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay de Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-xl md:hidden overflow-y-auto border-t border-outline-variant/30">
          <nav className="flex flex-col p-6 gap-6">
            <a className="text-primary font-title-md text-title-md border-b border-outline-variant/20 pb-4" href="#servicios" onClick={() => setIsMobileMenuOpen(false)}>Servicios SEV</a>
            <a className="text-on-surface-variant font-title-md text-title-md border-b border-outline-variant/20 pb-4" href="#metodologia" onClick={() => setIsMobileMenuOpen(false)}>Metodología</a>
            <a className="text-on-surface-variant font-title-md text-title-md border-b border-outline-variant/20 pb-4" href="#tecnologia" onClick={() => setIsMobileMenuOpen(false)}>Equipamiento</a>
            <a className="text-on-surface-variant font-title-md text-title-md border-b border-outline-variant/20 pb-4" href="#casos" onClick={() => setIsMobileMenuOpen(false)}>Casos de Éxito</a>
            <a className="inline-flex items-center gap-2 px-4 py-3 mt-4 rounded-lg border border-emerald-500/30 bg-emerald-50 text-emerald-800 font-label-md text-label-md hover:bg-emerald-100 transition-colors justify-center shadow-sm" href="https://wa.me/584166967096?text=Hola%20ARCOIN,%20deseo%20cotizar%20un%20estudio%20geof%C3%ADsico%20SEV" rel="noopener noreferrer" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="material-symbols-outlined text-[18px] text-emerald-600" data-icon="chat">chat</span>
              <span>WhatsApp Directo</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
