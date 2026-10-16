import { useState, useRef, useEffect, type FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [fallbackWaUrl, setFallbackWaUrl] = useState('');

  const mountTimeRef = useRef<number>(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Protección Anti-Bot Honeypot
    if (honeypotRef.current && honeypotRef.current.value) {
      setSubmitStatus('success');
      setStatusMessage('¡Solicitud enviada con éxito! Nos comunicaremos a la brevedad.');
      return;
    }

    // 2. Protección Time-Based suave (1 segundo para permitir pruebas fluidas)
    const elapsedTime = Date.now() - mountTimeRef.current;
    if (elapsedTime < 1000) {
      setSubmitStatus('error');
      setStatusMessage('Por favor tómese un segundo para revisar sus datos antes de enviar.');
      return;
    }

    const form = e.currentTarget;
    const elements = form.elements as any;
    const nombre = (elements['req-nombre']?.value || '').trim();
    const telefono = (elements['req-telefono']?.value || '').trim();
    const email = (elements['req-email']?.value || '').trim();
    const empresa = (elements['req-empresa']?.value || '').trim();
    const municipio = (elements['req-estado']?.value || '').trim();
    const tipo = (elements['req-tipo']?.value || '').trim();
    const mensaje = (elements['req-mensaje']?.value || '').trim();

    if (!nombre || !telefono || !email) {
      setSubmitStatus('error');
      setStatusMessage('Por favor complete los campos obligatorios: Nombre, Teléfono y Correo.');
      return;
    }

    // Preparar mensaje de WhatsApp como contingencia inmediata
    let waText = `*Solicitud de Cotización SEV - ARCOIN C.A.*%0A%0A`;
    waText += `👤 *Nombre:* ${encodeURIComponent(nombre)}%0A`;
    waText += `📞 *Teléfono:* ${encodeURIComponent(telefono)}%0A`;
    waText += `📧 *Correo:* ${encodeURIComponent(email)}%0A`;
    if (empresa) waText += `🏢 *Empresa/Proyecto:* ${encodeURIComponent(empresa)}%0A`;
    waText += `📍 *Municipio:* ${encodeURIComponent(municipio)}%0A`;
    waText += `🎯 *Tipo:* ${encodeURIComponent(tipo)}%0A`;
    if (mensaje) waText += `📝 *Detalles:* ${encodeURIComponent(mensaje)}%0A`;
    setFallbackWaUrl(`https://wa.me/584166967096?text=${waText}`);

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/arcoinca10@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nueva Cotización SEV: ${nombre} (${municipio})`,
          _template: 'table',
          _captcha: 'false',
          _replyto: email,
          'Nombre Completo': nombre,
          'Teléfono / WhatsApp': telefono,
          'Correo Electrónico': email,
          'Empresa o Proyecto': empresa || 'Particular / No especificado',
          'Municipio (Nueva Esparta)': municipio,
          'Tipo de Requerimiento': tipo,
          'Detalles del Proyecto': mensaje || 'Sin detalles adicionales'
        })
      });

      const data = await response.json();
      if (response.ok && data.success !== 'false') {
        setSubmitStatus('success');
        setStatusMessage('¡Solicitud enviada con éxito! Los datos fueron remitidos a nuestro equipo geofísico en arcoinca10@gmail.com.');
        form.reset();
        mountTimeRef.current = Date.now();
      } else {
        let errorText = data.message || 'El servicio de correo está validando el buzón.';
        if (typeof errorText === 'string' && errorText.toLowerCase().includes('activat')) {
          errorText = 'FormSubmit requiere una activación única: abra el correo en arcoinca10@gmail.com y haga clic en "Activate Form". Mientras tanto, envíe esta cotización de inmediato por WhatsApp con el botón abajo.';
        }
        throw new Error(errorText);
      }
    } catch (err: any) {
      setSubmitStatus('error');
      setStatusMessage(err?.message || 'No se pudo enviar el correo en este instante. Puede contactarnos de inmediato por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = (e.currentTarget as HTMLElement).closest('form');
    if (!form) return;
    const elements = form.elements as any;
    const nombre = (elements['req-nombre']?.value || '').trim();
    const telefono = (elements['req-telefono']?.value || '').trim();
    const email = (elements['req-email']?.value || '').trim();
    const empresa = (elements['req-empresa']?.value || '').trim();
    const municipio = (elements['req-estado']?.value || '').trim();
    const tipo = (elements['req-tipo']?.value || '').trim();
    const mensaje = (elements['req-mensaje']?.value || '').trim();

    if (!nombre) {
      alert('Por favor ingrese al menos su Nombre para la cotización.');
      return;
    }

    let waText = `*Solicitud de Cotización SEV - ARCOIN C.A.*%0A%0A`;
    waText += `👤 *Nombre:* ${encodeURIComponent(nombre)}%0A`;
    if (telefono) waText += `📞 *Teléfono:* ${encodeURIComponent(telefono)}%0A`;
    if (email) waText += `📧 *Correo:* ${encodeURIComponent(email)}%0A`;
    if (empresa) waText += `🏢 *Empresa/Proyecto:* ${encodeURIComponent(empresa)}%0A`;
    waText += `📍 *Municipio:* ${encodeURIComponent(municipio)}%0A`;
    waText += `🎯 *Tipo:* ${encodeURIComponent(tipo)}%0A`;
    if (mensaje) waText += `📝 *Detalles:* ${encodeURIComponent(mensaje)}%0A`;

    window.open(`https://wa.me/584166967096?text=${waText}`, '_blank');
  };

  return (
    <section className="py-space-xl bg-surface-container-low border-t border-outline-variant/30" id="cotizar">
      <div className="max-w-7xl mx-auto px-space-md sm:px-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[15px]" data-icon="send">send</span>
              PRESUPUESTO TÉCNICO SIN COMPROMISO
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-orbitron">
              Solicite su Estudio SEV en Margarita
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Consulte con nuestros ingenieros geofísicos antes de contratar maquinaria de perforación. Coordinamos logística y traslado de instrumental técnico a cualquier municipio de la isla en menos de 48 horas.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary-container text-white flex items-center justify-center font-bold text-title-sm">✓</span>
                <span className="font-body-md text-body-md text-on-surface">Presupuesto formal desglosado con tarifas corporativas transparentes.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary-container text-white flex items-center justify-center font-bold text-title-sm">✓</span>
                <span className="font-body-md text-body-md text-on-surface">Informe interpretativo 2D/3D con cota precisa de perforación.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-primary-container text-white flex items-center justify-center font-bold text-title-sm">✓</span>
                <span className="font-body-md text-body-md text-on-surface">Asistencia telefónica continua con el perforador durante la obra.</span>
              </div>
            </div>
            
            {/* Canal Directo Box */}
            <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-orbitron font-bold text-title-md text-primary">Canal Directo</span>
              </div>
              <a 
                className="px-4 py-2.5 rounded bg-emerald-600 text-white font-title-sm text-title-sm flex items-center gap-2 hover:bg-emerald-700 shadow hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all" 
                href="https://wa.me/584166967096" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]" data-icon="chat">chat</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-outline-variant/40 shadow-xl crosshair-corner">
              {/* Encabezado sin la palabra Simulador */}
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-outline-variant/20">
                <span className="font-orbitron font-bold text-title-md text-primary">Cotización SEV</span>
                <span className="font-label-sm text-[10px] text-secondary font-code-spec">RESPUESTA &lt; 2 HORAS</span>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-4 p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 text-body-sm flex items-start gap-3 animate-fadeIn">
                  <span className="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5" data-icon="check_circle">check_circle</span>
                  <div className="flex-1">
                    <p className="font-semibold text-title-sm">¡Mensaje Enviado con Éxito!</p>
                    <p className="text-body-sm mt-0.5">{statusMessage}</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-4 rounded-lg bg-rose-50 border border-rose-300 text-rose-900 text-body-sm flex items-start gap-3 animate-fadeIn">
                  <span className="material-symbols-outlined text-rose-600 text-[20px] mt-0.5" data-icon="error">error</span>
                  <div className="flex-1">
                    <p className="font-semibold text-title-sm">Aviso de Envío</p>
                    <p className="text-body-sm mt-0.5">{statusMessage}</p>
                    <div className="mt-3">
                      <a 
                        href={fallbackWaUrl || "https://wa.me/584166967096?text=Hola%20ARCOIN,%20deseo%20solicitar%20una%20cotizaci%C3%B3n%20SEV"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-label-sm shadow transition-all active:scale-95"
                      >
                        <span className="material-symbols-outlined text-[16px]" data-icon="chat">chat</span>
                        Enviar esta cotización por WhatsApp de inmediato →
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Honeypot anti-spam field (invisible to users) */}
                <input 
                  type="text" 
                  name="_honey_trap" 
                  ref={honeypotRef} 
                  style={{ display: 'none' }} 
                  className="hidden" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  aria-hidden="true" 
                />

                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-nombre">
                    Nombre Completo y Cargo: <span className="text-rose-600">*</span>
                  </label>
                  <input 
                    className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    id="req-nombre" 
                    name="req-nombre"
                    placeholder="Ej: Ing. Carlos Mendoza / Productor Agropecuario" 
                    required 
                    type="text"
                    maxLength={100}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-telefono">
                      Teléfono / WhatsApp: <span className="text-rose-600">*</span>
                    </label>
                    <input 
                      className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                      id="req-telefono" 
                      name="req-telefono"
                      placeholder="Ej: +58 412 1234567" 
                      required 
                      type="tel"
                      maxLength={30}
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-email">
                      Correo Electrónico: <span className="text-rose-600">*</span>
                    </label>
                    <input 
                      className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                      id="req-email" 
                      name="req-email"
                      placeholder="Ej: contacto@ejemplo.com" 
                      required 
                      type="email"
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-empresa">
                      Empresa, Finca o Proyecto:
                    </label>
                    <input 
                      className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                      id="req-empresa" 
                      name="req-empresa"
                      placeholder="Ej: Agropecuaria El Palmar" 
                      type="text"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-estado">
                      Estado / Municipio:
                    </label>
                    <select 
                      className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                      id="req-estado"
                      name="req-estado"
                    >
                      <option value="Antolín del Campo">Antolín del Campo</option>
                      <option value="Arismendi">Arismendi</option>
                      <option value="Díaz">Díaz</option>
                      <option value="García">García</option>
                      <option value="Gómez">Gómez</option>
                      <option value="Maneiro">Maneiro</option>
                      <option value="Marcano">Marcano</option>
                      <option value="Mariño">Mariño</option>
                      <option value="Península de Macanao">Península de Macanao</option>
                      <option value="Tubores">Tubores</option>
                      <option value="Villalba (Isla de Coche)">Villalba (Isla de Coche)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-tipo">
                    Tipo de Requerimiento Geofísico:
                  </label>
                  <select 
                    className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    id="req-tipo"
                    name="req-tipo"
                  >
                    <option value="Agua Subterránea (Detección de Acuífero para Pozo)">Agua Subterránea (Detección de Acuífero para Pozo)</option>
                    <option value="Geotecnia de Fundación (Basamento Rocoso / Fallas)">Geotecnia de Fundación (Basamento Rocoso / Fallas)</option>
                    <option value="Diagnóstico Ambiental (Plumas / Intrusión Salina)">Diagnóstico Ambiental (Plumas / Intrusión Salina)</option>
                    <option value="Malla de Puesta a Tierra Subestación Eléctrica">Malla de Puesta a Tierra Subestación Eléctrica</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1" htmlFor="req-mensaje">
                    Detalles Adicionales (Área estimada, antecedentes de perforación):
                  </label>
                  <textarea 
                    className="w-full px-3 py-2 text-body-md bg-surface-bright border border-outline-variant/60 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    id="req-mensaje" 
                    name="req-mensaje"
                    placeholder="Ej: Se requieren 2 puntos SEV para un terreno de 50 hectáreas..." 
                    rows={2}
                    maxLength={600}
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button 
                    className="w-full py-3.5 px-4 rounded bg-primary-container hover:bg-primary text-white font-title-sm text-title-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-60 disabled:pointer-events-none" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span className="relative z-10 text-body-sm">Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform relative z-10"></span>
                        <span className="relative z-10 font-orbitron font-semibold tracking-wide text-label-md">Enviar por Correo</span>
                        <span className="material-symbols-outlined text-[17px] group-hover:translate-x-1 transition-transform relative z-10" data-icon="send">send</span>
                      </>
                    )}
                  </button>

                  <button 
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3.5 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-title-sm text-title-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]" data-icon="chat">chat</span>
                    <span className="font-orbitron font-semibold tracking-wide text-label-md">Enviar por WhatsApp</span>
                  </button>
                </div>
              </form>

              <div className="mt-4 text-center font-label-sm text-[10px] text-secondary">
                Protección de datos bajo confidencialidad profesional geocientífica. Recepción en arcoinca10@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
