var counter = 1;
var limit = 10;

var gradeLookup;

// Add two courses to start out the site
window.onload = startUp;

function startUp() {
    addCourse();
    addCourse();
    calculateGPA();
}


function removeLastCourse() {
    var parentNode = document.getElementById("courses");
    var courses = parentNode.querySelectorAll(".course");
    parentNode.removeChild(courses[courses.length - 1])

    // Add prior remove button (If there is more than one course)
    if (counter !== 3)
    {
        var removeButton = document.createElement("p")
        removeButton.className = "remove-course";
        removeButton.onclick = removeLastCourse;
        removeButton.innerHTML = "X";
        courses[courses.length - 2].appendChild(removeButton);
    }
    counter--;
    calculateGPA();

}

function addInput(divName, input) {
    var newdiv = document.createElement("div");
    newdiv.className = "course";
    newdiv.innerHTML = input;
    document.getElementById(divName).appendChild(newdiv);
}

