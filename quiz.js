// Function to check the user's answer
function checkAnswer() {
    // Correct answer for the quiz question
    const correctAnswer = "4"; // The correct answer is "4"

    // Select the checked radio button by its name attribute
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');

    // Declare a variable to store the user's answer
    let userAnswer;

    // Check if a radio button is selected
    if (selectedRadio) {
        // Access the value property of the selected radio button
        userAnswer = selectedRadio.value;
    } else {
        userAnswer = null; // No radio button is selected
    }

    // Get the feedback element to display the result
    const feedbackElement = document.getElementById('feedback');

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done."; // Correct answer feedback
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!"; // Incorrect answer feedback
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);