'use strict';
import { connectApi } from './connectApi.js';

const $list = document.querySelector('[data-list]');

export default function createCard(title, views, videoSrc, imgSrc) {
  const card = document.createElement('li');
  card.classList.add('videos__item');
  card.innerHTML = `<iframe width="100%" height="72%" src="${videoSrc}"
  title="${title}" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
<div class="descricao-video">
  <img src="${imgSrc}">
  <h3>${title}</h3>
  <p>${views}</p>
</div>`;

  return card;
}

async function listVideo() {
  const list = await connectApi.listVideos();
  list.forEach((item) => {
    $list.appendChild(
      createCard(item.titulo, item.visualizacoes, item.url, item.imagem)
    );
  });
}
listVideo();
