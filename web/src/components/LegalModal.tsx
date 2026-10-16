import { useState, useEffect } from 'react';

export type LegalTab = 'terminos' | 'privacidad' | 'seguridad';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export default function LegalModal({ isOpen, initialTab = 'terminos', onClose }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="bg-white w-full max-w-4xl h-[92dvh] sm:h-[88vh] max-h-[95dvh] rounded-t-2xl sm:rounded-2xl border border-slate-300 shadow-2xl flex flex-col overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal (Fixed, shrink-0) */}
        <div className="shrink-0 px-4 py-3 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold shrink-0">
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]" data-icon="gavel">gavel</span>
            </div>
            <div className="min-w-0">
              <h2 id="legal-modal-title" className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-900 truncate">
                Marco Legal &amp; Normativo
              </h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="font-label-sm text-[11px] sm:text-[12px] text-slate-700 font-semibold">ARCOIN C.A. •</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-amber-100 border border-amber-300 font-code-spec text-[10px] sm:text-[11px] font-bold text-amber-900 tracking-wider">
                  RIF J-298524731
                </span>
                <span className="font-label-sm text-[11px] sm:text-[12px] text-slate-700 font-semibold">• Venezuela</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 flex items-center justify-center transition-colors active:scale-95 shrink-0 ml-2"
            aria-label="Cerrar modal"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]" data-icon="close">close</span>
          </button>
        </div>

        {/* Tab Navigation (Fixed, shrink-0, perfectly scrollable horizontally) */}
        <div className="shrink-0 flex border-b border-slate-200 bg-slate-100 px-3 sm:px-6 overflow-x-auto gap-2 pt-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('terminos')}
            className={`py-2 px-3 sm:py-2.5 sm:px-4 font-orbitron text-[12px] sm:text-title-sm rounded-t-lg font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border-b-2 shrink-0 ${
              activeTab === 'terminos'
                ? 'bg-white text-blue-950 border-blue-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border-transparent'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]" data-icon="description">description</span>
            <span className="hidden sm:inline">Términos del Servicio</span>
            <span className="sm:hidden">Términos</span>
          </button>

          <button
            onClick={() => setActiveTab('privacidad')}
            className={`py-2 px-3 sm:py-2.5 sm:px-4 font-orbitron text-[12px] sm:text-title-sm rounded-t-lg font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border-b-2 shrink-0 ${
              activeTab === 'privacidad'
                ? 'bg-white text-blue-950 border-blue-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border-transparent'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]" data-icon="privacy_tip">privacy_tip</span>
            <span className="hidden sm:inline">Política de Privacidad</span>
            <span className="sm:hidden">Privacidad</span>
          </button>

          <button
            onClick={() => setActiveTab('seguridad')}
            className={`py-2 px-3 sm:py-2.5 sm:px-4 font-orbitron text-[12px] sm:text-title-sm rounded-t-lg font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border-b-2 shrink-0 ${
              activeTab === 'seguridad'
                ? 'bg-white text-blue-950 border-blue-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border-transparent'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]" data-icon="shield">shield</span>
            <span className="hidden sm:inline">Seguridad &amp; Confidencialidad</span>
            <span className="sm:hidden">Seguridad VE</span>
          </button>
        </div>

        {/* Scrollable Content Body (flex-1 min-h-0) */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 text-body-sm sm:text-body-md text-slate-800 leading-relaxed bg-white overscroll-contain">
          {activeTab === 'terminos' && (
            <div className="space-y-5 sm:space-y-6 animate-fadeIn">
              {/* Alert Banner con Alto Contraste */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50 border-2 border-blue-200 text-slate-900 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-title-sm font-orbitron text-blue-950">
                  <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-blue-800" data-icon="balance">balance</span>
                  Marco Jurídico Aplicable
                </div>
                <p className="text-body-sm mt-1 text-slate-800 font-medium leading-relaxed">
                  Regido por el Código Civil de Venezuela, Código de Comercio y la Ley de Aguas de la República Bolivariana de Venezuela.
                </p>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-950 mb-1.5">
                  1. Identificación y Alcance de ARCOIN C.A.
                </h3>
                <p className="mb-2 text-slate-800">
                  <strong className="text-slate-950">ARCOIN C.A.</strong> (RIF J-298524731), con sede operativa en la Isla de Margarita, Estado Nueva Esparta, es una empresa especializada en consultoría geofísica aplicada, ejecución de Sondeos Eléctricos Verticales (SEV) y tomografía geoeléctrica 2D/3D.
                </p>
                <p className="text-slate-800">
                  El acceso a este portal web y el uso del formulario de Cotización SEV implica la aceptación plena de las presentes condiciones por parte del usuario o contratante.
                </p>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-950 mb-1.5">
                  2. Naturaleza Científica del Estudio Geofísico
                </h3>
                <p className="mb-2 text-slate-800">
                  Los estudios de resistividad aparente e inversión geoeléctrica constituyen evaluaciones geocientíficas indirectas de superficie. ARCOIN C.A. garantiza la aplicación de instrumental electromagnético calibrado, normativas técnicas de prospección hidrogeológica y software de modelado de vanguardia (Ip2win, Res2DInv/Res3DInv).
                </p>
                <p className="text-slate-800">
                  Los informes técnicos entregan cotas de perforación sugeridas, capas impermeables y horizontes acuíferos con base científica verificable. La ejecución mecánica de la perforación (diámetro, tipo de broca, estabilización, engravillado y desarrollo del pozo) es responsabilidad exclusiva de la empresa perforadora que el cliente contrate.
                </p>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-950 mb-1.5">
                  3. Cumplimiento de la Ley de Aguas y Normativa MINEC
                </h3>
                <p className="mb-2 text-slate-800">
                  Conforme a la <strong className="text-slate-950">Ley de Aguas de Venezuela (Gaceta Oficial N° 38.595)</strong>, las aguas subterráneas constituyen bienes del dominio público de la Nación. 
                </p>
                <p className="text-slate-800">
                  Los informes técnicos emitidos por ARCOIN C.A. son elaborados por ingenieros especialistas en prospección, aptos para conformar el expediente técnico exigido por el Ministerio del Poder Popular para el Ecosocialismo (MINEC) en la tramitación de permisos de perforación y aprovechamiento hídrico.
                </p>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-950 mb-1.5">
                  4. Validez de Cotizaciones y Condiciones de Pago
                </h3>
                <p className="text-slate-800">
                  Los presupuestos generados a través de la plataforma web o remitidos formalmente poseen una validez de quince (15) días continuos a partir de su emisión, sujetos a disponibilidad de logística y cuadrilla técnica en el Estado Nueva Esparta.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacidad' && (
            <div className="space-y-5 sm:space-y-6 animate-fadeIn">
              {/* Alert Banner con Alto Contraste */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 text-slate-900 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-title-sm font-orbitron text-emerald-950">
                  <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-emerald-800" data-icon="verified_user">verified_user</span>
                  Garantía Constitucional y Legal
                </div>
                <p className="text-body-sm mt-1 text-slate-800 font-medium leading-relaxed">
                  En cumplimiento del <strong className="text-emerald-950">Artículo 28 de la Constitución de la República Bolivariana de Venezuela</strong> (Derecho de Habeas Data), la <strong className="text-emerald-950">Ley sobre Mensajes de Datos y Firmas Electrónicas</strong> (Gaceta Oficial N° 37.148) y la <strong className="text-emerald-950">Ley Especial Contra Delitos Informáticos</strong> (Gaceta Oficial N° 37.313).
                </p>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-950 mb-1.5">
                  1. Principio de Habeas Data (Art. 28 CRBV)
                </h3>
                <p className="text-slate-800">
                  Toda persona tiene derecho a acceder a la información que sobre sí misma o sobre sus bienes conste en registros o bases de datos, así como a conocer el uso que se haga de la misma y su finalidad, a solicitar ante el tribunal competente la actualización, rectificación o destrucción de aquellos, si fuesen erróneos o afectasen ilegítimamente sus derechos.
                </p>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-950 mb-1.5">
                  2. Datos Recabados y Finalidad
                </h3>
                <p className="mb-2 text-slate-800">
                  A través de nuestro formulario de Cotización SEV, ARCOIN C.A. recaba únicamente los datos indispensables para formular su propuesta técnica:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-2 text-slate-800 font-medium">
                  <li>Nombre completo y cargo profesional.</li>
                  <li>Teléfono de contacto o WhatsApp.</li>
                  <li>Correo electrónico para remisión del presupuesto.</li>
                  <li>Nombre del predio, empresa o proyecto, y municipio de Nueva Esparta.</li>
                  <li>Descripción general del requerimiento geofísico o hidrogeológico.</li>
                </ul>
                <p className="text-slate-800">
                  <strong className="text-slate-950">No comercialización:</strong> ARCOIN C.A. no vende, arrienda, comercializa ni cede bases de datos personales o comerciales a terceros con fines publicitarios.
                </p>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-950 mb-1.5">
                  3. Ejercicio de Derechos ARCO
                </h3>
                <p className="text-slate-800">
                  El titular de los datos podrá ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación u Oposición remitiendo una comunicación formal al correo oficial de la empresa: <a href="mailto:arcoinca10@gmail.com" className="text-blue-900 font-bold underline hover:text-blue-950">arcoinca10@gmail.com</a>.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'seguridad' && (
            <div className="space-y-5 sm:space-y-6 animate-fadeIn">
              {/* Alert Banner con Alto Contraste */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50 border-2 border-amber-300 text-slate-900 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-title-sm font-orbitron text-amber-950">
                  <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-amber-800" data-icon="lock">lock</span>
                  Protección Bajo la Ley Especial Contra Delitos Informáticos
                </div>
                <p className="text-body-sm mt-1 text-slate-800 font-medium leading-relaxed">
                  Amparado bajo los Artículos 6 (Acceso Indebido), 20 (Violación de la Privacidad de la Data o Información) y 21 (Revelación Indebida de Datos) de la <strong className="text-amber-950">Ley Especial Contra Delitos Informáticos de Venezuela</strong>.
                </p>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-950 mb-1.5">
                  1. Confidencialidad de Coordenadas y Recursos Hídricos
                </h3>
                <p className="mb-2 text-slate-800">
                  La ubicación exacta de acuíferos, perfiles litológicos, espesores de capas permeables y coordenadas geográficas de los pozos proyectados en el terreno del cliente son tratados bajo <strong className="text-slate-950">estricta reserva y secreto profesional</strong>.
                </p>
                <p className="text-slate-800">
                  Dicha información no será compartida con terceros ajenos al proyecto sin autorización previa y por escrito del titular del terreno.
                </p>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-950 mb-1.5">
                  2. Medidas Técnicas de Ciberseguridad Web
                </h3>
                <p className="mb-2 text-slate-800">
                  Nuestra plataforma digital implementa protecciones recomendadas para la mitigación de riesgos informáticos:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-2 text-slate-800 font-medium">
                  <li><strong className="text-slate-950">Canal Seguro Cifrado:</strong> Transmisión de datos bajo protocolo HTTPS y cifrado TLS para impedir intercepciones de tráfico.</li>
                  <li><strong className="text-slate-950">Protección Anti-Bot y Honeypot:</strong> Trampas invisibles y verificación temporal para bloquear software malicioso o extracción automatizada de datos.</li>
                  <li><strong className="text-slate-950">Control de Frecuencia (Rate Limiting):</strong> Prevención de saturación y ataques de denegación de servicio (DoS) a los canales de recepción.</li>
                  <li><strong className="text-slate-950">Sanitización de Datos:</strong> Aislamiento y validación de entradas para neutralizar inyecciones de código.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-title-sm sm:text-title-md text-slate-950 mb-1.5">
                  3. Contacto Institucional y Canal de Seguridad
                </h3>
                <p className="text-slate-800">
                  Para cualquier consulta vinculada a la seguridad de la información o verificación de autenticidad de informes técnicos emitidos por ARCOIN C.A., contactar a través del correo <a href="mailto:arcoinca10@gmail.com" className="text-blue-900 font-bold underline hover:text-blue-950">arcoinca10@gmail.com</a> o por atención directa al teléfono institucional <strong className="text-slate-950">+58 (416) 696-7096</strong>.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer (Fixed, shrink-0, compact on mobile) */}
        <div className="shrink-0 px-4 py-3 sm:p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
          <div className="text-slate-600 font-label-sm text-[10px] sm:text-[11px] leading-tight">
            Leyes vigentes de la República Bolivariana de Venezuela.
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-white font-title-sm text-label-md sm:text-title-sm font-bold transition-all shadow hover:shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
