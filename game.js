import { words } from "./words.js";
let score = 0;
const wordText = document.querySelector(".word"),
    hintText = document.querySelector("#hint"),
    timeText = document.querySelector("#time b"),
    inputField = document.querySelector("#crt-wrd"),
    refreshBtn = document.querySelector("#refresh-btn"),
    checkBtn = document.querySelector("#check-btn");

function randomQuest() {
    let randomNumber = getRandomInt();

    for (let i = 0; i < words.length; i++) {
        if (i == randomNumber) {
            wordText.innerText = words[i].jumbledWord;
            hintText.innerText = words[i].hint;

            checkBtn.onclick = () => {

                if (inputField.value === words[i].word) {
                    time = 30;
                    timer()
                    score++;
                    console.log(score)
                    localStorage.setItem("score", score)
                    inputField.value = ""
                    randomQuest();
                } else {
                    location.href = "./score.html"
                }

            };
        }

    }

}
randomQuest();


refreshBtn.onclick = () => {
    clearInterval(interval);
    location.reload();
};

function getRandomInt() {
    let num = Math.floor(Math.random() * words.length);
    return num;
}

let time = 30;
function timer() {
    timeText.innerText = time;
    if (time == 0) {
        location.href = "./score.html";
    }
    time--;
}
let interval = setInterval(timer, 1000);
