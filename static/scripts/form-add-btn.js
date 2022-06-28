const addBtn = document.querySelector('.form-add-btn');
const updateText = document.querySelector('.form-add-doggo');

const showText = addBtn.addEventListener('click', () => {
  updateText.style.display = 'block';
});
