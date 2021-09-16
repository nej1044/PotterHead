const bgmBtn = document.getElementById('bgm-btn');

bgmBtn.addEventListener('click', function () {
  document.getElementById('contents-container').innerHTML = `<video autoplay loop src="videos/home.mp4"></video>`
});