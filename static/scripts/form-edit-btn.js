const addBtn = document.querySelector('.form-add-btn');
const updateText = document.querySelector('.updateText');

const showText = addBtn.addEventListener('click', () => {
  updateText.style.display = 'block';
});
