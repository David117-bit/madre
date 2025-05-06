let opened = false;
function openBook() {
  if (opened) return;
  const book = document.querySelector('.book');
  const cover = document.querySelector('.cover');

  cover.style.transform = 'rotateY(-180deg)';
  book.classList.add('opened');
  opened = true;
}
