const btn = document.querySelector('#show-prototype');
const closebtn = document.querySelector('#close-prototype');
const prototype = document.querySelector('#prototype');

// Abrir o modal nas coordernadas do topo da página relativa ao
// o que foi rolado
const openModal = () => {
  if (window.scrollY > 10) {
    prototype.style.top = `${window.scrollY}px`;
  }
  prototype.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Abrir o modal ao clicar no botão
btn.addEventListener('click', openModal);

closebtn.addEventListener('click', () => {
  prototype.classList.remove('active');
  prototype.style.top = '0px';
  document.body.style.overflow = 'auto';
});

// Fechar ao pressionar a tecla ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    prototype.classList.remove('active');
    prototype.style.top = '0px';
    document.body.style.overflow = 'auto';
  }
});

