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
let more = document.querySelector('.more');
let moreImage = document.querySelector('.' + classMoreImage);
let moreText = document.querySelector('.' + classMoreText);
let brendStack = document.querySelector('.' + classBrendStack);
let textContentExpand = 'Показать все';
let textContentHide = 'Скрыть';

more.onclick = function() {
    if (moreImage.classList.contains(classMoreImageExpand)) {
        moreImage.classList.remove(classMoreImageExpand);
        moreImage.classList.add(classMoreImageHide);
        moreText.textContent = textContentHide;
        brendStack.classList.remove(classBrendStackShrinked);
        brendStack.classList.add(classBrendStackExpanded);
    } else if (moreImage.classList.contains(classMoreImageHide)) {
        moreImage.classList.remove(classMoreImageHide);
        moreImage.classList.add(classMoreImageExpand);
        moreText.textContent = textContentExpand;
        brendStack.classList.remove(classBrendStackExpanded);
        brendStack.classList.add(classBrendStackShrinked);
    }
}