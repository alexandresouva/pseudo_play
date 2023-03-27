'use strict';

async function listVideos() {
  const response = await fetch('http://localhost:5000/videos');
  const data = await response.json();
  return data;
}

async function createVideo(title, views, videoUrl, imageSrc) {
  const connection = await fetch('http://localhost:5000/videos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      id: '',
      titulo: title,
      visualizacoes: `${views} mil visualizações`,
      url: videoUrl,
      imagem: imageSrc,
    }),
  });
  const data = await connection.json();
  return data;
}

async function searchVideo(keyWords) {
  const connection = await fetch(`http://localhost:5000/videos?q=${keyWords}`);
  const data = await connection.json();
  return data;
}

export const connectApi = {
  listVideos,
  createVideo,
  searchVideo,
};
