/*
function debounce (fn, delay)




function search (query) {
    console.log(`searching for` ,query)

}
search('ha')
search('har')
search('hard')
search('hard J')
search('hard JS')

*/
/*

function debounce (fn , delay) {
    let timer;

    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    }
}

*/

function test() {

    const timer = setTimeout(function () {
        console.log("Hello");
    }, 1000);

    return timer;
}

//const timerId = test();

console.log(test());




function getAge() {
    return 21;
}
const napi = getAge(23)

console.log(napi)
