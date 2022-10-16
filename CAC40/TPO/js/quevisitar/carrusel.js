const slider = document.querySelector("#slider")
let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length-1] //ultima posicion semi automatico

let vacio= document.createTextNode("")

const btnIzq = document.querySelector("#btn-izq")
const btnDer = document.querySelector("#btn-der")

let ban=0

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]
    slider.style.marginLeft = "-200%"
    slider.style.transition = "all 0.6s"
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = "-100%"
    },600)
}
//setTimeout(hace esto --una funcion-- , despues de este tiempo) 

function moverIzquierda(){
    let sliderSection = document.querySelectorAll(".slider__section")
    let sliderSectionLast = sliderSection[sliderSection.length-1]
    slider.style.marginLeft = "0%"
    slider.style.transition = "all 0.6s"
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = "-100%"
    },600)
}

btnDer.addEventListener('click', function(){
    moverDerecha();
} )
btnIzq.addEventListener('click',function(){
    moverIzquierda();
})

setInterval(function(){
    moverDerecha();
},10000)