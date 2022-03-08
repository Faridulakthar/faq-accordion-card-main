const toggles = document.querySelectorAll('.faq');

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', () => {
    toggles[i].classList.toggle('active');
  });
}
