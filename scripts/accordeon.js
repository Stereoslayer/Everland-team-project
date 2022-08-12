document.querySelectorAll('.accordion__button').forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('accordion__button_close');
        el.closest('.accordion__element').querySelector('.accordion__subtitle').classList.toggle('accordion__subtitle_opene');
    });
});