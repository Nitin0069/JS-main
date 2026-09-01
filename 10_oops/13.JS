function one() {
    console.log("A");

    two();

    console.log("D");
}

function two() {
    console.log("B");

    three();

    console.log("C");
}

function three() {
    console.log("X");
}

one();