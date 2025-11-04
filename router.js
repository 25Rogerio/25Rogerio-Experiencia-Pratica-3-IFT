import { templates } from './templates.js';

const routeMap = {
  '': 'home',
  'home': 'home',
  'cadastro': 'cadastro',
  'projetos': 'projetos',
  'projetos/voluntariado': 'projetos',
  'projetos/doacoes': 'projetos',
  'projetos/eventos': 'projetos'
};

export function renderPage() {
  const app = document.getElementById('app');
  if (!app) return;

  const hash = window.location.hash.replace('#', '') || 'home';
  const route = routeMap[hash] || 'home';

  app.innerHTML = templates[route]();

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  const activeLink = document.querySelector(`.nav-link[href="#${hash}"]`) ||
                     document.querySelector('.nav-link[href="#home"]');
  if (activeLink) activeLink.classList.add('active');

  if (route === 'cadastro') {
    import('./formValidator.js').then(module => {
      if (typeof module.initFormValidation === 'function') {
        module.initFormValidation();
      }
    });
  }
}

export function initRouter() {
  window.addEventListener('hashchange', renderPage);
  renderPage();
}
