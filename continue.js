//Use of  Continue Break in Loop

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

// for(var i=0; i<numbers.length; i++){
//     if(numbers[i]>100){
//         continue;
//     }
//     console.log(numbers[i]);
// }
for(var i=0; i<numbers.length; i++){
    if(numbers[i]>100){
        break;
    }
    console.log(numbers[i]);
}


