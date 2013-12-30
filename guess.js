/* Creator:         Chris Williamson
 * Email:           chriswill0629@gmail.com
 * Date(original):  12/26/2013
 * Date(Revision1): 12/30/2013
 *      ChangeLog:  -Separated game into different functions
 *                  -Removed a few loops and arrays  
 * Purpose:         A simple javascript number guessing game
 */

var numberOfPlayers;
var playerNames = [];
var playerNumbers = [];
var gameExit = "NO";

// Dealer number
var dealer = Math.floor(Math.random() * 11);
if (dealer === 0) {
    dealer++;
}
// Number of players and their names function
function Player() {
    numberOfPlayers = prompt("How many players?");
    for (var i = 0; i < numberOfPlayers; i++) {
        var II = i + 1;
        playerNames[i] = prompt("What is the name for player " + II + "?");
        document.writeln(playerNames[i] + "<br>");
    }
}
//Player Numbers function
function PlayerNum() {
    for (var i = 0; i < numberOfPlayers; i++) {
        playerNumbers[i] = prompt("What is the number for " + playerNames[i] + "?");
        document.writeln(playerNumbers[i] + "<br>");
    }
}

// Winner Function
function Winner() {
    var win = false;
    for (var i = 0; i < numberOfPlayers; i++) {
        if (playerNumbers[i] === dealer) {
            win = true;
            document.writeln(playerNames[i] + " won!" + "<br>");
        }
    }
    if (win === false) {
        document.writeln("Dealer has won!" + "<br>");
    }
}

// Game Exit function
function GameExit(){
    var noData = true;
    while(noData){
        var gExit = prompt("Would you like to exit the game?");
        gExit = gExit.toUpperCase();
        switch(gExit){
            case "YES":
                noData = false;
                return "YES";
                break;
            case "NO":
                noData= false;
                return "NO";
                break;
            default:
                document.writeln("Invalid entry, try again!");
                break;
        }
    }
}

function NumberGuess(){
    Player();
    while(gameExit === "NO"){
        PlayerNum();
        Winner();
        gameExit = GameExit();
    }
}