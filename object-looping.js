// Looping through an Object 
// for in loop

var shoppingCart = {
    books: 3, 
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

for(propertyName in shoppingCart){
    // console.log(propertyName);
    var value=shoppingCart[propertyName];
    console.log(propertyName,value);
}



