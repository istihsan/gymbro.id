const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const title = dropdown.querySelector('h2');

  title.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
});