const panels = document.querySelectorAll('.container > .panel')
panels.forEach(item => {
  item.addEventListener('click', () => {
    Array.from(item.parentElement.children).forEach(el => el.classList.remove('active'))
    item.classList.add('active')
  });
});