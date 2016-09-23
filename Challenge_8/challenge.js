// Exercise 1

for(var i=0; i<=100; i++){
    console.log(i);
}
console.log("We've reached 100 captain!");

// Exercise 2

for(var i="#"; i.length<=7; i=i+"#"){
    console.log(i);
}

// Exercise 3

for(var i = 1; i<= 100; i++){
    var print = "";

    if (i%3 == 0)
        print = "Buzz";

    else if (i%5 == 0)
        print = "Fizz";

    if (i%(3*5) == 0)
        print = "FizzBuzz";

    console.log (print || i);
}

// Exercise 4

var chess = "";

for (var x=0; x<8; x++){
    for (var y=0; y<8; y++){

        if((x+y) % 2 == 0){
            chess += "#";
            } 

        else{
            chess += " ";
            }
    }
    chess += "\n";
}
console.log(chess);