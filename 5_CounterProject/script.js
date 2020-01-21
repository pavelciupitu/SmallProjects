
// declaram variabilele pentru a putea apela
let counter = document.querySelector('.counter');          
const lowerCont = document.querySelector('#lowerCountBtn');
const addCont = document.querySelector('#addCountBtn')

//initializam count-ul cu valoarea 0
let count = 0


//monitorizam butoanele ca la click sa execute o functie
lowerCont.addEventListener('click', removeFromConter);
addCont.addEventListener('click', addToCounter);

//functia de adaugare
function addToCounter () {
    count += 1
    afiseazaColorat();
}

//functia de scadere
function removeFromConter () {
    count -= 1
    // console.log (count);

    afiseazaColorat();
}

//ambele functii apeleaza functia de afisare

function afiseazaColorat() {
    if (count<0) {
        counter.style.color = 'red';
        
    } else if (count==0){
        counter.style.color = 'white';
    }else
    {
        counter.style.color = 'green';
    }
counter.innerHTML = count;
counter.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration:500, fill:'forwards'});
}