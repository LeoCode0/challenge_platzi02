const SHOW = document.getElementById('showModal');
const HIDE = document.getElementById('hideModal');
const MODAL = document.getElementsByClassName('modal')[0];
const SHARE = document.getElementById('share')
HIDE.onclick = () => {
    MODAL.classList.remove('show')
    SHARE.setAttribute('src', './src/images/icon-share.svg')
    MODAL.classList.remove('show')
}

SHOW.onclick = (e) => {
    if(MODAL.classList.contains('show')){
        SHARE.setAttribute('src', './src/images/icon-share.svg')
        MODAL.classList.remove('show')
        SHOW.classList.remove("black")
    }else{
        SHARE.setAttribute('src', './src/images/icon-shareWhite.svg')
        MODAL.classList.add('show')
        SHOW.classList.add("black")
    }
}