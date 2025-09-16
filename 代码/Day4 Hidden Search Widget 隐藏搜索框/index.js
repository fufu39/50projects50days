const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  if (search.classList.contains('active')) {
    search.querySelector('input').focus();
  }
});