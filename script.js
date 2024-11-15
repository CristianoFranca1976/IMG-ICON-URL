document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const container = document.getElementById('imageContainer');
  const images = Array.from(container.querySelectorAll('.image-item'));

  if (query === '') {
      // Se a busca estiver vazia, mostra todas as imagens
      images.forEach(img => {
          img.classList.remove('highlight');
          img.classList.remove('hidden');
      });
  } else {
      images.forEach(img => {
          const name = img.getAttribute('data-name').toLowerCase();
          if (name.includes(query)) {
              img.classList.remove('hidden');
              img.classList.add('highlight');
              container.prepend(img); // Move a imagem para o topo
          } else {
              img.classList.remove('highlight');
              img.classList.add('hidden'); // Esconde a imagem
          }
      });
  }
});