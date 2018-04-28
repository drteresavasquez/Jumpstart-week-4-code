
// This for loop will start at one and loop through as long as "i" is less than 6. Which number will it stop at? Oh, and enjoy the cat faces...you're welcome.
for (let i = 1; i < 6; i++) {
    console.log(`${i} Kitty: =^.^=`);
}

// Let's create a new array with some food in it.
let array = ["Chicken", "Steak", "Shrimp", "Tacos"];

// Let's find out how many food items the array contains
console.log("Array Length:", array.length);

// Now, let's take a look at how we can see a specific food item in the array.
console.log("Select an item from the array:",array[0]);

/********* FOR LOOP ***********/
// Let's list all of the food items contained in the array in the console.
for (i = 0; i < array.length; i++) {
    console.log(`Array Item ${i+1}:`, array[i]);
}

/********* WHILE LOOP **********/
let sheepCounted = 0;

while(sheepCounted < 10){
    console.log(`I have counted ${sheepCounted} sheep!`);
    sheepCounted++;
}

// Checkout when this console log runs...why did it run then?
console.log("ZZZZZZZZZZ");