/*************************************************************************************************************
 1.
Declare an array named songs that contains five different names of songs as strings.

Access the first song in the array and print it to the console

Now do the same with the third song in the array.

Stage, commit, and push changes. Let Git be on your team.

Write one line of code that changes the value of the last song in the array to "Happy" 
(overwriting the previous value).

Create a new variable called jamFour and set it equal to the fourth song in the array.

Add another song to the end of the array.

Stage, commit, and push changes. Let Git be on your team.

Add another song to the beginning of the array.

Print the length of the array to the console

Remove the last song from the end of array, and then print the length of the array to the console one more time.

Stage, commit, and push changes. Let Git be on your team.

Write a for loop to iterate through every song in the array and print each song's value to the console.

Copying from that loop you just wrote, modify it to print every song's value 
and every song's index in this format: 3, "Office Theme" or 0, "Billy Jean" etc.

Declare a variable named lastSong that will always point to the last element of the 
songs array, no matter how many songs are in the array.
********************************************************************************************************************/

var virgins = ["Trap Anthem", "Caught Simpin'", "ZenLoaded", "Lavender Lotion", "Stop Cappin'" ];

console.log(virgins[0]);

console.log(virgins[2]);

var jamFour = virgins[3];

virgins.push("Big Bag");

virgins.unshift("Anime Thighs");

console.log(virgins[6]);

console.log(virgins.length);

virgins.pop();

console.log(virgins.length);

for ( let i = 0; i <= virgins.length; i++) {
    console.log(` ${i}, "${virgins[i]}"`);
}

let lastSong = virgins.length;

console.log("The last song in the array is: " + virgins[lastSong]);

/*************************************************************************************************************
2.
Create new file called numbers.js

Declare an array of at least 6 integers. Create a function that will sort the integer array 
in ascending and descending order.

Stage, commit, and push changes. Let Git be on your team.
********************************************************************************************************************/

var numArr = [2, 3, 4, 6, 2, 9];

console.log(numArr);

numArr =numArr.sort();

console.log(numArr);

/*************************************************************************************************************
3. 
Create a list of your favorite movies, music, or video games using a multidimensional array.

First decide on the genres. Need at least 3 genres.

Ex: For movies - action, thriller, comedy.
Add titles to each genre. At least 2 titles per genre

Create a series of statements to access elements

Access the second element of the third array

Replace the first element of the second array with another

Using for loops, iterate through the arrays and print the elements to the console.

Stage, commit, and push changes. Let Git be on your team.

********************************************************************************************************************/

const anime = [
    romcom = ["Domestic Girlfriend", "Plastic Memories"],
    action = ["Akame Ga Kill", "Fire Force"],
    isekai = ["Shield Hero", "That time i was reincarnated as a slime"]
];

anime[0][1] = "Bunny Girl Senpai";

console.log("--------------------------")

console.log("Rom Coms: ")

for (let i = 0; i < romcom.length; i++) {
        console.log(romcom[i]);
}

console.log("--------------------------")

console.log("Action: ")

for (let i = 0; i < action.length; i++) {
    console.log(action[i]);
}

console.log("--------------------------")

console.log("Isekai: ");

for (let i = 0; i < isekai.length; i++) {
    console.log(isekai[i]);
}
