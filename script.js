function openProject(projectDiv) {
  const title = projectDiv.dataset.title;
  const author = projectDiv.dataset.author;
  const year = projectDiv.dataset.year;
  const place = projectDiv.dataset.place;
  const description = projectDiv.dataset.description;
  const image = projectDiv.dataset.image;

  document.getElementById('detail-title').textContent = title;
  document.getElementById('detail-author').textContent = author;
  document.getElementById('detail-year').textContent = year;
  document.getElementById('detail-place').textContent = place;
  document.getElementById('detail-description').textContent = description;
  document.getElementById('detail-image').src = image;

  document.getElementById('project-detail').classList.remove('hidden');
  document.getElementById('project-detail').scrollIntoView({ behavior: "smooth" });
}

function closeProject() {
  document.getElementById('project-detail').classList.add('hidden');
}

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}
