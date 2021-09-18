// 메뉴 이름 굵게
const currentId = document.querySelector('#series');

currentId.style.fontWeight = "bold";

// 영화 선택
const currentMovie = document.querySelector('#stone-logo');
const movieContainer = document.querySelector('#movie-container');

movieContainer.style.display = 'none';

currentMovie.addEventListener('click', function() {
  movieContainer.style.display = 'block';
  document.getElementById('trailer').setAttribute('src', 'videos/stone.mp4');
})

// movie container close
const movieClose = document.querySelector('#movie-close');

movieClose.addEventListener('click', function() {
  movieContainer.style.display = 'none';
});