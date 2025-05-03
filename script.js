
function openProject(id) {
  document.getElementById('project-detail').classList.remove('hidden');
  window.scrollTo(0, 0);
}

function closeProject() {
  document.getElementById('project-detail').classList.add('hidden');
}

function showImage(src) {
  document.querySelector('.main-image').src = src;
}
