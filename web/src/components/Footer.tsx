export default function Footer() {
  return (
    <footer className="full-width bottom bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant/30 dark:border-outline-variant/20">
      <div className="w-full px-space-xl py-space-xl max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-space-md">
        {/*  Brand & Corporate Legal Footprint  */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="ARCOIN Logo" className="h-8 w-8 object-cover rounded shadow-sm border border-outline-variant/30" />
            <span className="text-headline-sm font-headline-sm font-bold text-primary dark:text-primary-fixed">
              ARCOIN Geofísica
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-secondary">
            RIF: J-40812930-1 | Sede operativa exclusiva: Isla de Margarita, Edo. Nueva Esparta.
          </p>
          <p className="font-body-sm text-body-sm text-secondary">
            © 2026 ARCOIN Ingeniería Geofísica &amp; Hidrogeología C.A. Todos los derechos reservados.
          </p>
          <p className="font-label-sm text-[11px] text-secondary/80 mt-1">
            Plataforma diseñada y desarrollada por <a href="https://adrielssystems.com" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline transition-colors">Adriel's Systems</a>
          </p>
        </div>
        {/*  Footer Navigation Links List  */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-center">
          <a className="text-primary dark:text-inverse-primary font-label-sm text-label-sm hover:underline" href="#servicios">Sondeo Eléctrico Vertical (SEV)</a>
          <span className="text-outline-variant">•</span>
          <a className="text-on-surface-variant dark:text-surface-variant font-body-sm text-body-sm hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#servicios">Hidrogeología de Acuíferos</a>
          <span className="text-outline-variant">•</span>
          <a className="text-on-surface-variant dark:text-surface-variant font-body-sm text-body-sm hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#tecnologia">Certificaciones Geotécnicas</a>
          <span className="text-outline-variant">•</span>
          <a className="text-on-surface-variant dark:text-surface-variant font-body-sm text-body-sm hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#metodologia">Normativa INAMEH</a>
          <span className="text-outline-variant">•</span>
          <a className="text-on-surface-variant dark:text-surface-variant font-body-sm text-body-sm hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Aviso Legal &amp; Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
