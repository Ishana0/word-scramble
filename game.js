import {words} from './words.js'
const wordText = document.querySelector(".word"),
hintText = document.querySelector("#hint"),
timeText = document.querySelector("#time b"),
inputField = document.querySelector("#crt-wrd"),
refreshBtn = document.querySelector("#refresh-btn"),
checkBtn = document.querySelector("#check-btn");

let wordsArray = words
// console.log(wordsArray)
for(let i = 0; i<wordsArray.length; i++) {
    let num = getRandomInt()
    if(i == num) {
        console.log(wordsArray)
        // console.log(num)
        // console.log(words[i].jumbledWord)
        // console.log(words[i].hint)
        let correctWord = words[i].word.toUpperCase()
        wordText.innerText = words[i].jumbledWord;
        hintText.innerText = words[i].hint
        checkBtn.onclick = () => {
            if(inputField.value.toLowerCase() == words[i].word) {
                alert("You are right")
                setInterval(timer,1000);
                location.reload()
            }else if(inputField.value != words[i].word && inputField.value != "") {
                alert("You are wrong and the correct word is "+correctWord)
            }else if(inputField.value == "") {
                alert("You didn't enter anything")
            }
        }

    }
}



refreshBtn.onclick = () => {
    setInterval(timer,1000);
    location.reload();
}

function getRandomInt() {
    let num = Math.floor(Math.random()*23)
    return num;
}

let time=30;
function timer() {
    timeText.innerText = time;
    if(time==-1) {
        alert("You time gone")
        location.reload();
    }
    time--;
}
setInterval(timer,1000);







