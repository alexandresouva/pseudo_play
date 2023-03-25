import { connectApi } from './connectApi.js';

const $form = document.querySelector('[data-form]');

function convertUrlToEmbed(url) {
  const embed = url.replace('watch?v=', 'embed/');
  return embed;
}

async function createVideo(event) {
  event.preventDefault();

  const title = document.querySelector('[data-title]').value;
  const url = convertUrlToEmbed(document.querySelector('[data-url]').value);
  const img = document.querySelector('[data-img]').value;
  const views = Math.floor(Math.random() * 10 + 1).toString();

  await connectApi.createVideo(title, url, img, views);

  window.location.href = '../pages/envio-concluido.html';
}

$form.addEventListener('submit', (event) => createVideo(event));
