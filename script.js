// get references to the form and display area
var Form = document.getElementById('resumeform');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
Form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('LinkedIn').value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById('Skills').value;
    var experience = document.getElementById('experience').value;
    //generate the resume content dynamically
    var resumeHTML = "\n    <h2><b> Editable Resume </b> </h2>\n    <h3>Personal Information </h3>\n    <p><b> Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b> Phone: </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b> Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b> LinkedIn: </b><span contenteditable=\"true\">").concat(linkedin, "</span></p>\n\n    <h3>Education</h3>\n    <p><b> Education: </b><span contenteditable=\"true\">").concat(education, "</span></p>\n\n    <h3> Skills</h3>\n    <p><b> Skills: </b><span contenteditable=\"true\">").concat(skills, "</span></p>\n\n    <h3>Experience</h3>\n    <p><b> Experience: </b><span contenteditable=\"true\">").concat(experience, "</span></p>\n    \n    ");
    //display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
