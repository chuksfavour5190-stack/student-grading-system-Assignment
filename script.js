
const studentForm = document.getElementById("studentForm");
const result = document.getElementById("result");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    const mathematics = Number(document.getElementById("mathematics").value);
    const english = Number(document.getElementById("english").value);
    const computerStudies = Number(document.getElementById("computerStudies").value);

    const totalScore = mathematics + english + computerStudies;

    let remark;

    if (totalScore >= 70) {
        remark = "Excellent";
    } else if (totalScore >= 50 && totalScore <= 69) {
        remark = "Good";
    } else if (totalScore >= 35 && totalScore <= 49) {
        remark = "You can do better";
    } else {
        remark = "Fail";
    }

    console.log("STUDENT EXAMINATION RESULT");
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Mathematics: " + mathematics);
    console.log("English: " + english);
    console.log("Computer Studies: " + computerStudies);
    console.log("Total Score: " + totalScore);
    console.log("Remark: " + remark);

    result.style.display = "block";

    result.innerHTML = `
        <h2>Student Examination Result</h2>
        <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Mathematics:</strong> ${mathematics}</p>
        <p><strong>English:</strong> ${english}</p>
        <p><strong>Computer Studies:</strong> ${computerStudies}</p>
        <p><strong>Total Score:</strong> ${totalScore}</p>
        <p><strong>Remark:</strong> ${remark}</p>
    `;
});


const fizzBuzzButton = document.getElementById("runFizzBuzz");
const fizzBuzzResults = document.getElementById("fizzBuzzResults");

fizzBuzzButton.addEventListener("click", function() {
    fizzBuzzResults.innerHTML = "";

    console.group("ASSIGNMENT 2: FIZZBUZZ RESULTS");

    for (let number = 1; number <= 100; number++) {
        let output;

        if (number % 3 === 0 && number % 5 === 0) {
            output = "FizzBuzz";
        } else if (number % 3 === 0) {
            output = "Fizz";
        } else if (number % 5 === 0) {
            output = "Buzz";
        } else {
            output = number;
        }

        const item = document.createElement("span");
        item.classList.add("fizz-item");
        item.textContent = output;

        if (output === "Fizz") {
            item.classList.add("fizz");
        } else if (output === "Buzz") {
            item.classList.add("buzz");
        } else if (output === "FizzBuzz") {
            item.classList.add("fizzbuzz");
        }

        fizzBuzzResults.appendChild(item);
        console.log(output);
    }

    console.groupEnd();
});
