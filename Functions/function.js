//Assignment 06 Functions
var myFavoriteFood = "Biryani";
//Ragular Function 
function favoriteFoodRegularFunc(myFavoriteFood) {
    console.log(myFavoriteFood);
}
favoriteFoodRegularFunc("My favorite food is ".concat(myFavoriteFood));
//Expretion Function 
var favoriteFoodExpreFunc = function (myFavoriteFood) {
    console.log(myFavoriteFood);
};
favoriteFoodExpreFunc("My favorite food is ".concat(myFavoriteFood));
//Arrow Function 
var favoriteFoodArrowFunc = function (myFavoriteFood) {
    console.log(myFavoriteFood);
};
favoriteFoodArrowFunc("My favorite food is ".concat(myFavoriteFood));
