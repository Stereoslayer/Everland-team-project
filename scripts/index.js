//blocks
const donations = document.querySelector('.donations');
const formDonation = document.querySelector('.donation-form');
const formSums = formDonation.querySelector('.donation-form__sums');
const userData = document.querySelector('.donation-form__user-data');

//inputs
const formOtherSum = document.querySelector('#other-sum-form').content;

//buttons
const buttonOtherSum = formSums.querySelector('#other-sum');
const buttonsSums = formSums.querySelectorAll('.radio-button');
const buttonDonationsSums = donations.querySelectorAll('.radio-button');
const buttonSupply = donations.querySelector('.donations__supply-button');

// functions
function createOtherSumInput() {
    const inputElement = formOtherSum.querySelector('.donation-form__user-data-input').cloneNode(true);
    userData.append(inputElement);
}

function renderOtherSumInput() {
    const inputOtherSum = document.querySelector('#other-sum-input');
    if (buttonOtherSum.checked && !userData.contains(inputOtherSum)) {
        createOtherSumInput();
    } else if (inputOtherSum !== null && !buttonOtherSum.checked) {
        inputOtherSum.remove();
    }
}

function chooseSumButton() {
    buttonDonationsSums.forEach(function (item, i) {
        if (item.checked) {
            buttonsSums[i].click();
        }
    })
}

function slider(button, shift) {
  const slider = button.closest(".slider");
  const sliderList = slider.querySelectorAll(".slider__item");
  const visibleIndex = parseInt(slider.querySelector(".slider__switcher-current").textContent,10) - 1;
  const visibleItem = sliderList[visibleIndex];
  let nextIndex = 0;

  if (visibleIndex == sliderList.length - 1 && shift > 0) {
    nextIndex = 0;
  } else if (visibleIndex == 0 && shift < 0) {
    nextIndex = sliderList.length - 1;
  } else {
    nextIndex = visibleIndex + shift;
  }

  visibleItem.classList.remove("slider__item_visibe");
  sliderList[nextIndex].classList.add("slider__item_visibe");
  slider.querySelector(".slider__switcher-current").textContent = nextIndex + 1;
}

//Event listeners
buttonsSums.forEach(function (item) {
    item.addEventListener('click', function () {
        renderOtherSumInput();
    });
})

buttonDonationsSums.forEach(function (item) {
    item.addEventListener('click', function () {
        chooseSumButton();
    });
})

buttonSupply.addEventListener('click', function () {
    formDonation.scrollIntoView();
})

document.querySelectorAll('.accordion__button').forEach(el => {
  el.addEventListener('click', () => {
      el.classList.toggle('accordion__button_close');
      el.closest('.accordion__element').querySelector('.accordion__subtitle').classList.toggle('accordion__subtitle_opene');
  });
});

const slidersButtonLeft = document.querySelectorAll(".slider__button_nav_left");
slidersButtonLeft.forEach((leftButton) => {
  leftButton.addEventListener("click", () => {
    slider(leftButton, -1);
  });
});

const slidersButtonRight = document.querySelectorAll(".slider__button_nav_right");
slidersButtonRight.forEach((rightButton) => {
  rightButton.addEventListener("click", () => {
    slider(rightButton, 1);
  });
});
