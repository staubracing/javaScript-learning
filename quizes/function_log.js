var num = 8; // global variable

function display() {
    var num = 10; // local variable
    console.log(num);
}

display();
console.log(num);

