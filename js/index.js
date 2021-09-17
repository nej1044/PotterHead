const bgmBtn = document.getElementById('bgm-btn');

bgmBtn.addEventListener('click', function () {
  document.getElementById('contents-container').innerHTML = `<video autoplay loop controls src="videos/home.mp4"></video>`
});