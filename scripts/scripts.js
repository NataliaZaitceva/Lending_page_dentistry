let btn_call = document.querySelector('btn__call')

function callToUs(){
    window.location('tel:89145508474')
}

btn_call.addEventListener('click', callToUs())