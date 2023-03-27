import { connectApi } from './connectApi.js';

const $form = document.querySelector('[data-form]');

function convertUrlToEmbed(url) {
  const embed = url.replace('watch?v=', 'embed/');
  return embed;
}

async function createVideo(event) {
  event.preventDefault();

  const title = document.querySelector('[data-title]').value;
  const views = Math.floor(Math.random() * 10 + 1).toString();
  const url = convertUrlToEmbed(document.querySelector('[data-url]').value);
  const img = document.querySelector('[data-img]').value;

  try {
    await connectApi.createVideo(title, views, url, img);

    window.location.href = '../pages/envio-concluido.html';
  } catch (error) {
    alert(error);
  }
}

$form.addEventListener('submit', (event) => createVideo(event));
