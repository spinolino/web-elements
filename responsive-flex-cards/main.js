let cardItems = document.querySelectorAll('.card-container .card-item');
cardItems.forEach((thisItem) => {
let backCard = thisItem.querySelector('.back');
let frontCard = thisItem.querySelector('.front');
thisItem.addEventListener('mouseover', function () {
    backCard.style.opacity=1;
    frontCard.style.opacity=0;
});
thisItem.addEventListener('mouseout', function () {
    backCard.style.opacity=0;
    frontCard.style.opacity=1;
});
});