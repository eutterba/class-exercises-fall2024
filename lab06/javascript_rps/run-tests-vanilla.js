import { helloWorld, rps } from "./your-task.js";
import { assertPrint, runAllTests } from "./helpers.js";

function testHelloWorld() {
    return assertPrint(
        helloWorld() === "Hello world!",
        'it returns "Hello world!"',
    );
}

function testPaperBeatsRock() {
    return assertPrint(
        rps("rock", "paper") === "Paper wins!",
        "paper beats rock",
    );
}

function testPaperBeatsRockCommutes() {
    return assertPrint(
        rps("paper", "rock") === "Paper wins!",
        "paper beats rock (flipped)",
    );
}

function testRockBeatsScissors() {
    return assertPrint(
        rps("rock", "scissors") === "Rock wins!",
        "rock beats scissors",
    );
}

function testRockBeatsScissorsCommutes() {
    return assertPrint(
        rps("rock", "scissors") === "Rock wins!",
        "rock beats scissors (flipped)",
    );
}

function testScissorsBeatsPaper() {
    return assertPrint(
        rps("scissors", "paper") === "Scissors wins!",
        "scissor beats rocks",
    );
}

function testScissorsBeatsPaperCommutes() {
    return assertPrint(
        rps("paper", "scissors") === "Scissors wins!",
        "scissor beats rocks",
    );
}

function testRockTie() {
    return assertPrint(rps("rock", "rock") === "Tie!", "rock tie");
}

function testPaperTie() {
    return assertPrint(rps("paper", "paper") === "Tie!", "paper tie");
}

function testScissorTie() {
    return assertPrint(rps("scissors", "scissors") === "Tie!", "scissors tie");
}

function testHand1Misinput() {
    return assertPrint(rps("skizzors", "rock") === "Invalid", "hand1 misinput");
}

function testHand2Misinput() {
    return assertPrint(rps("rock", "skissors") === "Invalid", "hand2 misinput");
}

function testMultiMisinput() {
    return assertPrint(
        rps("pauper", "skizzors") === "Invalid",
        "multiple misinputs",
    );
}

// add more test functions here to exhaustively test your rps function...

// Once you have defined each test function, don't forget to
// add the function definition to the test harness:
runAllTests([
    testHelloWorld,
    testPaperBeatsRock,
    testPaperBeatsRockCommutes,
    testRockBeatsScissors,
    testRockBeatsScissorsCommutes,
    testScissorsBeatsPaper,
    testScissorsBeatsPaperCommutes,
    testRockTie,
    testPaperTie,
    testScissorTie,
    testHand1Misinput,
    testHand2Misinput,
    testMultiMisinput,
]);
