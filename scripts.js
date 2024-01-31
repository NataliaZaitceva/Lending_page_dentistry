


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
const page = document.querySelector('.page')
const info = document.querySelector('.info__images')

 /*const imgBig = document.createElement('div')
    document.getElementsByTagName('body')[0].appendChild(imgBig)
imgBig.style = 'background-color: rgba(48, 48, 48, 0.6); position: fixed; top: 0px; left: 0px; width: 100%;'

resizeOverlay()

  window.addEventListener('resize', resizeOverlay)

function resizeOverlay() {

    imgBig.style.height = (document.documentElement.clientHeight + 100) + 'px'
}

let bigImageScreenFraction = 1.0;
if (window.matchMedia('(max-width: 1080px)').matches)
{bigImageScreenFraction = 1.0;
}
else 
{
    bigImageScreenFraction = 0.7;
}



imageItems.forEach((image) => image.addEventListener('click', () => {
   let placeholder = image.getAttribute('scalable');
   const smallSize = image.getAttribute('scalable');
let defaultStyle = `max-width: ${smallSize}; max-height: ${smallSize}`

image.style = defaultStyle;

let isGoingToSmall = false;
    /*image.classList.toggle('info__img_big')
    info.classList.toggle('info__images_active')

    if (image.getAttribute('is-big') === 'true')
    { let coods = placeholder.getBoundingClientRect();
    image.style = `${defaultStyle}; position: fixed; left: ${coods.left}px; top: ${coords.top}px`;
    image.setAttribute('is-big', false);
    imgBig.hidden = true;
    isGoingToSmall = true;
    }
    else 
    {
        imgBig.hidden = false;
        image.setAttribute('is-big', true);
        placeholder.hidden = false;
        placeholder.style = `width: ${image.width}px; height: ${image.height}px; background-color: rgb(200, 200, 200)`;
        image.before(placeholder)
        doImageBig(image)
    }
}))
imageItems.forEach((image) => image.addEventListener('transi', () =>{

    if (isGoingToSmall) //Отследили завершение анимации уменьшения.
      {
        //Вставляем картинку обратно в поток.
        img.style = defaultStyle;
        isGoingToSmall = false;
        //Убираем заглушку.
        placeholder.hidden = true;
      }
}))

const imageItemsSert = document.querySelectorAll('.info__sert');

imageItemsSert.forEach((imageSert) => imageSert.addEventListener('click', () => {
    imageSert.classList.toggle('info__sert_big')
}))*/


const burgerBtn = document.querySelector('.btn__burger')
const btnBurgerClose = document.querySelector('.btn__close')
const burgerMenu = document.querySelector('.burger__menu')
const logo = document.querySelector('.header__logo_burger')
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.add('btn__burger_hidden')
    burgerMenu.classList.add('burger__menu_opened')
    logo.setAttribute('hidden', true)
})

btnBurgerClose.addEventListener('click', () => {
    
    burgerBtn.classList.remove('btn__burger_hidden')
    burgerMenu.classList.remove('burger__menu_opened')
    logo.removeAttribute('hidden', false)


})

const popup = document.querySelector('.popup')

function openPopupImage (name) {
    btn
}



imgBig.hidden = true;
function fillBig() {
    
}

window.addEventListener