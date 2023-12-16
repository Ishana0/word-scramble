var score = localStorage.getItem("score")
console.log(score)

var text = document.getElementById("time-off")
text.textContent = score

var playBtn = document.getElementById("play-agn-btn")
playBtn.onclick = () => {
    location.href = "./game.html"
}

