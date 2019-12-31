/*
TODO --- Let's build a fun quiz game in the console! ---
? 1. Build a function constructor called Question to describe a question. A question should include:
    * a) question itself
    * b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
    * c) correct answer (I would use a number for this)
? 2. Create a couple of questions using the constructor
? 3. Store them all inside an array
? 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
? 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
? 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
? 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


let score = 0

class Question {
    constructor(question, options, answer) {
        this.question = question
        this.options = options
        this.answer = answer
        this.displayQuestion = function () {
            console.log(this.question)
        }
        this.displayOptions = function () {
            this.options.forEach((option, index) => {
                console.log(`${index}: ${option}`)
            })
        }
    }
}

const question1 = new Question('What\'s my name?', ['Joe','Jose','John'], 1)
const question2 = new Question('How old am I?', [22, 23, 24], 2)
const question3 = new Question('What pet do I have?', ['Cat', 'Turtle', 'Dog'], 0)
const questionsArray = [question1, question2, question3]

startGame()

function startGame () {
    let randomNumber = Math.floor(Math.random() * 3)
    const question = questionsArray[randomNumber]
    question.displayQuestion()
    question.displayOptions()
    const answer = parseInt(prompt('Type your answer (write "-1" to exit the game):'))

    if (answer === question.answer) {
        score++
        alert('Correct')
        startGame()
    } else if (answer === -1) {
        exitGame()
    } else {
        alert('Wrong!')
        startGame()
    }
}

function exitGame () {
    console.log('Thanks for playing!')
    console.log(`Your score is: ${score}`)
}


