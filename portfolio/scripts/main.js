const navigation = document.querySelector('.navigation');
const harmburgerButton = document.querySelector('#menu');

harmburgerButton.addEventListener('click', onClick);

function onClick(){
    navigation.classList.toggle('show');
    harmburgerButton.classList.toggle('show');

}