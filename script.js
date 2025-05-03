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
  document.querySelector('#project-detail .detail-image img').src = imageSrc;

  const bar = document.querySelector('.thumbnail-bar');
  bar.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const thumb = document.createElement('img');
    thumb.src = imageSrc;
    thumb.onclick = () => zoomThumbnail(thumb);
    bar.appendChild(thumb);
  }

  document.getElementById('project-detail').classList.remove('hidden');
  window.scrollTo({
    top: document.getElementById('project-detail').offsetTop - 50,
    behavior: 'smooth'
  });
}

function closeProject() {
  document.getElementById('project-detail').classList.add('hidden');
}

function zoomThumbnail(el) {
  const mainImg = document.querySelector('#project-detail .detail-image img');
  mainImg.src = el.src;
}

function zoomImage(el) {
  el.classList.toggle('zoomed');
}