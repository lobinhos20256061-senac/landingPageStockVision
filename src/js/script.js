// Controle do Acordeão (Mobile)
const accordionBtn = document.querySelector('.accordion-btn');
const accordionContent = document.querySelector('.accordion-content');

if (accordionBtn && accordionContent) {
  accordionBtn.addEventListener('click', () => {
    const expanded = accordionBtn.classList.toggle('active');
    accordionBtn.setAttribute('aria-expanded', expanded);

    if (expanded) {
      // Abre definindo a altura real interna (scrollHeight) com prioridade máxima
      accordionContent.style.setProperty('max-height', `${accordionContent.scrollHeight}px`, 'important');
    } else {
      // Fecha zerando a altura com prioridade máxima para anular o CSS do desktop
      accordionContent.style.setProperty('max-height', '0px', 'important');
    }
  });
}

// Controle da Playlist
const playlistItems = document.querySelectorAll('.playlist-item');

playlistItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove a classe active do item anterior de forma segura
    const currentActive = document.querySelector('.playlist-item.active');
    if (currentActive) currentActive.classList.remove('active');
    
    // Adiciona no item clicado
    item.classList.add('active');

    // Resgata os datasets dos atributos do HTML
    const videoId = item.dataset.video;
    const videoTitle = item.dataset.title;
    const videoDescription = item.dataset.description;

    // Atualiza os elementos do DOM
    document.getElementById('videoPlayer').src = `https://www.youtube.com/embed/${videoId}`;
    document.getElementById('videoTitle').textContent = videoTitle;
    document.getElementById('videoDescription').textContent = videoDescription;

    // [Melhoria UX]: Fecha o acordeão suavemente no mobile após clicar e escolher um vídeo
    if (window.innerWidth <= 668 && accordionContent) {
      accordionBtn.classList.remove('active');
      accordionBtn.setAttribute('aria-expanded', 'false');
      accordionContent.style.setProperty('max-height', '0px', 'important'); // Força fechar suave no mobile
    }
  });
});

// Controle do Botão de Documentação
const docButton = document.querySelector('.doc-button');
if (docButton) {
  docButton.addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1P9QCG2ak9D7NiiR22D_lCdx8ZLFjoerC/view?pli=1', '_blank');
  });
}