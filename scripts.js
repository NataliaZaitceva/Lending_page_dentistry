


/*const image = document.querySelector('.info__image')
const popupImage = document.getElementById('#popupImage')
function openPopup() {
    document.classList.add('popup_opened');
    console.log('opened')
}

function boostImage(){
    openPopup();
    image.classList.add('info__img_big')
}

image.addEventListener('click', openPopup(popupImage))*/
const imageItems = document.querySelectorAll('.info__img');

imageItems.forEach((image) => image.addEventListener('click', () => {
    image.classList.toggle('info__img_big')
}))

const imageItemsSert = document.querySelectorAll('.info__sert');

imageItemsSert.forEach((imageSert) => imageSert.addEventListener('click', () => {
    imageSert.classList.toggle('info__sert_big')
}))
