# Quiz_Master
## Date:11-07-2025
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)
## HTML Code:
```
<!DOCTYPE html>
<html>
<head>
  <title>Quiz Master</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>QuizMaster</h1>

  <div class="quiz">
    <label>1 + 1 = <input type="text" id="q1"></label>
    <label>5 + 8 = <input type="text" id="q2"></label>
    <label>5 * 2 = <input type="text" id="q3"></label>
  </div>

  <button onclick="checkScore()">Check Score</button>
  <p id="result"></p>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  font-family: Arial;
  background: #b79c9c;
  padding: 30px;
  text-align: center;
}

h1 {
  color: #0f0101;
}

.quiz {
  margin-bottom: 20px;
}

label {
  display: block;
  margin: 10px 0;
}

input {
  padding: 5px;
  margin-left: 10px;
}

button {
  padding: 10px 20px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#result {
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
  color: #1a73e8;
}
```
## JavaScript Code:
```
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
```
## Output:
<img width="1916" height="860" alt="Screenshot 2025-07-11 133735" src="https://github.com/user-attachments/assets/fb4c959d-5674-4e7c-9c99-8ac8a7ce674f" />


## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.
