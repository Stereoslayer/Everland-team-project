document.querySelectorAll('.accordion__button').forEach(el => {
  el.addEventListener('click', () => {
      el.classList.toggle('accordion__button_close');
      el.closest('.accordion__element').querySelector('.accordion__subtitle').classList.toggle('accordion__subtitle_opene');
  });
});

let slidersButtonLeft = document.querySelectorAll(".slider__button_nav_left");
slidersButtonLeft.forEach(leftButton => {
  leftButton.addEventListener("click", () => {
    const sliderList = leftButton.closest(".slider").querySelectorAll(".slider__item");
    const sliderValue = parseInt(document.querySelector(".slider__switcher-current").textContent,10);

    const visibleItem = sliderList[sliderValue - 1];
    let sliderIndex = 0;
    if (sliderValue == 1) {
      sliderIndex = sliderList.length - 1;
    } else {
      sliderIndex = sliderValue - 2;
    }
    console.log(sliderIndex);
    visibleItem.classList.remove("slider__item_visibe");
    sliderList[sliderIndex].classList.add("slider__item_visibe");
    document.querySelector(".slider__switcher-current").textContent = sliderIndex + 1;
  });
});

let slidersButtonRight = document.querySelectorAll(".slider__button_nav_right");
slidersButtonRight.forEach((rightButton) => {
  rightButton.addEventListener("click", () => {
    const sliderList = rightButton.closest(".slider").querySelectorAll(".slider__item");
    const sliderValue = parseInt(document.querySelector(".slider__switcher-current").textContent, 10);

    console.log(sliderList);

    const visibleItem = sliderList[sliderValue - 1];
    let sliderIndex = 0;
    if (sliderValue == sliderList.length) {
      sliderIndex = 0;
    } else {
      sliderIndex = sliderValue;
    }
    console.log(sliderIndex);
    visibleItem.classList.remove("slider__item_visibe");
    sliderList[sliderIndex].classList.add("slider__item_visibe");
    document.querySelector(".slider__switcher-current").textContent = sliderIndex + 1;
  });
});
