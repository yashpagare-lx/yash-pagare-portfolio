const filters = [...document.querySelectorAll('.filter')];
const projects = [...document.querySelectorAll('.project')];
filters.forEach((button) => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  projects.forEach((project) => {
    project.hidden = selected !== 'all' && project.dataset.category !== selected;
  });
}));

const preview = document.querySelector('.lightbox');
const previewImage = preview.querySelector('img');
projects.forEach((project) => project.addEventListener('click', () => {
  previewImage.src = project.dataset.image;
  previewImage.alt = project.querySelector('img').alt;
  preview.querySelector('.lightbox-caption strong').textContent = project.dataset.title;
  preview.querySelector('.lightbox-caption span').textContent = project.dataset.detail;
  preview.showModal();
}));
preview.querySelector('.lightbox-close').addEventListener('click', () => preview.close());
preview.addEventListener('click', (event) => {
  if (event.target === preview) preview.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && preview.open) preview.close();
});
