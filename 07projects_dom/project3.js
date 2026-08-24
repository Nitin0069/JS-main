const clock = document.querySelector('#clock')
let date = new Date ()
const time = date.toLocaleTimeString()

setInterval(function () {
    let date = new Date ()
const time = date.toLocaleTimeString()
clock.innerHTML = time 
},1000)