const slider = document.querySelector('.sliders-gallery-ipsum');

function activate(e) {
  const items = document.querySelectorAll('.item-gallery-sliders');
  e.target.matches('.next-gallery') && slider.append(items[0])
  e.target.matches('.prev-gallery') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);