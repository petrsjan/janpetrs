function openProject(element) {
  const title = element.dataset.title;
  const author = element.dataset.author;
  const year = element.dataset.year;
  const place = element.dataset.place;
  const description = element.dataset.description;
  const imageSrc = element.querySelector('img').src;

  document.getElementById('detail-title').innerText = title;
  document.getElementById('detail-author').innerText = author;
  document.getElementById('detail-year').innerText = year;
  document.getElementById('detail-place').innerText = place;
  document.getElementById('detail-description').innerText = description;
  document.querySelector('.detail-image img').src = imageSrc;

  const thumbnails = document.querySelectorAll('.thumbnail-bar img');
  thumbnails.forEach(thumb => {
    thumb.src = imageSrc;
  });

  document.getElementById('project-detail').classList.remove('hidden');
  window.scrollTo(0, 0);
}

function closeProject() {
  document.getElementById('project-detail').classList.add('hidden');
}

function zoomThumbnail(el) {
  const mainImg = document.querySelector('.detail-image img');
  mainImg.src = el.src;
}
