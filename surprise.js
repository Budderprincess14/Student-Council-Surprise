//Variables for host//
const hostName = "Amaya";
const hostAge = "17";
const hostFavoriteFood = "pancakes";
const hostFavoriteColor = "pink";

function theMoreYouKnow() {

    //Prompts the user to enter their name//
    let name = prompt("What is your name?");

    
    document.write("Hello ", name, ", it's nice to see you here!");

    //Prompts to give an age in years//
    let age = prompt("What is your age in years?");
    document.write('\n');

    if (age > hostAge) {
        let olderThan = Number(age) - Number(hostAge);
        document.write("Oh, so you're ", age, " years old! You are ", olderThan, " years older than Amaya!");
    } else if (age < hostAge) {
        let youngerThan = Number(hostAge) - Number(age);
        document.write("Oh, so you're ", age, " years old! You are ", youngerThan, " years younger than Amaya!");
    } else if (age === hostAge) {
        document.write("Oh, so you're ", age, " years old! You are the same age as Amaya!");
    } else {
        document.write("\n");
        document.write("That is an invalid response. Please try again.");
    }

    //Prompts to give a favorite food//
    let favoriteFood = prompt("What is your favorite food? Please use all lowercase letters!");
    document.write('\n');

    if (favoriteFood === hostFavoriteFood) {
        document.write("We both have the same favorite food: pancakes!");
    } else {
        document.write("Your favorite food is ", favoriteFood, "? Awesome!")
    }

    //Prompts to give a favorite color//
    let favoriteColor = prompt("What is your favorite color? Please use all lowercase letters!");
    document.write('\n');

    if (favoriteColor === hostFavoriteColor) {
        document.write("Pink is also one of my favorite colors!");
    } else {
        document.write("If your answer was teal or purple, I love those too. Pink is my favorite color though!");
    }

}