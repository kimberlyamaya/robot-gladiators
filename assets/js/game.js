//defining variables here at the top
//starting points of the game
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can log multiple values at once like this
// Displaying current values
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

// Displaying current values
console.log(enemyName, enemyHealth, enemyAttack);

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;

        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining health."
        );

        //Check enemy's health
        //If enemyHealth is zero or below, the enemy-robot has lost.
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        //Else enemyHealth is above 0 and the enemy-robot can still fight.
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack

        // Log a resulting message to the console so we know that it worked.
        console.log (
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining health."
        )

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    //if player chooses to skip 
    } 
    else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.alert("Are you sure you'd like to quit?");

        console.log(confirmSkip);

        var confirmSkip = true;

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract $$ form Playermoney for skipping
            playerMoney = playerMoney - 2;

            console.log (playerMoney);
        }
        // if no (false), ask question again by running fight () again
        else {
            fight();
        }
    }
    else {
            window.alert("You need to choose a valid option. Try Again!"); 
    }
}

fight();
