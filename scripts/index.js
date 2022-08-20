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