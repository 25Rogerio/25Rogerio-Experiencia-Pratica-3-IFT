import { saveVolunteer } from './storage.js';

export function initFormValidation() {
  const form = document.getElementById('volunteerForm');
  if (!form) return;

  const validators = {
    nome: (value) => value.trim().length >= 3 ? null : 'Nome deve ter pelo menos 3 caracteres.',
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'E-mail inválido.',
    interesse: (value) => value ? null : 'Selecione uma área de interesse.',
    disponibilidade: (value) => value ? null : 'Selecione sua disponibilidade.'
  };

  function showError(field, message) {
    const errorEl = document.getElementById(`error-${field}`);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.color = 'var(--color-danger)';
      errorEl.style.fontSize = '0.875rem';
    }
    const input = document.getElementById(field);
    if (input) input.style.borderColor = 'var(--color-danger)';
  }

  function clearError(field) {
    const errorEl = document.getElementById(`error-${field}`);
    if (errorEl) errorEl.textContent = '';
    const input = document.getElementById(field);
    if (input) input.style.borderColor = 'var(--color-gray-200)';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    Object.keys(validators).forEach(clearError);

    for (const [field, validator] of Object.entries(validators)) {
      const input = document.getElementById(field);
      const error = validator(input.value);
      if (error) {
        showError(field, error);
        isValid = false;
      }
    }

    if (isValid) {
      const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value || '',
        interesse: document.getElementById('interesse').value,
        disponibilidade: document.getElementById('disponibilidade').value,
        mensagem: document.getElementById('mensagem').value || '',
        dataCadastro: new Date().toLocaleString('pt-BR')
      };

      saveVolunteer(formData);
      alert('Cadastro realizado com sucesso! Obrigado por se juntar à nossa causa.');
      window.location.hash = 'home';
    }
  });
}
