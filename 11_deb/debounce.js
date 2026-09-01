/*function debounce (fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn,delay)
        timer = setTimeout(function () {
            console.log("hello")
        },1000)
    }
}
const myfunction = debounce();
myfunction()
//////////////////////////////////////////////////////////////////////////////////////

function debounce(fn, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(fn, delay);

    };
}

function search() {
    console.log("Searching...");
}

const debouncedSearch = debounce(search, 1000);


*/

function debounce  (fn, delay) {
let timerId;

return function (...args) {
    clearTimeout(timerId);
   timerId =  setTimeout (function () {
        fn(...args)
    },delay)

}
}

const search = function (query) {
    console.log(`searching for ` , query)
}


const searchWithDebounce = debounce(search, 500)

searchWithDebounce("laptop")
searchWithDebounce("laptop")