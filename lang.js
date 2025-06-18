const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",

    "greeting": "Hi, I'm Victoria Vielma!",

    // About Me
    "about-title": "About Me",
    "about-p1": "Full Stack Web and Mobile Developer, with technical training in software programming. I am currently studying Software Analysis and Development.",
    "about-p2": "I specialize in developing web and mobile applications, focused on creating functional and well-structured solutions.",
    "about-p3": "I am interested in continuing to develop my skills in real environments and contributing to development teams where I can bring my technical knowledge.",

    // Skills
    "skills-title": "Skills",
    "skills-languages": "Languages",
    "skills-frameworks": "Frameworks",
    "skills-databases": "Databases",
    "skills-tools": "Tools",
    "skills-langs": "Languages",
    "lang-english": "A2 - In training",
    "lang-spanish": "Native",

    // Projects
    "projects-title": "Projects",
    "project-dacky-title": "DACKY",
    "project-dacky-description": "Pet GPS tracking application",
    "project-dacky-link": "View repository",

    // Contact
    "contact-title": "Contact",
    "linkedin-profile": "My LinkedIn Profile",
    "github-profile": "My GitHub Profile",
    "cv-button": "CV",

    // Footer
    "footer-text": "Victoria Vielma 2025 © All rights reserved",

    // Fallback text (optional)
    "video-not-supported": "Your browser does not support HTML5 video.",
    "copy-email": "Copy email",

    typedTexts: [
      "Full Stack Developer",
      "Web Developer",
      "Mobile Developer",
      "Trainee"
    ]

  }
};
const langData = {
  es: {
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-skills": "Habilidades",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",

    "greeting": "Hola, soy Victoria Vielma!",

    // Sobre mí
    "about-title": "Sobre mí",
    "about-p1": "Desarrolladora Full Stack Web y Móvil, con formación técnica en programación de software. Actualmente estoy estudiando Análisis y Desarrollo de Software.",
    "about-p2": "Me especializo en el desarrollo de aplicaciones web y móviles, enfocada en crear soluciones funcionales y bien estructuradas.",
    "about-p3": "Me interesa seguir desarrollando mis habilidades en entornos reales y contribuir a equipos de desarrollo donde pueda aportar mis conocimientos técnicos.",

    // Habilidades
    "skills-title": "Habilidades",
    "skills-languages": "Lenguajes",
    "skills-frameworks": "Frameworks",
    "skills-databases": "Bases de datos",
    "skills-tools": "Herramientas",
    "skills-langs": "Idiomas",
    "lang-english": "A2 - En formación",
    "lang-spanish": "Nativo",

    // Proyectos
    "projects-title": "Proyectos",
    "project-dacky-title": "DACKY",
    "project-dacky-description": "Aplicación de rastreo GPS para mascotas",
    "project-dacky-link": "Ver repositorio",

    // Contacto
    "contact-title": "Contacto",
    "linkedin-profile": "Mi perfil de LinkedIn",
    "github-profile": "Mi perfil de GitHub",
    "cv-button": "CV",

    // Pie de página
    "footer-text": "Victoria Vielma 2025 © Todos los derechos reservados",

    // Texto alternativo (opcional)
    "video-not-supported": "Tu navegador no soporta video HTML5.",
    "copy-email": 'Copiar correo electrónico',
    
    typedTexts: [
      "Desarrollador Full Stack",
      "Desarrollador Web",
      "Desarrollador Móvil",
      "Aprendiz"
    ]

  },
  en: translations.en
};


const toggle = document.getElementById('langToggle');
const elements = document.querySelectorAll('[data-key]');

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    if (langData[lang][key]) {
      el.textContent = langData[lang][key];
    }
  });

  // Actualiza los textos del efecto de escritura
  if (window.updateTypedText) {
    window.updateTypedText(langData[lang].typedTexts);
  }
}


// Guardar la preferencia en localStorage
toggle.addEventListener('change', function () {
  const lang = this.checked ? 'en' : 'es';
  setLanguage(lang);
  localStorage.setItem('lang', lang);
});

// Cargar preferencia guardada
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'es';
  toggle.checked = savedLang === 'en';
  setLanguage(savedLang);
});
