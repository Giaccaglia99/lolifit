// MENU MOBILE

const menuBtn = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".nav-links")

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active")

})


// SCROLL SUAVE

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior: "smooth"

})

})

})


// ANIMACION AL HACER SCROLL

function reveal(){

let reveals = document.querySelectorAll(".reveal")

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight
let elementTop = reveals[i].getBoundingClientRect().top
let elementVisible = 150

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll", reveal)


// FORMULARIO

const form = document.getElementById("form-reserva")

form.addEventListener("submit", function(e){

e.preventDefault()

fetch(form.action, {
method: "POST",
body: new FormData(form),
headers: {
'Accept': 'application/json'
}
})

.then(response => {

document.getElementById("popup").classList.add("show")

form.reset()

setTimeout(() => {
document.getElementById("popup").classList.remove("show")
}, 4000)

})

})
// Calendario
const fechaInput = document.getElementById("fecha")

// fecha mínima = hoy
const hoy = new Date()
const yyyy = hoy.getFullYear()
const mm = String(hoy.getMonth() + 1).padStart(2, '0')
const dd = String(hoy.getDate()).padStart(2, '0')

const hoyFormato = `${yyyy}-${mm}-${dd}`

fechaInput.min = hoyFormato


// bloquear sábados y domingos
fechaInput.addEventListener("change", function(){

const fecha = new Date(this.value)
const dia = fecha.getDay()

if(dia === 0 || dia === 6){

alert("Solo se puede reservar de lunes a viernes")

this.value = ""

}

})