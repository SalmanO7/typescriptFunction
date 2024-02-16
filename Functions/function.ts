//Assignment 06 Functions
let myFavoriteFood: string = "Biryani"


//Ragular Function 
function favoriteFoodRegularFunc(myFavoriteFood:string) {
    console.log(myFavoriteFood)
}
favoriteFoodRegularFunc(`My favorite food is ${myFavoriteFood}`);

//Expretion Function 
const favoriteFoodExpreFunc = function(myFavoriteFood:string){
    console.log(myFavoriteFood)
}
favoriteFoodExpreFunc(`My favorite food is ${myFavoriteFood}`);

//Arrow Function 
const favoriteFoodArrowFunc = (myFavoriteFood: string) => {
    console.log(myFavoriteFood)
}
favoriteFoodArrowFunc(`My favorite food is ${myFavoriteFood}`)