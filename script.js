var mainButtons = document.querySelectorAll('.main-mobile__button-text');
var footerLanguages = document.querySelectorAll('.footer__language');

for (let i = 0; i < mainButtons.length; i++) {
    //mainButtons[i].innerHTML = mainButtons[i].dataset.filter;
    clickControlMainButton(mainButtons[i]);
}

footerLanguages.forEach(footer__language => {
    clickControlLanguage(footer__language);
});

function toggleActiveMainButton(control) {
    for (let j = 0; j < mainButtons.length; j++) {
        mainButtons[j].classList.remove('main-mobile__button-text--active');
    }

    control.classList.add('main-mobile__button-text--active');
}

function toggleActiveLanguage(control) {
    for (let j = 0; j < footerLanguages.length; j++) {
        footerLanguages[j].classList.remove('footer__language--active');
    }

    control.classList.add('footer__language--active');
}

function clickControlMainButton(control) {
    control.addEventListener('click', function() {
        toggleActiveMainButton(control);
    });
}

function clickControlLanguage(control) {
    control.addEventListener('click', function() {
        toggleActiveLanguage(control);
    });
}