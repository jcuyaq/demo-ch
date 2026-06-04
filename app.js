document.addEventListener('DOMContentLoaded', () => {
    // Translation Dictionary
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_about: "Nosotros",
            nav_services: "Servicios",
            nav_growth: "Expansión",
            nav_calc: "Cotizador",
            nav_contact: "Contacto",
            btn_lang: "EN",
            btn_consult: "Agendar Consulta",
            hero_tag: '<span class="pulse"></span> Revolución Industrial Agroalimentaria',
            hero_title: 'Impulsando la <span class="gradient-text">Industria 4.0</span> en la Agroindustria de EE.UU.',
            hero_desc: "Ayudamos a los fabricantes medianos y pequeños de alimentos a modernizar sus operaciones mediante la integración digital, optimización de la cadena de frío y gobernanza estratégica robusta.",
            btn_start: "Iniciar Transformación",
            btn_services: "Ver Servicios",
            stat_years_lbl: "Años de Experiencia",
            stat_scale_lbl: "Escalamiento de Producción",
            stat_revenue_lbl: "Gobernanza Corporativa",
            metric_oee_lbl: "Eficiencia Operativa",
            metric_oee_desc: "Mejora OEE proyectada en 1er año",
            metric_spoilage_lbl: "Cadena de Frío IoT",
            metric_spoilage_desc: "Excursiones térmicas con monitoreo activo",
            ceo_title_card: "Fundador y CEO",
            about_badge_title: "IE Business School & MBA Tulane",
            about_badge_desc: "Arquitecto SAP & Especialista ISO 22000",
            about_subtitle: "Liderazgo Estratégico",
            about_title: "El Puente entre la Estrategia del Directorio y la Ejecución de Planta",
            about_text_1: "EFCHA CONSULTANTS, liderada por Eliot Felipe Chahuan, aporta la experiencia de más de tres décadas transformando corporaciones agroindustriales líderes en Latinoamérica, como Gloria S.A. ($1.2B en ingresos) y San Fernando S.A. ($900M en ingresos).",
            about_text_2: "Nuestra misión es resolver la brecha digital en los fabricantes agroalimentarios estadounidenses, permitiéndoles reemplazar sistemas heredados y manuales por infraestructuras ágiles e interconectadas.",
            outcome_1_title: "Soberanía Tecnológica & Creación de Empleo",
            outcome_1_desc: "Modernización de plantas rurales con IoT y automatización para revertir la fuga de talento.",
            outcome_2_title: "Renacimiento de la Cadena de Suministro Doméstica",
            outcome_2_desc: "Reducción del trayecto del campo a la mesa mediante optimización de inventarios con IA y redes de micro-distribución.",
            outcome_3_title: "Reclamación del Mercado Global",
            outcome_3_desc: "Capacitación y adecuación de plantas con procesos eficientes para posicionar productos de EE.UU. como exportaciones premium.",
            services_subtitle: "Nuestra Oferta",
            services_title: "Servicios de Consultoría Especializada",
            services_desc: "Diseñamos e implementamos soluciones pragmáticas y de alto retorno de inversión que modernizan sus plantas de producción.",
            service_1_title: "Transformación Digital e Industrial",
            service_1_desc: "Despliegue de sistemas ERP especializados en alimentos (SAP/Odoo) para trazabilidad a nivel de lotes, integración de sensores IoT para telemetría crítica en tiempo real y digitalización completa de flujos de trabajo en planta mediante tabletas.",
            rate_label: "Tarifa Promedio",
            service_2_title: "Optimización Operacional",
            service_2_desc: "Reducción sistemática de desperdicios mediante Value Stream Mapping, eventos Kaizen y TPM. Fortalecemos sus sistemas de calidad para certificación internacional (ISO 22000, FSSC 22000) e integramos flujos de desviación en tiempo real y CAPA.",
            service_3_title: "Cadena de Suministro y de Frío",
            service_3_desc: "Ingeniería térmica y telemetría en tiempo real para evitar roturas de frío. Optimizamos redes logísticas descentralizadas mediante modelos de simulación y creamos planes detallados de mitigación de riesgos ante imprevistos del entorno.",
            timeline_subtitle: "Plan de Expansión",
            timeline_title: "Estrategia Geográfica Phased 5 Años",
            timeline_desc: "Estructuramos un crecimiento sostenido para atender de manera directa las principales zonas agroindustriales del país.",
            timeline_y1_title: "Sur y Centro de Florida",
            timeline_y1_desc: "Lanzamiento oficial enfocado en procesadores de alimentos del corredor agroindustrial consolidado de Florida, estableciendo casos de estudio iniciales.",
            timeline_y2_title: "Expansión a Georgia",
            timeline_y2_desc: "Ampliación de servicios a integradores avícolas y procesadores de cultivos especiales en Georgia, aprovechando la infraestructura consolidada en Florida.",
            timeline_y3_title: "Región de las Carolinas",
            timeline_y3_desc: "Ingreso a los mercados de procesamiento de carne de cerdo y empaque estacional de las Carolinas, abordando sus particulares desafíos logísticos.",
            timeline_y4_title: "Costa Este Ampliada",
            timeline_y4_desc: "Atención a cooperativas lecheras y empresas productoras de comidas listas en un corredor extendido que abarca múltiples estados orientales.",
            timeline_y5_title: "Escala Nacional",
            timeline_y5_desc: "Presencia a nivel nacional, apuntando a los molinos de granos del Medio Oeste y los distritos de cultivos orgánicos del Valle Central de California.",
            calc_subtitle: "Cotizador en Línea",
            calc_title: "Estime el Valor de su Proyecto",
            calc_desc: "Ajuste las variables para obtener una aproximación transparente del costo del proyecto según el tipo de servicio y horas de consultoría.",
            calc_label_service: "Solución Requerida",
            calc_option_1: "Transformación Digital e Industrial ($225/hr)",
            calc_option_2: "Optimización Operacional ($175/hr)",
            calc_option_3: "Cadena de Suministro y Frío ($200/hr)",
            calc_option_4: "Paquete Completo Blended ($200/hr)",
            calc_label_hours: "Horas Estimadas de Consultoría",
            calc_label_weeks: "Duración del Proyecto",
            calc_results_title: "Inversión Estimada",
            calc_results_period: "Valor Total Facturado",
            calc_break_rate: "Tarifa por Hora:",
            calc_break_hours: "Total Horas:",
            calc_break_sub: "Subtotal:",
            calc_break_disc: "Descuento por Volumen:",
            calc_break_net: "Total Neto:",
            calc_btn_formal: "Solicitar Propuesta Formal",
            contact_subtitle: "Póngase en Contacto",
            contact_title: "Comencemos a Diseñar su Planta Inteligente",
            contact_desc: "Complete el formulario para programar una llamada de diagnóstico inicial de 30 minutos sin costo con nuestro equipo técnico.",
            contact_office_title: "Oficina Central",
            contact_office_desc: "Fort Lauderdale, FL (Corredor Industrial del Sureste)",
            contact_email_title: "Correo Electrónico",
            contact_form_name: "Nombre Completo",
            contact_form_company: "Compañía / Planta",
            contact_form_email: "Correo Profesional",
            contact_form_phone: "Teléfono de Contacto",
            contact_form_needs: "Describa sus Necesidades Operacionales",
            contact_btn_submit: "Enviar Solicitud de Diagnóstico",
            footer_desc: "Acompañamos a los procesadores agroalimentarios en su camino a la modernización industrial bajo el modelo de la Industria 4.0.",
            footer_nav_lbl: "Navegación",
            footer_sup_lbl: "Soporte",
            footer_calc_link: "Cotizar Proyecto",
            footer_gloria_link: "Caso de Éxito Gloria S.A.",
            footer_copyright: "&copy; 2026 EFCHA CONSULTANTS. Todos los derechos reservados. Fort Lauderdale, Florida, EE.UU.",
            footer_tagline: "Dirección Estratégica para Pymes Agroindustriales",
            placeholder_name: "Ej. Juan Pérez",
            placeholder_company: "Ej. Lacteos del Sur",
            placeholder_email: "nombre@compania.com",
            placeholder_phone: "+1 (555) 000-0000",
            placeholder_msg: "Cuéntenos brevemente los desafíos que desea solucionar en su línea de producción...",
            alert_contact_success: "¡Gracias por contactar a EFCHA CONSULTANTS! Nos comunicaremos con usted en la brevedad posible para agendar su consulta inicial."
        },
        en: {
            nav_home: "Home",
            nav_about: "About Us",
            nav_services: "Services",
            nav_growth: "Expansion",
            nav_calc: "Calculator",
            nav_contact: "Contact",
            btn_lang: "ES",
            btn_consult: "Book Consultation",
            hero_tag: '<span class="pulse"></span> Agro-Industrial Revolution',
            hero_title: 'Powering <span class="gradient-text">Industry 4.0</span> in U.S. Food & Agro-Industry',
            hero_desc: "We help small and mid-sized food manufacturers modernize their operations through digital integration, cold chain optimization, and robust strategic board-level governance.",
            btn_start: "Start Transformation",
            btn_services: "View Services",
            stat_years_lbl: "Years of Experience",
            stat_scale_lbl: "Production Scaling",
            stat_revenue_lbl: "Corporate Governance",
            metric_oee_lbl: "Operational OEE",
            metric_oee_desc: "Projected OEE gain in year 1",
            metric_spoilage_lbl: "IoT Cold Chain",
            metric_spoilage_desc: "Thermal excursions with active monitoring",
            ceo_title_card: "Founder & CEO",
            about_badge_title: "IE Business School & Tulane MBA",
            about_badge_desc: "SAP Architect & ISO 22000 Specialist",
            about_subtitle: "Strategic Leadership",
            about_title: "The Bridge Between Boardroom Strategy and Shop-Floor Execution",
            about_text_1: "EFCHA CONSULTANTS, led by Eliot Felipe Chahuan, brings the expertise of over three decades transforming leading agro-industrial conglomerates in Latin America, including Gloria S.A. ($1.2B revenue) and San Fernando S.A. ($900M revenue).",
            about_text_2: "Our mission is to solve the digital gap in American food and beverage manufacturers, enabling them to transition from legacy, manual processes into agile, data-driven environments.",
            outcome_1_title: "Tech Sovereignty & Job Creation",
            outcome_1_desc: "Modernizing rural plants with IoT and automation to reverse regional brain drain.",
            outcome_2_title: "Domestic Supply Chain Renaissance",
            outcome_2_desc: "Shortening farm-to-fork distances through AI-driven inventory optimization and micro-fulfillment networks.",
            outcome_3_title: "Global Market Reclamation",
            outcome_3_desc: "Equipping facilities with efficient processes to position U.S. goods as premium exports.",
            services_subtitle: "Our Offerings",
            services_title: "Specialized Consulting Services",
            services_desc: "We design and deploy pragmatic, high-ROI solutions that modernize production facilities.",
            service_1_title: "Digital & Industrial Transformation",
            service_1_desc: "Deployment of food-specific ERP systems (SAP/Odoo) for lot-level traceability, IoT sensors for real-time critical telemetry, and fully digital tablet workflows on the plant floor.",
            rate_label: "Average Rate",
            service_2_title: "Operational Optimization",
            service_2_desc: "Systematic waste reduction utilizing Value Stream Mapping, Kaizen events, and TPM. Quality management fortification for global certification (ISO 22000, FSSC 22000) with real-time deviation workflows.",
            service_3_title: "Supply Chain & Cold Chain",
            service_3_desc: "Thermal management engineering and real-time telemetry to prevent cold breaks. Network optimization via simulation modeling and proactive risk mapping for supply chains.",
            timeline_subtitle: "Expansion Plan",
            timeline_title: "Phased 5-Year Geographic Strategy",
            timeline_desc: "Structured growth to serve major agro-industrial zones directly across the country.",
            timeline_y1_title: "South & Central Florida",
            timeline_y1_desc: "Official launch focusing on food processors in Florida's established agro-industrial corridor, establishing initial client case studies.",
            timeline_y2_title: "Georgia Expansion",
            timeline_y2_desc: "Extending services to poultry integrators and specialty crop processors in Georgia, leveraging Florida's foundation.",
            timeline_y3_title: "The Carolinas Region",
            timeline_y3_desc: "Entering pork processing and seasonal produce packaging sectors in the Carolinas, addressing specific logistical challenges.",
            timeline_y4_title: "Expanded East Coast",
            timeline_y4_desc: "Serving dairy cooperatives and prepared food manufacturers across an extended multi-state Eastern corridor.",
            timeline_y5_title: "National Scale",
            timeline_y5_desc: "Establishing a national footprint targeting Midwest grain mills and California's Central Valley organic districts.",
            calc_subtitle: "Online Quote Calculator",
            calc_title: "Estimate Your Project Value",
            calc_desc: "Adjust variables for a transparent cost estimate based on service type and consulting hours.",
            calc_label_service: "Required Solution",
            calc_option_1: "Digital & Industrial Transformation ($225/hr)",
            calc_option_2: "Operational Optimization ($175/hr)",
            calc_option_3: "Supply Chain & Cold Chain ($200/hr)",
            calc_option_4: "Blended Full Package ($200/hr)",
            calc_label_hours: "Estimated Consulting Hours",
            calc_label_weeks: "Project Duration",
            calc_results_title: "Estimated Investment",
            calc_results_period: "Total Billed Project Value",
            calc_break_rate: "Hourly Rate:",
            calc_break_hours: "Total Hours:",
            calc_break_sub: "Subtotal:",
            calc_break_disc: "Volume Discount:",
            calc_break_net: "Net Total:",
            calc_btn_formal: "Request Formal Proposal",
            contact_subtitle: "Get in Touch",
            contact_title: "Let's Design Your Smart Plant",
            contact_desc: "Complete the form to schedule a free 30-minute initial diagnostic call with our technical team.",
            contact_office_title: "Headquarters",
            contact_office_desc: "Fort Lauderdale, FL (Southeastern Industrial Corridor)",
            contact_email_title: "Email Address",
            contact_form_name: "Full Name",
            contact_form_company: "Company / Facility",
            contact_form_email: "Work Email",
            contact_form_phone: "Contact Phone",
            contact_form_needs: "Describe Your Operational Needs",
            contact_btn_submit: "Submit Diagnostic Request",
            footer_desc: "We support food processors on their journey to industrial modernization under the Industry 4.0 framework.",
            footer_nav_lbl: "Navigation",
            footer_sup_lbl: "Support",
            footer_calc_link: "Project Calculator",
            footer_gloria_link: "Gloria S.A. Success Case",
            footer_copyright: "&copy; 2026 EFCHA CONSULTANTS. All rights reserved. Fort Lauderdale, Florida, USA.",
            footer_tagline: "Strategic Leadership for Agro-Industrial SMEs",
            placeholder_name: "e.g. John Doe",
            placeholder_company: "e.g. Southern Dairy Co.",
            placeholder_email: "name@company.com",
            placeholder_phone: "+1 (555) 000-0000",
            placeholder_msg: "Briefly tell us about the production line challenges you want to solve...",
            alert_contact_success: "Thank you for contacting EFCHA CONSULTANTS! We will get back to you as soon as possible to schedule your initial consultation."
        }
    };

    // Navigation Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Scroll Active Section Link Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Quote Calculator Logic
    const serviceSelect = document.getElementById('calcService');
    const hoursSlider = document.getElementById('calcHours');
    const hoursVal = document.getElementById('hoursVal');
    const weeksSlider = document.getElementById('calcWeeks');
    const weeksVal = document.getElementById('weeksVal');
    
    const displayPrice = document.getElementById('displayPrice');
    const breakRate = document.getElementById('breakRate');
    const breakHours = document.getElementById('breakHours');
    const breakSubtotal = document.getElementById('breakSubtotal');
    const breakDiscount = document.getElementById('breakDiscount');
    const breakTotal = document.getElementById('breakTotal');

    const rates = {
        digital: 225,
        operational: 175,
        supplychain: 200,
        package: 200 // Blended rate
    };

    function updateCalculator() {
        if (!serviceSelect || !hoursSlider || !weeksSlider) return;

        const service = serviceSelect.value;
        const hours = parseInt(hoursSlider.value);
        const weeks = parseInt(weeksSlider.value);

        // Update slider display labels
        hoursVal.textContent = hours;
        weeksVal.textContent = `${weeks} wk${weeks > 1 ? 's' : ''}`;

        // Calculations
        const hourlyRate = rates[service] || 200;
        let subtotal = hourlyRate * hours;
        
        // Dynamic discounts based on hours volume
        let discountPercent = 0;
        if (hours >= 150) {
            discountPercent = 0.15; // 15% discount for major transformations
        } else if (hours >= 80) {
            discountPercent = 0.10; // 10% discount for medium engagements
        }

        const discountVal = subtotal * discountPercent;
        const totalVal = subtotal - discountVal;

        // Animate price display change
        animateValue(displayPrice, parseInt(displayPrice.textContent.replace(/[$,]/g, '')) || 0, totalVal, 300);

        // Update breakdown info
        if (breakRate) breakRate.textContent = `$${hourlyRate}/hr`;
        if (breakHours) breakHours.textContent = `${hours} hrs`;
        if (breakSubtotal) breakSubtotal.textContent = `$${subtotal.toLocaleString()}`;
        if (breakDiscount) breakDiscount.textContent = discountPercent > 0 ? `-$${discountVal.toLocaleString()} (${discountPercent * 100}%)` : '$0';
        if (breakTotal) breakTotal.textContent = `$${totalVal.toLocaleString()}`;
    }

    // Value animation helper
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentVal = Math.floor(progress * (end - start) + start);
            obj.textContent = `$${currentVal.toLocaleString()}`;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    if (serviceSelect && hoursSlider && weeksSlider) {
        serviceSelect.addEventListener('change', updateCalculator);
        hoursSlider.addEventListener('input', updateCalculator);
        weeksSlider.addEventListener('input', updateCalculator);
    }

    // Language Toggling Logic
    let currentLang = localStorage.getItem('lang') || 'es';
    const langToggleBtn = document.getElementById('langToggle');

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Translate text elements
        document.querySelectorAll('[data-translate]').forEach(el => {
            const translationKey = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][translationKey]) {
                el.innerHTML = translations[lang][translationKey];
            }
        });

        // Translate placeholder elements
        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const translationKey = el.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][translationKey]) {
                el.setAttribute('placeholder', translations[lang][translationKey]);
            }
        });

        // Update document lang attribute
        document.documentElement.setAttribute('lang', lang);

        // Recalculate if values exist
        updateCalculator();
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'es' ? 'en' : 'es';
            applyLanguage(nextLang);
        });
    }

    // Theme Switcher Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeSun = document.getElementById('themeSun');
    const themeMoon = document.getElementById('themeMoon');
    let currentTheme = localStorage.getItem('theme') || 'dark';

    function applyTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            if (themeSun) themeSun.style.display = 'none';
            if (themeMoon) themeMoon.style.display = 'block';
        } else {
            document.body.classList.remove('light-mode');
            if (themeSun) themeSun.style.display = 'block';
            if (themeMoon) themeMoon.style.display = 'none';
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    // Initial setup on load
    applyLanguage(currentLang);
    applyTheme(currentTheme);
    updateCalculator(); // Run once initially

    // Scroll Animations (using IntersectionObserver)
    const animElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // If it's the timeline, trigger progress line animation
                if (entry.target.id === 'growth') {
                    animateTimelineProgress();
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animElements.forEach(el => observer.observe(el));

    // Timeline Progress Animation
    function animateTimelineProgress() {
        const progressLine = document.querySelector('.timeline-progress');
        const items = document.querySelectorAll('.timeline-item');
        if (!progressLine) return;

        progressLine.style.height = '100%';
        
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
            }, index * 400); // Stagger dot activation
        });
    }

    // Form submission mock alert
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = translations[currentLang].alert_contact_success;
            alert(message);
            contactForm.reset();
        });
    }
});
