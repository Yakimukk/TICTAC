const container = document.querySelector('.container')
const squares = document.querySelectorAll('.square')
const circle = `<svg x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><style>stroke:#fff;</style>
<g>
<path style="fill:#4285B4;" d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M8,15c-3.866,0-7-3.134-7-7 s3.134-7,7-7s7,3.134,7,7S11.866,15,8,15z"/>
</g>
</svg>`
const cross = `<svg viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;stroke:#DD80CC;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>`
let queue = true

function addCircle(target) {
    if (!((target.tagName === 'svg')||(target.tagName === 'line')||(target.tagName === 'path'))) {
        target.innerHTML = circle
        target.classList.add('circle')   
        queue = true 
    }
}
function addCross(target) {
    if (!((target.tagName === 'svg')||(target.tagName === 'line')||(target.tagName === 'path'))) {
        target.innerHTML = cross
        target.classList.add('cross')   
        queue = false
    }
}

squares.forEach((square) => {
    square.addEventListener('click', event => {
        
        if (!queue) {
            
            addCircle(event.target)
            console.log(event.target.tagName)
        } else {
            addCross(event.target)
            console.log(event.target.tagName)
        }
        proverka()
        
    }, true)
})


function proverka() {
    if (pr('circle')) {
        setTimeout(function(){
            alert('WIN CIRCLE');
        }, 1);
        location.reload();
        console.log('WIN CIRCLE') 
    } else if (pr('cross')) {
        setTimeout(function(){
            alert('WIN CROSS');
        }, 1);
        location.reload();
        console.log('WIN CROSS') 
    } else if 
    (((squares[0].classList.contains('circle'))||(squares[0].classList.contains('cross')))&&((squares[1].classList.contains('circle'))||(squares[1].classList.contains('cross')))&&((squares[2].classList.contains('circle'))||(squares[2].classList.contains('cross')))&&((squares[3].classList.contains('circle'))||(squares[3].classList.contains('cross')))&&((squares[4].classList.contains('circle'))||(squares[4].classList.contains('cross')))&&((squares[5].classList.contains('circle'))||(squares[5].classList.contains('cross')))&&((squares[6].classList.contains('circle'))||(squares[6].classList.contains('cross')))&&((squares[7].classList.contains('circle'))||(squares[7].classList.contains('cross')))&&((squares[8].classList.contains('circle'))||(squares[8].classList.contains('cross')))) {
        console.log('НИЧЬЯ')
        setTimeout(function(){
            alert('НИЧЬЯ');
        }, 1);
        location.reload();
    }
}

function pr(sign) {
    if (((squares[0].classList.contains(sign))&&(squares[1].classList.contains(sign))&&(squares[2].classList.contains(sign)))||
    ((squares[3].classList.contains(sign))&&(squares[4].classList.contains(sign))&&(squares[5].classList.contains(sign)))||
    ((squares[6].classList.contains(sign))&&(squares[7].classList.contains(sign))&&(squares[8].classList.contains(sign)))||
    ((squares[0].classList.contains(sign))&&(squares[4].classList.contains(sign))&&(squares[8].classList.contains(sign)))||
    ((squares[1].classList.contains(sign))&&(squares[4].classList.contains(sign))&&(squares[7].classList.contains(sign)))||
    ((squares[2].classList.contains(sign))&&(squares[5].classList.contains(sign))&&(squares[8].classList.contains(sign)))||
    ((squares[2].classList.contains(sign))&&(squares[4].classList.contains(sign))&&(squares[6].classList.contains(sign)))||
    ((squares[0].classList.contains(sign))&&(squares[3].classList.contains(sign))&&(squares[6].classList.contains(sign))))
    {
        backColor(sign)
        return true 
    }    
}


function finish() {

}

function backColor(sign) {
    color = '#781F19'
    if ((squares[0].classList.contains(sign))&&(squares[1].classList.contains(sign))&&(squares[2].classList.contains(sign))){
        squares[0].style.backgroundColor = color
        squares[1].style.backgroundColor = color
        squares[2].style.backgroundColor = color
    }
    else if ((squares[3].classList.contains(sign))&&(squares[4].classList.contains(sign))&&(squares[5].classList.contains(sign))){
        squares[3].style.backgroundColor = color
        squares[4].style.backgroundColor = color
        squares[5].style.backgroundColor = color
    }
    else if ((squares[6].classList.contains(sign))&&(squares[7].classList.contains(sign))&&(squares[8].classList.contains(sign))){
        squares[6].style.backgroundColor = color
        squares[7].style.backgroundColor = color
        squares[8].style.backgroundColor = color
    }
    else if ((squares[0].classList.contains(sign))&&(squares[4].classList.contains(sign))&&(squares[8].classList.contains(sign))){
        squares[0].style.backgroundColor = color
        squares[4].style.backgroundColor = color
        squares[8].style.backgroundColor = color
    }
    else if ((squares[1].classList.contains(sign))&&(squares[4].classList.contains(sign))&&(squares[7].classList.contains(sign))){
        squares[1].style.backgroundColor = color
        squares[4].style.backgroundColor = color
        squares[7].style.backgroundColor = color
    }
    else if ((squares[2].classList.contains(sign))&&(squares[5].classList.contains(sign))&&(squares[8].classList.contains(sign))){
        squares[2].style.backgroundColor = color
        squares[5].style.backgroundColor = color
        squares[8].style.backgroundColor = color
    }
    else if ((squares[2].classList.contains(sign))&&(squares[4].classList.contains(sign))&&(squares[6].classList.contains(sign))){
        squares[2].style.backgroundColor = color
        squares[4].style.backgroundColor = color
        squares[6].style.backgroundColor = color
    }
    else if ((squares[0].classList.contains(sign))&&(squares[3].classList.contains(sign))&&(squares[6].classList.contains(sign))){
        squares[0].style.backgroundColor = color
        squares[3].style.backgroundColor = color
        squares[6].style.backgroundColor = color
    }
}
