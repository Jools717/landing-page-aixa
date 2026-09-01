        // =========================================
        // INITIALIZATION
        // =========================================
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Lucide Icons
            lucide.createIcons();

            initGlobalFlashlight();
            initNavbar();
            initConversationDemo();
            initQueEsAixa();
            initSolucionesShowcase();
            initDiferencial();
            initIntegraciones();
        });

        // =========================================
        // GLOBAL FLASHLIGHT (LINTERNA) EFFECT (HIGH-PERFORMANCE)
        // =========================================
        function initGlobalFlashlight() {
            let mouseX = -1000;
            let mouseY = -1000;
            let targetX = -1000;
            let targetY = -1000;
            let rafId = null;
            let isVisible = false;

            const updateFlashlightPosition = () => {
                if (Math.abs(mouseX - targetX) > 0.5 || Math.abs(mouseY - targetY) > 0.5) {
                    mouseX = targetX;
                    mouseY = targetY;
                    document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
                    document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
                }
                rafId = null;
            };

            const onPointerMove = (e) => {
                targetX = e.clientX;
                targetY = e.clientY;

                if (!isVisible) {
                    isVisible = true;
                    document.documentElement.style.setProperty('--flashlight-opacity', '1');
                }

                if (!rafId) {
                    rafId = requestAnimationFrame(updateFlashlightPosition);
                }
            };

            const onMouseLeave = () => {
                isVisible = false;
                document.documentElement.style.setProperty('--flashlight-opacity', '0');
            };

            const onVisibilityChange = () => {
                if (document.hidden) {
                    isVisible = false;
                    document.documentElement.style.setProperty('--flashlight-opacity', '0');
                }
            };

            window.addEventListener('pointermove', onPointerMove, { passive: true });
            document.addEventListener('mouseleave', onMouseLeave);
            document.addEventListener('visibilitychange', onVisibilityChange, { passive: true });
        }

        // =========================================
        // SOLUCIONES SHOWCASE LOGIC
        // =========================================
        const solucionesData = [
            {
                id: "atencion",
                category: "CASO DE USO 01 / 05",
                tabName: "Atención al Cliente",
                icon: "headphones",
                title: "Atención al Cliente Omnicanal 24/7",
                tagline: "Respuestas instantáneas y contextuales por WhatsApp y web sin esperas, consultando catálogos, pedidos y garantías empresariales en tiempo real.",
                tags: ["WhatsApp Business", "Web Chat", "SLA < 2s", "Resolución 24/7", "Cero Esperas"],
                chatTitle: "AIXA Soporte",
                theme: {
                    name: "Electric Cobalt",
                    accentColor: "#0D50E8",
                    badgeClass: "bg-blue-100 text-blue-800 border-blue-300 font-semibold",
                    headerBg: "#093CB8",
                    footerBg: "#093CB8",
                    inputBg: "rgba(0, 0, 0, 0.25)",
                    btnBg: "rgba(255, 255, 255, 0.25)",
                    borderColor: "#3B82F6",
                    shadowColor: "rgba(13, 80, 232, 0.45)"
                },
                messages: [
                    { role: "user", text: "Hola, compré una laptop hace 10 días y necesito tramitar garantía por la batería." },
                    { role: "analysis", text: "Verificando política de garantía y factura...", sources: ["Manual de Garantías v3", "ERP Facturación", "CRM Clientes"] },
                    { role: "aixa", text: "¡Hola Carlos! Tu compra cuenta con 12 meses de garantía oficial. Hemos generado tu radicado #GAR-8942 y enviado la guía de recogida por mensajería a tu correo registrado." }
                ],
                challenge: "Equipos humanos colapsados con consultas repetitivas de estado de pedido, garantías y políticas fuera de horario de oficina.",
                integrations: ["WhatsApp API", "ERP Facturación", "CRM Hubspot", "Zendesk"],
                impact: "+82% de consultas resueltas sin escalamiento humano y reducción del 70% en tiempo de primera respuesta."
            },
            {
                id: "ventas",
                category: "CASO DE USO 02 / 05",
                tabName: "Ventas & Comercial",
                icon: "trending-up",
                title: "Fuerza Comercial & Calificación de Leads",
                tagline: "Atiende prospectos en el momento exacto de interés, califica su presupuesto y necesidad (Score IA) y agenda reuniones con tus ejecutivos comerciales.",
                tags: ["Lead Scoring IA", "Catálogo Inteligente", "Cierre Comercial", "CRM Sync", "Prospección"],
                chatTitle: "AIXA Comercial",
                theme: {
                    name: "Solar Amber Gold",
                    accentColor: "#D97706",
                    badgeClass: "bg-amber-100 text-amber-900 border-amber-300 font-semibold",
                    headerBg: "#B45309",
                    footerBg: "#B45309",
                    inputBg: "rgba(0, 0, 0, 0.25)",
                    btnBg: "rgba(255, 255, 255, 0.25)",
                    borderColor: "#F59E0B",
                    shadowColor: "rgba(217, 119, 6, 0.45)"
                },
                messages: [
                    { role: "user", text: "Buenas tardes, nos interesa implementar IA en una empresa logística de 150 empleados. ¿Tienen casos de éxito?" },
                    { role: "analysis", text: "Buscando casos del sector logístico y perfilando lead...", sources: ["Directorio de Casos de Éxito", "Score Lead IA (94%)", "CRM Oportunidades"] },
                    { role: "aixa", text: "¡Mucho gusto! Con 'Logística Global S.A.' logramos reducir un 18% los tiempos operativos. Te adjunto el resumen ejecutivo y el enlace para agendar una sesión demostrativa." }
                ],
                challenge: "Prospectos que se enfrían o van a la competencia por demoras en la respuesta inicial y falta de calificación oportuna de oportunidades.",
                integrations: ["CRM Salesforce", "Catálogos PDF", "LinkedIn Ads", "WhatsApp"],
                impact: "+3.5x en velocidad de contacto con leads calificados y +28% de aumento en reuniones comerciales efectivas."
            },
            {
                id: "conocimiento",
                category: "CASO DE USO 03 / 05",
                tabName: "Gestión del Conocimiento",
                icon: "book-open",
                title: "Cerebro Central & Documentación (RAG)",
                tagline: "Convierte manuales, contratos, directrices y bases de datos dispersas en respuestas exactas con citación de fuentes para todo tu equipo.",
                tags: ["RAG Empresarial", "Cero Alucinaciones", "Búsqueda Semántica", "Multi-fuente", "Seguridad"],
                chatTitle: "AIXA Conocimiento",
                theme: {
                    name: "Cyber Amethyst",
                    accentColor: "#7C3AED",
                    badgeClass: "bg-purple-100 text-purple-800 border-purple-300 font-semibold",
                    headerBg: "#6D28D9",
                    footerBg: "#6D28D9",
                    inputBg: "rgba(0, 0, 0, 0.25)",
                    btnBg: "rgba(255, 255, 255, 0.25)",
                    borderColor: "#8B5CF6",
                    shadowColor: "rgba(124, 58, 237, 0.45)"
                },
                messages: [
                    { role: "user", text: "¿Cuál es el protocolo de contingencia si se interrumpe el servidor central según el manual de operaciones?" },
                    { role: "analysis", text: "Consultando repositorio institucional y políticas...", sources: ["Manual Operativo 2026", "Protocolo IT Sec. 8", "SharePoint Corp"] },
                    { role: "aixa", text: "Según el Protocolo IT (Sec. 8.3), se activa el clúster secundario en 3 minutos y se notifica al comité de crisis vía canal seguro #incidentes-it." }
                ],
                challenge: "Conocimiento disperso en correos, SharePoint, PDFs obsoletos y pérdida de horas buscando procedimientos estándar.",
                integrations: ["SharePoint", "Google Drive", "Notion", "Bases SQL", "Documentos PDF"],
                impact: "-85% de tiempo dedicado a búsqueda de información interna y eliminación de errores por políticas desactualizadas."
            },
            {
                id: "rrhh",
                category: "CASO DE USO 04 / 05",
                tabName: "Recursos Humanos",
                icon: "users",
                title: "Autogestión de RRHH & Soporte al Empleado",
                tagline: "Atención confidencial e inmediata para colaboradores sobre vacaciones, certificados laborales, pólizas y beneficios organizacionales.",
                tags: ["Portal del Empleado", "Certificados", "Vacaciones", "Onboarding", "Nómina"],
                chatTitle: "AIXA Talento Humano",
                theme: {
                    name: "Flame Rose Crimson",
                    accentColor: "#E11D48",
                    badgeClass: "bg-rose-100 text-rose-800 border-rose-300 font-semibold",
                    headerBg: "#BE123C",
                    footerBg: "#BE123C",
                    inputBg: "rgba(0, 0, 0, 0.25)",
                    btnBg: "rgba(255, 255, 255, 0.25)",
                    borderColor: "#FB7185",
                    shadowColor: "rgba(225, 29, 72, 0.45)"
                },
                messages: [
                    { role: "user", text: "¿Cuántos días de vacaciones tengo acumulados y cómo puedo solicitar 5 días para el próximo mes?" },
                    { role: "analysis", text: "Consultando módulo de RRHH y expediente de empleado...", sources: ["ERP RRHH Nómina", "Política de Descanso", "Historial Empleado"] },
                    { role: "aixa", text: "Tienes 12 días disponibles. Puedes solicitar tus 5 días directamente desde el formulario precargado que acabo de habilitar en tu portal interno." }
                ],
                challenge: "Sobrecarga del departamento de Talento Humano respondiendo las mismas dudas de nómina, certificados y permisos una y otra vez.",
                integrations: ["ERP Nómina", "Workday / BambooHR", "Slack / Teams", "Correo Interno"],
                impact: "-65% de tickets operativos recibidos por RRHH y 100% de inmediatez en consultas frecuentes para el colaborador."
            },
            {
                id: "agenda",
                category: "CASO DE USO 05 / 05",
                tabName: "Automatización & Agenda",
                icon: "calendar",
                title: "Agendamiento Inteligente & Flujos Operativos",
                tagline: "Coordinación automática de citas, reuniones con clientes y ejecución de flujos administrativos entre múltiples plataformas sin fricción.",
                tags: ["Google Calendar", "Outlook 365", "Recordatorios WhatsApp", "Flujos ERP", "Cero Fricción"],
                chatTitle: "AIXA Operaciones",
                theme: {
                    name: "Cyber Mint Teal",
                    accentColor: "#0D9488",
                    badgeClass: "bg-teal-100 text-teal-800 border-teal-300 font-semibold",
                    headerBg: "#0F766E",
                    footerBg: "#0F766E",
                    inputBg: "rgba(0, 0, 0, 0.25)",
                    btnBg: "rgba(255, 255, 255, 0.25)",
                    borderColor: "#2DD4BF",
                    shadowColor: "rgba(13, 148, 136, 0.45)"
                },
                messages: [
                    { role: "user", text: "Necesito agendar una auditoría de inventario con el equipo técnico para el próximo martes en la mañana." },
                    { role: "analysis", text: "Verificando disponibilidad de ingenieros y salas...", sources: ["Google Calendar", "Outlook 365", "ERP Mantenimiento"] },
                    { role: "aixa", text: "Slot reservado para el Martes a las 10:00 AM. Invitaciones enviadas al equipo y recordatorio automático programado 24h antes por WhatsApp." }
                ],
                challenge: "Cruce de agendas, cadenas infinitas de correos para coordinar reuniones y altas tasas de inasistencia (no-show).",
                integrations: ["Google Calendar", "Microsoft Outlook", "WhatsApp API", "ERP Logístico"],
                impact: "-90% de tiempo en coordinación de agendas y reducción del 45% en inasistencias gracias a recordatorios automáticos."
            }
        ];

        function initSolucionesShowcase() {
            const tabsContainer = document.getElementById('sol-tabs-container');
            const prevBtn = document.getElementById('sol-prev-btn');
            const nextBtn = document.getElementById('sol-next-btn');

            const categoryEl = document.getElementById('sol-category');
            const titleEl = document.getElementById('sol-title');
            const taglineEl = document.getElementById('sol-tagline');
            const tagsEl = document.getElementById('sol-tags');
            const challengeEl = document.getElementById('sol-challenge');
            const integrationsEl = document.getElementById('sol-integrations');
            const impactEl = document.getElementById('sol-impact');

            const card1 = document.getElementById('sol-card-1');
            const card2 = document.getElementById('sol-card-2');
            const chatTitle1 = document.getElementById('sol-chat-title-1');
            const chatTitle2 = document.getElementById('sol-chat-title-2');
            const chatBody1 = document.getElementById('sol-chat-body-1');
            const chatBody2 = document.getElementById('sol-chat-body-2');

            if (!tabsContainer || !card1 || !card2) return;

            let currentIndex = 0;
            let currentRunId = 0;
            let frontCardIndex = 1; // 1 = card1 is in front, 2 = card2 is in front
            const delay = ms => new Promise(res => setTimeout(res, ms));

            function applyCardTheme(cardNum, theme) {
                const card = cardNum === 1 ? card1 : card2;
                const header = cardNum === 1 ? document.getElementById('sol-card-header-1') : document.getElementById('sol-card-header-2');
                const footer = cardNum === 1 ? document.getElementById('sol-card-footer-1') : document.getElementById('sol-card-footer-2');
                const input = cardNum === 1 ? document.getElementById('sol-card-input-1') : document.getElementById('sol-card-input-2');
                const btn = cardNum === 1 ? document.getElementById('sol-card-btn-1') : document.getElementById('sol-card-btn-2');

                if (card) {
                    card.style.borderColor = theme.borderColor;
                    card.style.boxShadow = `0 25px 50px -10px ${theme.shadowColor}`;
                }
                if (header) {
                    header.style.backgroundColor = theme.headerBg;
                }
                if (footer) {
                    footer.style.backgroundColor = theme.footerBg;
                }
                if (input) {
                    input.style.backgroundColor = theme.inputBg;
                    input.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                    const txt = input.querySelector('span');
                    if (txt) {
                        txt.style.color = 'rgba(255, 255, 255, 0.9)';
                    }
                }
                if (btn) {
                    btn.style.backgroundColor = theme.btnBg;
                    btn.style.color = '#FFFFFF';
                    btn.style.border = '1px solid rgba(255, 255, 255, 0.35)';
                }
            }

            // Render Tabs
            tabsContainer.innerHTML = '';
            solucionesData.forEach((item, index) => {
                const tab = document.createElement('button');
                tab.className = `soluciones-tab-btn px-4 py-2 rounded-full border text-xs md:text-sm font-medium transition-all flex items-center gap-2 ${index === 0 ? 'active' : ''}`;
                tab.innerHTML = `<i data-lucide="${item.icon}" class="w-3.5 h-3.5"></i><span>${item.tabName}</span>`;
                tab.addEventListener('click', () => {
                    if (currentIndex !== index) {
                        const dir = index > currentIndex ? 'next' : 'prev';
                        currentIndex = index;
                        renderSlide(currentIndex, dir, true);
                    }
                });
                tabsContainer.appendChild(tab);
            });

            async function renderSlide(index, direction = 'next', isUserAction = false) {
                currentRunId++;
                const runId = currentRunId;
                const data = solucionesData[index];

                let activeCard, incomingCard, incomingBody, incomingTitle;
                
                if (isUserAction) {
                    if (frontCardIndex === 1) {
                        activeCard = card1;
                        incomingCard = card2;
                        incomingBody = chatBody2;
                        incomingTitle = chatTitle2;
                        frontCardIndex = 2;
                    } else {
                        activeCard = card2;
                        incomingCard = card1;
                        incomingBody = chatBody1;
                        incomingTitle = chatTitle1;
                        frontCardIndex = 1;
                    }

                    // Apply the new theme to incoming front card
                    applyCardTheme(frontCardIndex, data.theme);

                    // Pre-populate the incoming back card with target data
                    if (incomingTitle) incomingTitle.textContent = data.chatTitle;
                    if (incomingBody) incomingBody.innerHTML = '';

                    // Trigger genuine physical card exchange
                    activeCard.classList.remove('anim-front-to-back-right', 'anim-front-to-back-left', 'anim-back-to-front', 'is-front', 'is-back');
                    incomingCard.classList.remove('anim-front-to-back-right', 'anim-front-to-back-left', 'anim-back-to-front', 'is-front', 'is-back');
                    void activeCard.offsetWidth; // Force reflow

                    if (direction === 'prev') {
                        activeCard.classList.add('anim-front-to-back-left');
                    } else {
                        activeCard.classList.add('anim-front-to-back-right');
                    }
                    incomingCard.classList.add('anim-back-to-front');

                    // After animation settles, update classes cleanly and pre-theme the back card for next swap
                    setTimeout(() => {
                        if (runId === currentRunId) {
                            activeCard.classList.remove('anim-front-to-back-right', 'anim-front-to-back-left', 'anim-back-to-front');
                            activeCard.classList.add('is-back');
                            incomingCard.classList.remove('anim-front-to-back-right', 'anim-front-to-back-left', 'anim-back-to-front');
                            incomingCard.classList.add('is-front');

                            // Pre-theme the resting back card with the upcoming case
                            const nextIdx = (index + 1) % solucionesData.length;
                            const backCardIdx = frontCardIndex === 1 ? 2 : 1;
                            applyCardTheme(backCardIdx, solucionesData[nextIdx].theme);
                            const backTitle = backCardIdx === 1 ? chatTitle1 : chatTitle2;
                            if (backTitle) backTitle.textContent = solucionesData[nextIdx].chatTitle;
                        }
                    }, 560);

                } else {
                    // Initial setup
                    incomingCard = card1;
                    incomingBody = chatBody1;
                    incomingTitle = chatTitle1;
                    if (incomingTitle) incomingTitle.textContent = data.chatTitle;
                    if (incomingBody) incomingBody.innerHTML = '';
                    
                    // Apply themes to both initial cards (Front: Case 0, Back: Case 1)
                    applyCardTheme(1, solucionesData[0].theme);
                    applyCardTheme(2, solucionesData[1].theme);
                    if (chatTitle2) chatTitle2.textContent = solucionesData[1].chatTitle;
                }

                // Update Tab States (Vibrant solid active chip matching current case)
                const allTabs = tabsContainer.querySelectorAll('.soluciones-tab-btn');
                allTabs.forEach((tab, i) => {
                    if (i === index) {
                        tab.classList.add('active');
                        tab.style.backgroundColor = data.theme.headerBg;
                        tab.style.borderColor = data.theme.headerBg;
                        tab.style.color = '#FFFFFF';
                        tab.style.boxShadow = `0 4px 14px ${data.theme.shadowColor}`;
                    } else {
                        tab.classList.remove('active');
                        tab.style.backgroundColor = '#FFFFFF';
                        tab.style.borderColor = '#E2E8F0';
                        tab.style.color = '#475569';
                        tab.style.boxShadow = 'none';
                    }
                });

                // Update Left Side Details
                if (categoryEl) {
                    categoryEl.textContent = data.category;
                    categoryEl.style.color = data.theme.accentColor;
                }
                if (titleEl) titleEl.textContent = data.title;
                if (taglineEl) taglineEl.textContent = data.tagline;

                if (tagsEl) {
                    tagsEl.innerHTML = '';
                    data.tags.forEach(tag => {
                        const t = document.createElement('span');
                        t.className = `px-3 py-1 rounded-lg text-xs font-semibold shadow-xs border ${data.theme.badgeClass}`;
                        t.textContent = tag;
                        tagsEl.appendChild(t);
                    });
                }

                // Update Right Side Details
                if (challengeEl) challengeEl.textContent = data.challenge;
                if (impactEl) impactEl.textContent = data.impact;

                if (integrationsEl) {
                    integrationsEl.innerHTML = '';
                    data.integrations.forEach(item => {
                        const badge = document.createElement('span');
                        badge.className = 'px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 border border-indigo-200/80 text-indigo-700 flex items-center gap-1.5';
                        badge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-indigo-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>${item}</span>`;
                        integrationsEl.appendChild(badge);
                    });
                }

                lucide.createIcons();

                // Wait for the new card to arrive at front before typing
                if (isUserAction) {
                    await delay(350);
                }
                if (runId !== currentRunId) return;

                // Animate Chat Messages inside the front card
                for (const msg of data.messages) {
                    if (runId !== currentRunId) return;

                    if (msg.role === 'user') {
                        // User message (Right green bubble)
                        const bubble = document.createElement('div');
                        bubble.className = 'flex justify-end mb-1 w-full fade-enter';
                        bubble.innerHTML = `
                            <div class="bg-[#005c4b] text-[#e9edef] px-3 py-2 rounded-xl rounded-tr-none max-w-[90%] text-[13px] leading-snug shadow-sm relative">
                                <span class="msg-text break-words"></span>
                                <svg viewBox="0 0 8 13" width="8" height="13" class="absolute top-0 -right-[7px] text-[#005c4b]"><path fill="currentColor" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path></svg>
                            </div>
                        `;
                        incomingBody.appendChild(bubble);
                        void bubble.offsetWidth;
                        bubble.classList.add('fade-enter-active');

                        const textEl = bubble.querySelector('.msg-text');
                        textEl.classList.add('typing-cursor');
                        for (let i = 0; i < msg.text.length; i++) {
                            textEl.textContent += msg.text.charAt(i);
                            incomingBody.scrollTop = incomingBody.scrollHeight;
                            await delay(15);
                            if (runId !== currentRunId) return;
                        }
                        textEl.classList.remove('typing-cursor');
                        await delay(500);

                    } else if (msg.role === 'analysis') {
                        // Analysis indicator & sources
                        const analysisBox = document.createElement('div');
                        analysisBox.className = 'flex flex-col gap-1.5 items-center w-full my-1.5 fade-enter';
                        analysisBox.innerHTML = `
                            <div class="bg-[#182229] text-[#8696a0] text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-sm max-w-[95%] text-center">
                                <i data-lucide="loader-2" class="w-3 h-3 animate-spin text-primary-light"></i>
                                <span>${msg.text}</span>
                            </div>
                            <div class="flex flex-wrap justify-center gap-1 w-full sources-list"></div>
                        `;
                        incomingBody.appendChild(analysisBox);
                        lucide.createIcons({ root: analysisBox });
                        void analysisBox.offsetWidth;
                        analysisBox.classList.add('fade-enter-active');
                        incomingBody.scrollTop = incomingBody.scrollHeight;

                        const sList = analysisBox.querySelector('.sources-list');
                        for (const source of msg.sources) {
                            const sItem = document.createElement('div');
                            sItem.className = 'text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1';
                            sItem.innerHTML = `<i data-lucide="check" class="w-2.5 h-2.5 text-emerald-400"></i> ${source}`;
                            sList.appendChild(sItem);
                            lucide.createIcons({ root: sItem });
                            incomingBody.scrollTop = incomingBody.scrollHeight;
                            await delay(250);
                            if (runId !== currentRunId) return;
                        }
                        await delay(400);

                    } else if (msg.role === 'aixa') {
                        // AIXA Message bubble
                        const bubble = document.createElement('div');
                        bubble.className = 'flex justify-start mb-1 w-full fade-enter';
                        bubble.innerHTML = `
                            <div class="bg-[#202c33] text-[#e9edef] px-3 py-2 rounded-xl rounded-tl-none max-w-[90%] text-[13px] leading-snug shadow-sm relative">
                                <svg viewBox="0 0 8 13" width="8" height="13" class="absolute top-0 -left-[7px] text-[#202c33]"><path fill="currentColor" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path></svg>
                                <span class="msg-text break-words"></span>
                            </div>
                        `;
                        incomingBody.appendChild(bubble);
                        void bubble.offsetWidth;
                        bubble.classList.add('fade-enter-active');

                        const textEl = bubble.querySelector('.msg-text');
                        textEl.classList.add('typing-cursor');
                        for (let i = 0; i < msg.text.length; i++) {
                            textEl.textContent += msg.text.charAt(i);
                            incomingBody.scrollTop = incomingBody.scrollHeight;
                            await delay(15);
                            if (runId !== currentRunId) return;
                        }
                        textEl.classList.remove('typing-cursor');

                        // Success Badge
                        const badge = document.createElement('div');
                        badge.className = 'flex items-center gap-1 mt-1 text-[10px] text-emerald-400 font-semibold';
                        badge.innerHTML = `<i data-lucide="check-circle-2" class="w-3 h-3"></i> Resuelto en tiempo real`;
                        bubble.querySelector('div').appendChild(badge);
                        lucide.createIcons({ root: badge });
                        incomingBody.scrollTop = incomingBody.scrollHeight;
                    }
                }

                // Scope Lucide creation only to newly added bubbles
                lucide.createIcons({ root: incomingBody });
            }

            // Navigation Handlers
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + solucionesData.length) % solucionesData.length;
                    renderSlide(currentIndex, 'prev', true);
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % solucionesData.length;
                    renderSlide(currentIndex, 'next', true);
                });
            }

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                const solucionesSec = document.getElementById('soluciones');
                if (!solucionesSec) return;
                const rect = solucionesSec.getBoundingClientRect();
                const inView = rect.top < window.innerHeight && rect.bottom > 0;
                if (!inView) return;

                if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + solucionesData.length) % solucionesData.length;
                    renderSlide(currentIndex, 'prev', true);
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % solucionesData.length;
                    renderSlide(currentIndex, 'next', true);
                }
            });

            // Viewport IntersectionObserver to conserve CPU/RAM resources
            let isSolVisible = false;
            const solObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const wasVisible = isSolVisible;
                    isSolVisible = entry.isIntersecting;
                    if (isSolVisible && !wasVisible) {
                        renderSlide(currentIndex, 'next', false);
                    } else if (!isSolVisible) {
                        currentRunId++; // Cancels typing timeouts when section is out of viewport
                    }
                });
            }, { threshold: 0.1 });

            const solucionesSec = document.getElementById('soluciones');
            if (solucionesSec) {
                solObserver.observe(solucionesSec);
            } else {
                renderSlide(0);
            }
        }

        // =========================================
        // NAVBAR LOGIC (THROTTLED & STATE-CHECKED)
        // =========================================
        function initNavbar() {
            const nav = document.getElementById('main-nav');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            if (!nav) return;

            let isScrolled = false;
            let ticking = false;

            const updateNavbarState = () => {
                const scrolled = window.scrollY > 20;
                if (scrolled !== isScrolled) {
                    isScrolled = scrolled;
                    if (isScrolled) {
                        nav.classList.remove('bg-transparent');
                        nav.classList.add('glass', 'bg-surface/90');
                    } else {
                        nav.classList.add('bg-transparent');
                        nav.classList.remove('glass', 'bg-surface/90');
                    }
                }
                ticking = false;
            };

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateNavbarState);
                    ticking = true;
                }
            }, { passive: true });

            // Mobile menu toggle
            if (mobileBtn && mobileMenu) {
                mobileBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });

                // Close mobile menu on link click
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                    });
                });
            }
        }

        // =========================================
        // QUE ES AIXA LOGIC
        // =========================================
        function initQueEsAixa() {
            const section = document.getElementById('que-es-aixa');
            if (!section) return;

            let hasCompleted = false;
            const cards = document.querySelectorAll('.eco-card');
            const lines = document.querySelectorAll('.eco-line');
            const aixaIcon = document.getElementById('eco-aixa-icon');
            const aixaGlow = document.getElementById('eco-aixa-glow');
            const aixaContainer = document.getElementById('eco-aixa-container');
            const benefits = document.querySelectorAll('.eco-benefit');

            // Set initial state
            updateEcosystem(0);

            // Add hover interactions for individual cards
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    const lineId = card.getAttribute('data-line-id');
                    if (lineId) {
                        const line = document.getElementById(lineId);
                        if (line) line.classList.add('highlight');
                    }
                    if (aixaContainer) {
                        aixaContainer.classList.add('border-primary');
                        aixaContainer.classList.remove('border-primary/30');
                    }
                });

                card.addEventListener('mouseleave', () => {
                    const lineId = card.getAttribute('data-line-id');
                    if (lineId) {
                        const line = document.getElementById(lineId);
                        if (line) line.classList.remove('highlight');
                    }
                    if (aixaContainer) {
                        aixaContainer.classList.remove('border-primary');
                        aixaContainer.classList.add('border-primary/30');
                    }
                });
            });

            // Hover interaction on AIXA core to highlight EVERYTHING simultaneously
            if (aixaContainer) {
                aixaContainer.classList.add('cursor-pointer');
                aixaContainer.addEventListener('mouseenter', () => {
                    // Highlight all lines
                    lines.forEach(line => line.classList.add('highlight'));
                    // Highlight all cards border
                    cards.forEach(card => {
                        const inner = card.querySelector('div');
                        if (inner) {
                            inner.classList.add('border-primary', 'scale-105');
                            inner.classList.remove('border-white/10');
                        }
                    });
                    // Highlight AIXA Core Border
                    aixaContainer.classList.add('border-primary');
                    aixaContainer.classList.remove('border-primary/30');
                });

                aixaContainer.addEventListener('mouseleave', () => {
                    // Remove highlight from lines
                    lines.forEach(line => line.classList.remove('highlight'));
                    // Remove highlight from cards
                    cards.forEach(card => {
                        const inner = card.querySelector('div');
                        if (inner) {
                            inner.classList.remove('border-primary', 'scale-105');
                            inner.classList.add('border-white/10');
                        }
                    });
                    // Reset AIXA Core Border
                    aixaContainer.classList.remove('border-primary');
                    aixaContainer.classList.add('border-primary/30');
                });
            }

            let hasStarted = false;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasStarted) {
                        hasStarted = true;
                        observer.disconnect();
                        playEcosystemAnimation();
                    }
                });
            }, { threshold: 0.2 });

            observer.observe(section);

            function playEcosystemAnimation() {
                const duration = 3500; // 3.5s smooth time-based animation
                const startTime = performance.now();

                function animate(currentTime) {
                    const elapsed = currentTime - startTime;
                    let progress = Math.min(elapsed / duration, 1);

                    updateEcosystem(progress);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                }

                requestAnimationFrame(animate);
            }

            function updateEcosystem(p) {
                const lineIdsOrdered = [
                    'line-docs',
                    'line-crm',
                    'line-db',
                    'line-erp',
                    'line-inv',
                    'line-api',
                    'line-mail',
                    'line-other'
                ];

                // 1. Cards (0 to 0.25): Floating to Organized
                let pCards = Math.min(Math.max(p / 0.25, 0), 1);
                pCards = 1 - Math.pow(1 - pCards, 3); // Ease-out

                cards.forEach(card => {
                    card.style.transform = `translate(calc(-50% + var(--dx) * ${1 - pCards}), calc(-50% + var(--dy) * ${1 - pCards})) scale(${0.9 + 0.1 * pCards})`;
                    card.style.opacity = pCards;
                    card.style.filter = `blur(${(1 - pCards) * 8}px)`;
                });

                // 2. Lines (0.25 to 0.75): Sequential Line Connections (One by One)
                const startP = 0.25;
                const endP = 0.75;
                const totalWindow = endP - startP;
                const itemCount = lineIdsOrdered.length; // 8
                const lineDuration = 0.10; // Duration per line
                const step = (totalWindow - lineDuration) / (itemCount - 1);

                lineIdsOrdered.forEach((id, index) => {
                    const line = document.getElementById(id);
                    if (!line) return;

                    const lineStart = startP + index * step;
                    let pLine = Math.min(Math.max((p - lineStart) / lineDuration, 0), 1);
                    // Smoothstep for fluid drawing
                    let easedPLine = pLine * pLine * (3 - 2 * pLine);

                    line.style.strokeDashoffset = 1 - easedPLine;

                    // Subtle card border highlight while line is actively connecting
                    const card = document.querySelector(`[data-line-id="${id}"]`);
                    if (card) {
                        const inner = card.querySelector('div');
                        if (inner && !card.matches(':hover') && (!aixaContainer || !aixaContainer.matches(':hover'))) {
                            if (pLine > 0 && pLine < 1) {
                                inner.classList.add('border-primary/60');
                                inner.classList.remove('border-white/10');
                            } else {
                                inner.classList.remove('border-primary/60');
                                inner.classList.add('border-white/10');
                            }
                        }
                    }
                });

                // 3. AIXA Node (0.50 to 0.80): Activate progressively as lines arrive
                let pAixa = Math.min(Math.max((p - 0.50) / 0.30, 0), 1);
                aixaIcon.style.opacity = 0.5 + 0.5 * pAixa;

                let currentGlow = pAixa * 0.8;
                window.currentAixaGlowOpacity = currentGlow;

                if (aixaContainer && !aixaContainer.matches(':hover')) {
                    aixaGlow.style.opacity = currentGlow;
                }

                if (pAixa > 0.5) {
                    aixaIcon.classList.add('text-white');
                    aixaIcon.classList.remove('text-primary');
                } else {
                    aixaIcon.classList.remove('text-white');
                    aixaIcon.classList.add('text-primary');
                }

                // 4. Benefits (0.75 to 0.95): Fade in bottom cards smoothly
                let pBen = Math.min(Math.max((p - 0.75) / 0.20, 0), 1);
                benefits.forEach((ben, i) => {
                    let benP = Math.min(Math.max((pBen - i * 0.15) / 0.7, 0), 1);
                    ben.style.opacity = benP;
                    ben.style.transform = `translateY(${(1 - benP) * 20}px)`;
                });
            }
        }

        // =========================================
        // CONVERSATION DEMO LOGIC
        // =========================================
        const demoScenarios = [
            {
                name: "Atención al Cliente",
                messages: [
                    { role: "user", text: "Hola, ¿cuál es la política de devolución para equipos electrónicos adquiridos hace 15 días?" },
                    { role: "analysis", text: "Analizando conocimiento empresarial...", sources: ["Manual de Políticas v2.1", "Historial de Compras (CRM)", "Condiciones de Garantía"] },
                    { role: "aixa", text: "Hola. Según la sección 4 de nuestra política, los equipos electrónicos tienen un periodo de devolución de 30 días. Tu compra está dentro del plazo." },
                    { role: "user", text: "Perfecto, ¿puedes generar la etiqueta de devolución?" },
                    { role: "aixa", text: "¡Claro! He generado la etiqueta de devolución y la he enviado a tu correo registrado. Tienes 5 días hábiles para entregar el paquete." }
                ]
            },
            {
                name: "Comercial",
                messages: [
                    { role: "user", text: "Necesito el último caso de éxito del sector logístico para enviarlo a un prospecto." },
                    { role: "analysis", text: "Buscando documentos y casos de éxito...", sources: ["Base Documental (SharePoint)", "Directorio de Casos de Éxito", "CRM (Oportunidades)"] },
                    { role: "aixa", text: "El caso más reciente es la optimización de rutas con 'Logística Global S.A.', donde logramos reducir costos un 15%." },
                    { role: "user", text: "Excelente. ¿Puedes enviarme un PDF resumido?" },
                    { role: "aixa", text: "He generado un PDF de 2 páginas con las métricas clave y te lo he enviado por correo para que lo compartas con el prospecto." }
                ]
            },
            {
                name: "Recursos Humanos",
                messages: [
                    { role: "user", text: "¿Cuántos días de vacaciones me quedan disponibles este año?" },
                    { role: "analysis", text: "Consultando bases de datos de RRHH...", sources: ["ERP (Módulo RRHH)", "Política de Vacaciones", "Expediente del Empleado"] },
                    { role: "aixa", text: "He consultado el sistema. Tienes 12 días de vacaciones disponibles para este año." },
                    { role: "user", text: "¿Cómo los solicito para la próxima semana?" },
                    { role: "aixa", text: "Para solicitarlos, debes ingresar las fechas en el Portal del Empleado. Te he enviado el enlace directo por chat interno. La aprobación de tu manager suele tomar 24 horas." }
                ]
            },
            {
                name: "Educación",
                messages: [
                    { role: "user", text: "¿Cuáles son los requisitos de grado para el estudiante Juan Pérez de Ingeniería?" },
                    { role: "analysis", text: "Revisando sistema académico y expediente...", sources: ["Sistema Académico", "Expediente Estudiantil", "Reglamento de Grados"] },
                    { role: "aixa", text: "Juan Pérez ha completado todos los créditos académicos. Solo le falta entregar el certificado de inglés B2." },
                    { role: "user", text: "Envíale un correo solicitando el certificado antes del viernes." },
                    { role: "aixa", text: "Correo enviado a Juan Pérez con las instrucciones y el enlace para subir el certificado de inglés." }
                ]
            },
            {
                name: "Salud",
                messages: [
                    { role: "user", text: "Necesito agendar una cita de cardiología para la paciente María Gómez esta semana." },
                    { role: "analysis", text: "Buscando disponibilidad de especialistas...", sources: ["Agenda Médica", "Historial Clínico", "Directorio de Especialistas"] },
                    { role: "aixa", text: "El Dr. Ramírez tiene disponibilidad este jueves a las 10:00 AM y a las 4:00 PM." },
                    { role: "user", text: "Agenda la cita para el jueves a las 10:00 AM y envíale la confirmación." },
                    { role: "aixa", text: "Cita confirmada para el jueves a las 10:00 AM. Se ha enviado un mensaje por WhatsApp a la paciente con el recordatorio y las indicaciones." }
                ]
            }
        ];

        async function initConversationDemo() {
            const demoBody = document.getElementById('demo-body');
            const chipsContainer = document.getElementById('demo-chips');

            const delay = ms => new Promise(res => setTimeout(res, ms));

            let currentRunId = 0;
            let currentScenarioIndex = 0;

            // Build chips
            demoScenarios.forEach((scenario, index) => {
                const btn = document.createElement('button');
                btn.className = 'px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium text-muted hover:text-white hover:border-white/40 transition-all bg-surface/50 glass chip-btn';
                btn.textContent = scenario.name;
                btn.onclick = () => {
                    if (currentScenarioIndex !== index) {
                        currentScenarioIndex = index;
                        runScenarioFlow();
                    }
                };
                chipsContainer.appendChild(btn);
            });

            const updateChips = (index) => {
                const chips = chipsContainer.querySelectorAll('.chip-btn');
                chips.forEach((c, i) => {
                    if (i === index) {
                        c.classList.remove('text-muted', 'border-white/20', 'bg-surface/50');
                        c.classList.add('text-white', 'border-primary', 'bg-primary/20');
                    } else {
                        c.classList.add('text-muted', 'border-white/20', 'bg-surface/50');
                        c.classList.remove('text-white', 'border-primary', 'bg-primary/20');
                    }
                });
            };

            const runScenarioFlow = async () => {
                currentRunId++; // invalidate previous runs
                const runId = currentRunId;

                const scenario = demoScenarios[currentScenarioIndex];
                updateChips(currentScenarioIndex);

                // Fade out body
                demoBody.style.opacity = '0';
                demoBody.style.transition = 'opacity 0.3s ease';
                await delay(300);
                if (runId !== currentRunId) return;

                // Reset
                demoBody.innerHTML = '';
                await delay(300);
                if (runId !== currentRunId) return;

                // Inject the use case banner at the top of the chat
                const bannerCtn = document.createElement('div');
                bannerCtn.className = 'w-full flex justify-center mb-4 mt-2 fade-enter';
                bannerCtn.innerHTML = `
                    <div class="bg-[#182229] text-[#8696a0] text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider font-medium shadow-sm flex items-center gap-2">
                        <i data-lucide="briefcase" class="w-3.5 h-3.5"></i>
                        <span>${scenario.name}</span>
                    </div>
                `;
                demoBody.appendChild(bannerCtn);
                lucide.createIcons({ root: bannerCtn });
                void bannerCtn.offsetWidth;
                bannerCtn.classList.add('fade-enter-active');

                demoBody.style.opacity = '1';
                await delay(500);
                if (runId !== currentRunId) return;

                for (const msg of scenario.messages) {
                    if (msg.role === 'user') {
                        // User message (Right side, WhatsApp green)
                        const ctn = document.createElement('div');
                        ctn.className = 'flex justify-end fade-enter mb-1 w-full';
                        ctn.innerHTML = `
                            <div class="bg-[#005c4b] text-[#e9edef] px-3 py-2 rounded-lg rounded-tr-none max-w-[85%] text-[14.5px] leading-snug shadow-sm relative">
                                <span class="msg-text break-words"></span>
                                <svg viewBox="0 0 8 13" width="8" height="13" class="absolute top-0 -right-[7px] text-[#005c4b]"><path fill="currentColor" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path></svg>
                            </div>
                        `;
                        demoBody.appendChild(ctn);
                        // Trigger reflow
                        void ctn.offsetWidth;
                        ctn.classList.add('fade-enter-active');
                        await delay(300);
                        if (runId !== currentRunId) return;

                        const textEl = ctn.querySelector('.msg-text');
                        textEl.classList.add('typing-cursor');
                        for (let i = 0; i < msg.text.length; i++) {
                            textEl.textContent += msg.text.charAt(i);
                            demoBody.scrollTop = demoBody.scrollHeight;
                            await delay(20);
                            if (runId !== currentRunId) return;
                        }
                        textEl.classList.remove('typing-cursor');
                        await delay(800);

                    } else if (msg.role === 'analysis') {
                        // Analysis Phase (Center)
                        const ctn = document.createElement('div');
                        ctn.className = 'flex flex-col gap-2 fade-enter items-center w-full my-2';
                        ctn.innerHTML = `
                            <div class="bg-[#182229] text-[#8696a0] text-[11.5px] px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm max-w-[90%] text-center">
                                <i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i>
                                <span>${msg.text}</span>
                            </div>
                            <div class="flex flex-col gap-1 w-full items-center sources-list"></div>
                        `;
                        demoBody.appendChild(ctn);
                        lucide.createIcons({ root: ctn });
                        void ctn.offsetWidth;
                        ctn.classList.add('fade-enter-active');
                        demoBody.scrollTop = demoBody.scrollHeight;
                        await delay(500);
                        if (runId !== currentRunId) return;

                        const sList = ctn.querySelector('.sources-list');
                        for (const source of msg.sources) {
                            const sEl = document.createElement('div');
                            sEl.className = 'text-[11px] text-[#8696a0] bg-[#182229]/60 px-2 py-1 rounded flex items-center gap-1.5 opacity-0 transform translate-y-1 transition-all duration-300';
                            sEl.innerHTML = `<i data-lucide="check-circle-2" class="w-3 h-3 text-[#00a884]"></i> ${source}`;
                            sList.appendChild(sEl);
                            lucide.createIcons({ root: sEl });
                            void sEl.offsetWidth;
                            sEl.classList.remove('opacity-0', 'translate-y-2');
                            demoBody.scrollTop = demoBody.scrollHeight;
                            await delay(600);
                            if (runId !== currentRunId) return;
                        }
                        await delay(800);

                    } else if (msg.role === 'aixa') {
                        // AIXA typing indicator
                        const typingIndicator = document.createElement('div');
                        typingIndicator.className = 'flex justify-start fade-enter mb-1 w-full';
                        typingIndicator.innerHTML = `
                            <div class="bg-[#202c33] text-[#8696a0] px-3 py-2 rounded-lg rounded-tl-none text-[13px] italic flex items-center gap-2 shadow-sm relative">
                                <svg viewBox="0 0 8 13" width="8" height="13" class="absolute top-0 -left-[7px] text-[#202c33]"><path fill="currentColor" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path></svg>
                                <i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i>
                                AIXA está escribiendo...
                            </div>
                        `;
                        demoBody.appendChild(typingIndicator);
                        lucide.createIcons({ root: typingIndicator });
                        void typingIndicator.offsetWidth;
                        typingIndicator.classList.add('fade-enter-active');
                        demoBody.scrollTop = demoBody.scrollHeight;
                        await delay(1000);
                        if (runId !== currentRunId) return;

                        typingIndicator.remove(); // remove indicator

                        // AIXA message (Left side, WhatsApp dark grey)
                        const ctn = document.createElement('div');
                        ctn.className = 'flex justify-start fade-enter mb-1 w-full';
                        ctn.innerHTML = `
                            <div class="bg-[#202c33] text-[#e9edef] px-3 py-2 rounded-lg rounded-tl-none max-w-[85%] text-[14.5px] leading-snug shadow-sm relative">
                                <svg viewBox="0 0 8 13" width="8" height="13" class="absolute top-0 -left-[7px] text-[#202c33]"><path fill="currentColor" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path></svg>
                                <span class="msg-text break-words"></span>
                            </div>
                        `;
                        demoBody.appendChild(ctn);
                        void ctn.offsetWidth;
                        ctn.classList.add('fade-enter-active');

                        const textEl = ctn.querySelector('.msg-text');
                        textEl.classList.add('typing-cursor');
                        for (let i = 0; i < msg.text.length; i++) {
                            textEl.textContent += msg.text.charAt(i);
                            demoBody.scrollTop = demoBody.scrollHeight;
                            await delay(20);
                            if (runId !== currentRunId) return;
                        }
                        textEl.classList.remove('typing-cursor');
                        await delay(1000);
                    }
                    if (runId !== currentRunId) return;
                }

                // End of scenario
                await delay(6000); // Read time
                if (runId !== currentRunId) return;

                // Start next automatically if not interrupted
                currentScenarioIndex = (currentScenarioIndex + 1) % demoScenarios.length;
                runScenarioFlow();
            };

            // Viewport IntersectionObserver to pause loop when scrolled away
            let isHeroVisible = false;
            const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const wasVisible = isHeroVisible;
                    isHeroVisible = entry.isIntersecting;
                    if (isHeroVisible && !wasVisible) {
                        runScenarioFlow();
                    } else if (!isHeroVisible) {
                        currentRunId++; // Halts character typing delays and prevents CPU wakeups
                    }
                });
            }, { threshold: 0.1 });

            const heroSection = document.getElementById('hero') || document.getElementById('inicio');
            if (heroSection) {
                heroObserver.observe(heroSection);
            } else {
                runScenarioFlow();
            }
        }

        // ----------------------------------------------------
        // NUESTRO DIFERENCIAL ANIMATION
        // ----------------------------------------------------
        function initDiferencial() {
            const difSection = document.getElementById('diferencial');
            if (!difSection) return;

            const steps = difSection.querySelectorAll('.dif-step');
            let isDifAnimating = false;
            let difAnimationTimeout;

            const resetDifAnimation = () => {
                steps.forEach(step => {
                    const dot = step.querySelector('.dif-dot');
                    const iconBg = step.querySelector('.dif-icon-bg');
                    const icon = step.querySelector('.dif-icon');
                    const line = step.querySelector('.dif-line');
                    const title = step.querySelector('.dif-title');
                    const desc = step.querySelector('.dif-desc');

                    dot.className = 'absolute left-[2px] top-[26px] w-[8px] h-[8px] rounded-full bg-white/10 z-20 transition-all duration-300 dif-dot';
                    iconBg.className = 'w-12 h-12 rounded-full bg-white/5 border border-white/10 shrink-0 ml-8 flex items-center justify-center transition-all duration-300 dif-icon-bg relative z-20';
                    icon.className = 'w-5 h-5 text-slate-500 transition-colors duration-300 dif-icon';

                    if (line) {
                        line.style.height = '0';
                    }

                    title.className = 'text-base font-bold text-slate-400 transition-colors duration-300 dif-title';
                    desc.className = 'text-sm text-slate-500 mt-1 transition-colors duration-300 dif-desc';
                });
                isDifAnimating = false;
            };

            const playDifAnimation = async () => {
                if (isDifAnimating) return;
                isDifAnimating = true;

                const delay = (ms) => new Promise(r => { difAnimationTimeout = setTimeout(r, ms) });

                // Pequeña pausa inicial para asegurar que el scroll esté asentado
                await delay(400);
                if (!isDifAnimating) return;

                for (let i = 0; i < steps.length; i++) {
                    if (!isDifAnimating) return;

                    const step = steps[i];
                    const dot = step.querySelector('.dif-dot');
                    const iconBg = step.querySelector('.dif-icon-bg');
                    const icon = step.querySelector('.dif-icon');
                    const line = step.querySelector('.dif-line');
                    const title = step.querySelector('.dif-title');
                    const desc = step.querySelector('.dif-desc');

                    dot.classList.remove('bg-white/10');
                    dot.classList.add('bg-primary-light', 'shadow-[0_0_10px_rgba(96,165,250,0.8)]');

                    iconBg.classList.remove('bg-white/5', 'border-white/10');
                    iconBg.classList.add('bg-primary/20', 'border-primary/40', 'shadow-[0_0_20px_rgba(37,99,235,0.25)]');

                    icon.classList.remove('text-slate-500');
                    icon.classList.add('text-primary-light');

                    title.classList.remove('text-slate-400');
                    title.classList.add('text-white');

                    desc.classList.remove('text-slate-500');
                    desc.classList.add('text-slate-300');

                    if (line) {
                        line.style.height = 'calc(100% + 2px)';
                    }

                    await delay(600);
                }
            };

            const difObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        playDifAnimation();
                    } else {
                        clearTimeout(difAnimationTimeout);
                        resetDifAnimation();
                    }
                });
            }, { threshold: 0.5 });

            difObserver.observe(difSection);
        }

        // =========================================
        // INTEGRACIONES CIRCULAR ORBIT ANIMATION
        // =========================================
        const integracionesData = [
            { id: "whatsapp", name: "WhatsApp Business", img: "media/images/whatsapp-bussiness.png" },
            { id: "crm", name: "CRM", img: "media/images/crm.png" },
            { id: "erp", name: "ERP", img: "media/images/erp.png" },
            { id: "calendar", name: "Google Calendar", img: "media/images/google-calendar.png" },
            { id: "m365", name: "Microsoft 365", img: "media/images/Microsoft-365.png" },
            { id: "email", name: "Correo Electrónico", img: "media/images/correo-electronico.png" },
            { id: "db", name: "Bases de Datos", img: "media/images/base-de-datos.png" },
            { id: "api", name: "APIs", img: "media/images/api.png" },
            { id: "sistemas", name: "Sistemas Empresariales", img: "media/images/sistemas-empresariales.png" }
        ];

        function initIntegraciones() {
            const section = document.getElementById('integraciones');
            const container = document.getElementById('integ-cards-container');
            const centerCore = document.getElementById('integ-center-core');
            if (!section || !container || !centerCore) return;

            // Mount the 9 cards dynamically (full bleed image + hover tooltip)
            container.innerHTML = '';
            const cardElements = [];

            integracionesData.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'integ-card';
                card.id = `integ-card-${index}`;
                card.setAttribute('data-name', item.name);

                card.innerHTML = `
                    <div class="integ-card-img-wrapper">
                        <img src="${item.img}" alt="${item.name}" loading="lazy">
                    </div>
                    <span class="integ-card-tooltip">${item.name}</span>
                `;

                container.appendChild(card);
                cardElements.push(card);
            });

            let isOrbitPaused = false;
            let currentOrbitAngle = 0;
            let orbitRafId = null;

            // Hover interactions: Pause rotation when user hovers any card to interact
            cardElements.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    isOrbitPaused = true;
                });
                card.addEventListener('mouseleave', () => {
                    isOrbitPaused = false;
                });
            });

            // Calculate radial target coordinates based on viewport width
            function getRadius() {
                const w = window.innerWidth;
                if (w < 480) return 160;
                if (w < 640) return 205;
                if (w < 768) return 255;
                if (w < 1024) return 295;
                return 320;
            }

            function updateCardPositions(progressArray) {
                const radius = getRadius();
                const total = integracionesData.length;
                const startAngle = -Math.PI / 2; // Start at 12 o'clock

                cardElements.forEach((card, i) => {
                    const p = progressArray[i]; // 0 to 1
                    const angle = startAngle + (i * (2 * Math.PI / total));
                    const targetX = Math.cos(angle) * radius;
                    const targetY = Math.sin(angle) * radius;

                    if (p <= 0) {
                        card.style.opacity = '0';
                        card.style.transform = `translate(calc(-50% + 750px), -50%) scale(0.6)`;
                        card.style.filter = 'blur(6px)';
                    } else if (p < 0.45) {
                        // Phase 1: Parade from right towards center (Gentle, slow glide)
                        const pEntry = p / 0.45;
                        const easeEntry = 1 - Math.pow(1 - pEntry, 3.2); // Smooth deceleration
                        const curX = 750 * (1 - easeEntry);
                        const curY = 0;
                        const curScale = 0.6 + 0.35 * easeEntry;
                        card.style.opacity = Math.min(easeEntry * 1.5, 1);
                        card.style.transform = `translate(calc(-50% + ${curX.toFixed(2)}px), calc(-50% + ${curY.toFixed(2)}px)) scale(${curScale.toFixed(2)})`;
                        card.style.filter = `blur(${((1 - easeEntry) * 4).toFixed(1)}px)`;
                    } else {
                        // Phase 2: Slow, graceful fluid fan-out from center to radial circular positions
                        const pOrbit = (p - 0.45) / 0.55;
                        const easeOrbit = 1 - Math.pow(1 - pOrbit, 3); // Soft cinematic glide

                        const curX = targetX * easeOrbit;
                        const curY = targetY * easeOrbit;
                        const curScale = 0.95 + 0.05 * easeOrbit;

                        card.style.opacity = '1';
                        card.style.filter = 'blur(0px)';
                        card.style.setProperty('--tx', `${targetX.toFixed(2)}px`);
                        card.style.setProperty('--ty', `${targetY.toFixed(2)}px`);
                        card.style.setProperty('--s', `${curScale.toFixed(2)}`);
                        // Upright orientation (no rotation tilt, full legibility)
                        card.style.transform = `translate(calc(-50% + ${curX.toFixed(2)}px), calc(-50% + ${curY.toFixed(2)}px)) scale(${curScale.toFixed(2)})`;
                    }
                });
            }

            let hasAnimated = false;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        hasAnimated = true;
                        observer.disconnect();
                        playIntegrationsSequence();
                    }
                });
            }, { threshold: 0.15 });

            observer.observe(section);

            function startContinuousOrbit() {
                if (orbitRafId) cancelAnimationFrame(orbitRafId);

                function orbitTick() {
                    if (!isOrbitPaused) {
                        // Smooth, synchronized continuous rotation speed (~0.17 deg per frame)
                        currentOrbitAngle += 0.003;
                        const radius = getRadius();
                        const total = integracionesData.length;
                        const startAngle = -Math.PI / 2;

                        cardElements.forEach((card, i) => {
                            const angle = startAngle + (i * (2 * Math.PI / total)) + currentOrbitAngle;
                            const curX = Math.cos(angle) * radius;
                            const curY = Math.sin(angle) * radius;

                            card.style.setProperty('--tx', `${curX.toFixed(2)}px`);
                            card.style.setProperty('--ty', `${curY.toFixed(2)}px`);
                            card.style.transform = `translate(calc(-50% + ${curX.toFixed(2)}px), calc(-50% + ${curY.toFixed(2)}px))`;
                        });
                    }
                    orbitRafId = requestAnimationFrame(orbitTick);
                }

                orbitRafId = requestAnimationFrame(orbitTick);
            }

            function playIntegrationsSequence() {
                const totalCards = cardElements.length;
                const staggerDelay = 300; // Slower, distinct stagger so user clearly sees each card entering
                const singleCardDuration = 3800; // Slower flight duration per card
                const totalDuration = (totalCards * staggerDelay) + singleCardDuration + 600;
                const startTime = performance.now();

                function animate(now) {
                    const elapsed = now - startTime;
                    const progressArray = [];

                    for (let i = 0; i < totalCards; i++) {
                        const cardStart = i * staggerDelay;
                        if (elapsed < cardStart) {
                            progressArray.push(0);
                        } else {
                            const cardElapsed = elapsed - cardStart;
                            const p = Math.min(cardElapsed / singleCardDuration, 1);
                            progressArray.push(p);
                        }
                    }

                    updateCardPositions(progressArray);

                    // Emerge Center Core (0.5s faster as requested)
                    if (elapsed >= (totalCards * staggerDelay) + 2700) {
                        centerCore.classList.add('is-active');
                    }

                    if (elapsed < totalDuration) {
                        requestAnimationFrame(animate);
                    } else {
                        // Lock final radial positions and center core, then transition smoothly into continuous synchronized orbit
                        updateCardPositions(Array(totalCards).fill(1));
                        centerCore.classList.add('is-active');
                        startContinuousOrbit();
                    }
                }

                requestAnimationFrame(animate);
            }
        }

