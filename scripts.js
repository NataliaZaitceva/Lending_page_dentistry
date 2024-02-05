


const image = document.querySelector('.info__image')
const popupImage = document.getElementById('#popupImage')

const imageItems = document.querySelectorAll('.info__img');
const page = document.querySelector('.page')
const info = document.querySelector('.info__images')


function boostImage() {


 const imgBig = document.createElement('div')//создается серый фон, который перекрывает все элементы экрана
    document.getElementsByTagName('body')[0].appendChild(imgBig)
imgBig.style = 'background-color: rgba(48, 48, 48, 0.6); position: fixed; top: 0px; left: 0px; width: 100%; z-index: 1; position: sticky'
imgBig.hidden = true;

resizeOverlay()

  window.addEventListener('resize', resizeOverlay)

function resizeOverlay() {

    imgBig.style.height = (document.documentElement.clientHeight + 100) + 'px'
}

let bigImageScreenFraction;
if (window.matchMedia('(max-width: 1080px)').matches)
{
    bigImageScreenFraction = 1.0;
}
else 
{
    bigImageScreenFraction = 1.1;
}

let placeholder = document.createElement('img') //заглушка для картинки

document.querySelectorAll('img[scalable]').forEach((img) => 
{
    const smallSize = img.getAttribute('scalable');
    let defaultStyle = `max-width: ${smallSize}; max-height: ${smallSize}`;


img.style = defaultStyle;
let isGoingToSmall = false;
img.addEventListener('click', () => {
    if (img.getAttribute('is-big') === 'true') {
        let coords = placeholder.getBoundingClientRect();
    img.style = `${defaultStyle}; position: fixed; left: ${coords.left}px; top: ${coords.top}px`;
    img.setAttribute('is-big', false);
    imgBig.hidden = true;
    isGoingToSmall = true;
    }
    else {
        imgBig.hidden = false;
        img.setAttribute('is-big', true);
        placeholder.hidden = false;
        placeholder.style = `width: ${img.width}px; height: ${img.height}px; background-color: rgb(200, 200, 200)`;
        img.before(placeholder)
        doImageBig(img)
    }
});
   img.addEventListener('transitionend', () =>{

    if (isGoingToSmall) //Отследили завершение анимации уменьшения.
      {
        //Вставляем картинку обратно в поток.
        img.style = defaultStyle;
        isGoingToSmall = false;
        //Убираем заглушку.
        placeholder.hidden = true;
      }
}); 
window.addEventListener('resize', () =>
{
    if(img.getAttribute('is-big') === 'true') doImageBig (img)
})
})

/*imageItems.forEach((image) => image.addEventListener('click', () => {

/*image.classList.toggle('info__img_big')
    info.classList.toggle('info__images_active')

}))*/





function doImageBig(img){
    let screenHeight = document.documentElement.clientHeight;
    let screenWidth = document.documentElement.clientWidth;
    let imgWidth = img.width;
    let imgHeight = img.height;
    let bigImgHeight = Math.round(screenHeight * bigImageScreenFraction);
    let bigImgWidth = Math.round(screenWidth * bigImageScreenFraction);
    let ratio = imgWidth / imgHeight
    let newWidth = Math.round(bigImgHeight * ratio);
    if (newWidth < bigImgWidth)
    {
      bigImgWidth = newWidth;
    }
    else
    {
      bigImgHeight = Math.round(bigImgWidth / ratio);
    }
    let left = Math.round(0.5 * (screenWidth - bigImgWidth));
    let top = Math.round(0.5 * (screenHeight - bigImgHeight));
    img.style = `max-width: ${bigImgWidth}px; max-height: ${bigImgHeight}px; left: ${left}px; top: ${top}px; position: fixed; z-index: 2`;
};
} 
boostImage();




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

