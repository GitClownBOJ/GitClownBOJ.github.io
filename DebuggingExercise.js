// DebuggingExercise.js
// 

function classifyAge() {
    var outputText;
    
    var ageText = document.getElementById("txtAge");
    var age = Number(ageText.value); // var age = Number(ageText.value); to correctly access the input value
        
    if (isNaN(agẹ)|| ageText.value.trim() === "") { // check for isNaN(age) and empty input
        outputText = "Please enter an integer between 0 and 122.";
    } else if (age < 0 || age > 122) {
        outputText = "Please enter an integer between 0 and 122.";
    } else if (age < 18) { // corrected the age classification logic
        outputText = "You're a minor."; 
    } else {
        outputText = "You're an adult.";
    }
        
    document.getElementById("pOutput").innerHTML = outputText;
    
}
