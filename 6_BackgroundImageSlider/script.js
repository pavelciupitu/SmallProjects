const nextBtn =document.querySelector('.nextBtn');
const prevBtn =document.querySelector('.prevBtn');
const container = document.querySelector('.images');

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

let contor = 0;

function next (){
    contor ++ ;
    if (contor < 10) {
        container.style.backgroundImage = `url(img/contBcg-` + contor + `.jpeg)`;
    } else {
        contor = 0;
        container.style.backgroundImage = `url(img/contBcg-` + contor + `.jpeg)`;
    }
    console.log(contor);
}

function prev (){
    contor --;
    if(contor > -1){
        container.style.backgroundImage = `url(img/contBcg-` + contor + `.jpeg)`;
    } else {
        contor = 9;
        container.style.backgroundImage = `url(img/contBcg-` + contor + `.jpeg)`;
    }
    console.log(contor);
}
