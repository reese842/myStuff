//fizzbuzz so multiple of 3 print fizz multile of 5 prints buzz if its both it will print fizzbuzz


for (let i=1; i<=100; i+=1){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 ===0){
        console.log("Fizz");
    }else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    } 
}



