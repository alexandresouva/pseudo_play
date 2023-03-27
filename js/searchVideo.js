import { connectApi } from './connectApi.js';
import createCard from './showVideos.js';

const $searchBar = document.querySelector('.pesquisar__input');
const $searchBtn = document.querySelector('.pesquisar__botao');
const $list = document.querySelector('[data-list]');

function clearVideoList() {
  while ($list.firstChild) {
    $list.removeChild($list.firstChild);
  }
}

async function searchVideo(e) {
  e.preventDefault();

  const keyWords = $searchBar.value;
  const videosFound = await connectApi.searchVideo(keyWords);
  clearVideoList();

  videosFound.forEach((video) => {
    $list.appendChild(
      createCard(video.titulo, video.visualizacoes, video.url, video.imagem)
    );
  });

  if (videosFound.length === 0) {
    $list.innerHTML = `<h2 class="mensagem__titulo">Nenhum vídeo foi encontrado.<h2>`;
  }
}

$searchBtn.addEventListener('click', (e) => searchVideo(e));
