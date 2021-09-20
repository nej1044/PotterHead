const currentId = document.querySelector('#domitory');

currentId.style.fontWeight = "bold";

// 마우스 올리면 logo 움직임
let currentDomitory = '';

document.addEventListener('mouseover', function selectDomitory(event) {
  if (event.target.className === 'domitory-logo') {
    currentDomitory = document.querySelector(`#` + `${event.target.id}`);
    currentDomitory.setAttribute('src', 'images/'+`${event.target.id}`+'.gif');
  }
});

// 마우스 나가면 logo 멈춤
document.addEventListener('mouseout', function selectDomitory(event) {
  if (event.target.className === 'domitory-logo') {
    currentDomitory = document.querySelector(`#` + `${event.target.id}`);
    currentDomitory.setAttribute('src', 'images/'+`${event.target.id}`+'.jpg');
    currentDomitory = '';
  }
});