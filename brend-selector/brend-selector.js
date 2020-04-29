let classBrendStack = 'brend-stack';
let classMoreImage = 'more__image';
let classMoreText = 'more__text';
let classModifierExpand = '--expand';
let classModifierHide = '--hide';
let classModifierExpanded = '--expanded';
let classModifierShrinked = '--shrinked';
let classMoreImageExpand = classMoreImage + classModifierExpand;
let classMoreTextExpand = classMoreText + classModifierExpand;
let classMoreImageHide = classMoreImage + classModifierHide;
let classMoreTextHide = classMoreText + classModifierHide;
let classBrendStackExpanded = classBrendStack + classModifierExpanded;
let classBrendStackShrinked = classBrendStack + classModifierShrinked;
let classBrendStackBrend = classBrendStack + '__brend';
let more = document.querySelector('.more');
let moreImage = document.querySelector('.' + classMoreImage);
let moreText = document.querySelector('.' + classMoreText);
let brendStack = document.querySelector('.' + classBrendStack);
let textContentExpand = 'Показать все';
let textContentHide = 'Скрыть';

more.onclick = function () {
    if (moreImage.classList.contains(classMoreImageExpand)) {
        moreImage.classList.replace(classMoreImageExpand, classMoreImageHide);
        moreText.textContent = textContentHide;
        brendStack.classList.replace(classBrendStackShrinked, classBrendStackExpanded);
    } else if (moreImage.classList.contains(classMoreImageHide)) {
        moreImage.classList.replace(classMoreImageHide, classMoreImageExpand);
        moreText.textContent = textContentExpand;
        brendStack.classList.replace(classBrendStackExpanded, classBrendStackShrinked);
    }
}

let swiperOptions = {
    slidesPerView: 1.4,
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
let classSwiperPrefix = 'swiper-';
let classSwiperContainer = classSwiperPrefix + 'container';
let classSwiperWrapper = classSwiperPrefix + 'wrapper';
let classSwiperPagination = classSwiperPrefix + 'pagination';
let classSwiperPaginationBullet = classSwiperPagination + '-bullet';
let classSwiperSlide = classSwiperPrefix + 'slide';
let classFade = 'fade';

let swiperContainer = document.querySelector('.' + classSwiperContainer);
let swiperWrapper = document.querySelector('.' + classSwiperWrapper);
let swiperPagination = document.querySelector('.' + classSwiperPagination);
let swiperPaginationBullet = document.querySelector('.' + classSwiperPaginationBullet);
let swiperSlide = document.querySelector('.' + classSwiperSlide);
let swiperSlides = document.querySelectorAll('.' + classSwiperSlide);
let fade = document.querySelector('.' + classFade);

var mySwiper;

var createSwiper = function () {
    if (!fade.classList.contains(classFade)) {
        fade.classList.add(classFade);
    }
    if (!swiperWrapper.classList.contains(classSwiperWrapper)) {
        swiperWrapper.classList.add(classSwiperWrapper);
    }
    if (swiperWrapper.classList.contains(classBrendStack)) {
        swiperWrapper.classList.remove(classBrendStack);
    }
    swiperSlides.forEach(slide => {
        if (!slide.classList.contains(classSwiperSlide)) {
            slide.classList.add(classSwiperSlide);
        }
        if (slide.classList.contains(classBrendStackBrend)) {
            slide.classList.remove(classBrendStackBrend);
        }
    });
    if (typeof (mySwiper) == 'undefined') {
        mySwiper = new Swiper('.' + classSwiperContainer, swiperOptions);
        console.log(`initialized + ${mySwiper}`);
    }
};

var destroySwiper = function () {
    if (typeof (mySwiper) != 'undefined') {
        mySwiper.destroy();
        mySwiper = undefined;
    }
    if (fade.classList.contains(classFade)) {
        fade.classList.remove(classFade);
    }
    if (swiperWrapper.classList.contains(classSwiperWrapper)) {
        swiperWrapper.classList.remove(classSwiperWrapper);
    }
    if (!swiperPagination.classList.contains(classSwiperPagination)) {
        swiperPagination.classList.remove(classSwiperPagination);
    }
    if (!swiperWrapper.classList.contains(classBrendStack)) {
        swiperWrapper.classList.add(classBrendStack);
    }
    swiperSlides.forEach(slide => {
        if (slide.classList.contains(classSwiperSlide)) {
            slide.classList.remove(classSwiperSlide);
        }
        if (!slide.classList.contains(classBrendStackBrend)) {
            slide.classList.add(classBrendStackBrend);
        }
    });
};

let maxSwiperResolution = 768;

if (document.body.clientWidth < maxSwiperResolution) {
    createSwiper();
} else {
    destroySwiper();
}

window.onresize = function (event) {
    if (document.body.clientWidth < maxSwiperResolution) {
        createSwiper();
    } else {
        destroySwiper();
    }
}