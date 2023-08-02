const handOps = {
    "rock": "rock.png",
    "paper": "paper.png",
    "scissors": "scissors.png"
};

let uSCORE = document.getElementById("ScoreUser").innerText;
let CompSCORE = document.getElementById("ScoreComp").innerText;
let count = 0;

const UserPick = (hand) => {
    console.log(hand);

    let boddy = document.querySelector(".boddy");
    boddy.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    document.getElementById("userPickImage").src = handOps[hand];

    pickComputerHand(hand);

}

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    // Math.floor because array indexes range from 0 to 2

    // set computer image 
    document.getElementById("computerPickImage").src = handOps[cpHand];

    referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
        CompSCORE = CompSCORE + 1;

    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        uSCORE = uSCORE + 1;

    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");

    }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        uSCORE = uSCORE + 1;

    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
        CompSCORE = CompSCORE + 1;

    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");

    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");

    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
        CompSCORE = CompSCORE + 1;

    }
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        uSCORE = uSCORE + 1;

    }
    document.getElementById("ScoreUser").innerText = uSCORE;
    document.getElementById("ScoreComp").innerText = CompSCORE;
};

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

// const setScore = (uSCORE, CompSCORE) => {

//     document.getElementById("ScoreUser").innerText = uSCORE;
//     document.getElementById("ScoreComp").innerText = CompSCORE;

// }
const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".boddy");
    hands.style.display = "flex";
}

const ruleSet = () => {
    count = count + 1;
    if (count % 2 == 0) {
        document.querySelector(".ruleset").style.display = "none";
    } else {
        document.querySelector(".ruleset").style.display = "flex";
    }

}