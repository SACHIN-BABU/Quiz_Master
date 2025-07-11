function calculateScore(callback) {
  let answers = {
    q1: document.getElementById("q1").value,
    q2: document.getElementById("q2").value,
    q3: document.getElementById("q3").value
  }
  return callback(answers)
}

function strictScoring(ans) {
  let score = 0
  if (ans.q1 === "2") score++
  if (ans.q2.toLowerCase() === "13") score++
  if (ans.q3 === "10") score++
  return score
}

function checkScore() {
  let score = calculateScore(strictScoring)
  document.getElementById("result").innerText = "Your Score: " + score + "/3"
}
