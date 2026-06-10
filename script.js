const popup = document.querySelector(".popup");
const okBtn = document.querySelector(".ok-btn");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener('click', () => {
    popup.classList.add("open-popup");
});

okBtn.addEventListener('click', () => {
    popup.classList.remove('open-popup');
});
