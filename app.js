const overlay = document.querySelector(".popupOverlay");
const clickShow = document.querySelector(".box-down");
const popup = document.querySelector(".popup");
const buttonPopup = document.querySelector('.button-popup');

clickShow.addEventListener('click', () => {
    overlay.classList.add('showContent');
    popup.classList.add('show');
    buttonPopup.classList.add('hide');
})
