// console.log("Class 4 Arrays");
/*RESOURCES FOR ARRAY METHODS:
* https://www.w3schools.com/js/js_array_methods.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Using strings to list:
let movie1 = "The Matrix";
let movie2 = "Star Wars";
let movie3 = "Harry Potter";
let movie4 = "Hunger Games";
let movie5 = "Black Panther";

console.log("My Movies as variables and strings:", movie1, movie2, movie3, movie4, movie5);

// Using an array for a list:
let movies = [
    "Star Wars", 
    "Twilight", 
    "Harry Potter", 
    "Hunger Games", 
    "Black Panther"
];

console.log("My Movies", movies);

/********** ADD MOVIE TO END OF ARRAY **********/
movies.push("Mean Girls");
// Look at the array in the console. Now there are 6 items. The new item is the last one
console.log("Add Mean Girls To End", movies);

/**********  ADD MOVIE TO BEGINNING OF ARRAY **********/
movies.unshift("Mean Girls");
// Look at the array in the console. Now there are 7 items. The new item is the first one
console.log("Add Mean Girls To Beginning", movies);

/********** REMOVE LAST ARRAY ITEM **********/
// Oops! I added the same movie to the beginning and end...now I want to remove the last one because "Mean Girls" is one of my favs!
movies.pop();
// Check out that slimmer array!
console.log("Remove last item", movies);

/********** REMOVE FIRST ARRAY ITEM **********/
// I lied...I don't really like "Mean Girls"...like at all, so lets get it out of there!
movies.shift();
// Check out that super lit array! It's back down to 5!
console.log("Remove first item", movies);

/********** REPACE ARRAY ITEM **********/
// Lets say I want to update the movie in the second spot in the array...
movies[1] = "The Matrix Trilogy";
// Aww yeah!
console.log("Replace Second Movie", movies);

/********** ADD SOME MOVIES **********/
// Lets add some movies to the array somwhere in the middle
// The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
movies.splice(2, 0, "Step it Up", "The Avengers");
// Harry, yur a wizard!
console.log("Add Some Movies", movies);

/********** REMOVE SOME MOVIES **********/
// Lets remove some elements from the array
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.
//Because we didn't include any items to add, nothing will be added.
movies.splice(2, 1); 
console.log("Remove Some Movies", movies);

// My friend has some movies too!
let friendsMovies = [
    "Thor",
    "Madmen",
    "Oceans 11"
];

/********** MERGING TWO ARRAYS **********/
//I think I like those movies too!
let ourMovies = movies.concat(friendsMovies);
// Let's check it out!
console.log("Friend and My Movies!", ourMovies);

// I am sure you have some movies too!
let yourMovies = [
    " ",
    " ",
    " ",
    " ",
];

// Let's get them all together
let allOurMovies = movies.concat(friendsMovies, yourMovies);
// ooooo this is gonna be good!
console.log("All of Our Movies!", allOurMovies);

// While we are at it, lets order the movies by name
allOurMovies.sort();
console.log("Sort", allOurMovies); 

// Let's go the other way!
allOurMovies.reverse(); 
console.log("Reverse", allOurMovies); 

/********** CONVERT AN ARRAY TO COMMA SEPARATED LIST **********/
// But, we don't want our movies to show up as an array... we want it to be more readable. Let's convert it to a comma separated list.
let joinIt = allOurMovies.join(", ");
console.log("JOIN BABY!", joinIt);
