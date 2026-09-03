/*function throttle (fn, delay) {
let lastCall = 0
return function (...args) {
    const now = Date.now()
    if(now - lastCall < delay ){
        return;
    }
    lastCall = now 
    return fn(...args);
}
}

function sendChatMessage (message) {
console.log(`sending message `, message)
}


const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2000)
sendChatMessageWithSlowMode("hi");
sendChatMessageWithSlowMode("hlo");
 sendChatMessageWithSlowMode("kaise ho")
 console.log(Date.now)



*/

function throttle (fn, delay) {
    let lastCall = 0;

return function (...args) {

let now = Date.now()
if (now - lastCall < delay) {


    return;
}
lastCall = now
return fn(...args)

}

}


const chalpada = throttle(chalana, 2000)


function chalana (value) {
console.log(`video starts in `, value)
}
chalpada("nitin")
chalpada("tanana")
chalpada("ifhif")
chalpada("tandjnfnana")









console.log("niitn")





function nakshu (bhadwa) {
    console.log("nakshu bhadwa hai kya ", bhadwa)    
}

function throotle (fn, delay) {
let intialtimee = 0
return function (...args) {
    const noOw = Date.now()
    if (noOw - intialtimee < delay) {

    
        return
    }

intialtimee = noOw
fn(...args)
}
}
const chalpad = throotle(nakshu,2000)
chalpad("yiiyiy")
chalpad("fjfjf");

