gradeLookup = {
    "A+": 4.3,
    "A": 4.00,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3.00,
    "B-": 2.7,
    "C+": 2.3,
    "C": 2.00,
    "C-": 1.7,
    "D+": 1.3,
    "D": 1.00,
    "F": 0.00
}


function addCourse() {
    let removeButton = "<p class='remove-course' onclick='removeLastCourse()'>X</p>";
     if (counter === limit) {
         alert("Max courses reached")
     }
     else {
         if (counter === 1) {
             removeButton = "";
         }
         if (counter !==1 && counter!==2) {
             // Remove the last remove button
             var courses = document.getElementById("courses");
             var lastCourse = courses.lastElementChild;
             var lastRemove = lastCourse.lastElementChild;
             lastCourse.removeChild(lastRemove);
         }

         addInput("courses",
         "<input type='text' class='name-input' name='course' value='Course " + counter + "'>" +
         "<select class='grade-input update-gpa' name='grade'"  + counter + "'>" +
             "<option value='none' selected>-</option>" +
             "<option value='A+'>A+</option>" +
             "<option value='A'>A</option>" +
             "<option value='A-'>A-</option>" +
             "<option value='B+'>B+</option>" +
             "<option value='B'>B</option>" +
             "<option value='B-'>B-</option>" +
             "<option value='C+'>C+</option>" +
             "<option value='C'>C</option>" +
             "<option value='C-'>C-</option>" +
             "<option value='D+'>D+</option>" +
             "<option value='D'>D</option>" +
             "<option value='F'>F</option>" +
         "</select>" +
         "<select class='level-input update-gpa' name='level'"  + counter + "'>" +
             "<option value='AP'>AP</option>" +
             "<option value='H'>Honors</option>" +
             "<option value='AC' selected>Academic</option>" +
         "</select>" +
         "<input class='credit-input update-gpa' type='number' id='credit" + counter + "' name='credit' value='3' step='0.5'>" +
         removeButton)
         counter++;
     }
}

function calculateGPA() {
    console.log("Calculate GPA Called\nCounter = " + counter)
    let form = document.forms.classes;
    let inputGrades = form.elements.grade;
    let inputLevels = form.elements.level;
    let inputCredits = form.elements.credit;

    var totalCredits = 0
    var gpaTotal = 0;
    for (i = 0; i < (counter - 1); i++) {
        var gpaValue;
        var creditValue;
        if (counter === 2) {  // If only one course
            gpaValue = gradeLookup[inputGrades.value];
            creditValue = parseFloat(inputCredits.value);
            // Add 0.5 for honors and 1.0 to gpaValue for AP
            if (gpaValue !== undefined) {
               if (inputLevels.value === "H") {
                   gpaValue += 0.5;
                }
                else if (inputLevels.value === "AP") {
                    gpaValue += 1;
                }
            }
        } else {
            gpaValue = gradeLookup[inputGrades[i].value];
            creditValue = parseFloat(inputCredits[i].value);
            // Add 0.5 for honors and 1.0 to gpaValue for AP
            if (gpaValue !== undefined) {
               if (inputLevels[i].value === "H") {
                   gpaValue += 0.5;
               }
               else if (inputLevels[i].value === "AP") {
                   gpaValue += 1;
               }
            }
        }
        if (gpaValue !== undefined) {
            totalCredits += creditValue;
            gpaTotal += (gpaValue * creditValue);
        }
    }
    gpa = (gpaTotal / totalCredits).toFixed(2);

    if (isNaN(gpa)) {
        document.getElementById("gpa").innerHTML = "-.--";
    }
    else {
        document.getElementById("gpa").innerHTML = gpa;
    }
}