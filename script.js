const advices = document.querySelector('.advice p');
const refresh = document.querySelector('.new');
const idendity = document.querySelector('.count');
let count = 2;

Starting();
wait();

function Starting(){
    fetch("https://api.adviceslip.com/advice")
    .then(e => e.json())
    .then((cümle) => showAdvice(cümle.slip.advice,cümle.slip.id));
    wait();
}

function showAdvice(advice,id){
    advices.innerHTML = advice;
    idendity.innerHTML = `Advice id &#9758 ${id}`
    refresh.classList.remove('active');
}



function wait(){
    count = setInterval(counter,2000);

   function counter(){
        count--;
        if(count == 0){
            refresh.classList.add('active');
        }
    }
}


refresh.addEventListener('click',wait);
refresh.addEventListener('click',Starting);
