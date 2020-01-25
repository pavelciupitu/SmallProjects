const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click', funX);

function funX(){
    let value = navbarLinks.classList.contains('navbar__collapse')
    if (value) {
        navbarLinks.classList.remove('navbar__collapse');
        navbarBtn.classList.remove('navbarBtn__collapse');
    }
    else {
        navbarLinks.classList.add('navbar__collapse');
        navbarBtn.classList.add('navbarBtn__collapse');
        }
}
