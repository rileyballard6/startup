


//Insert name at top of screen from mock database
// Go through mock database and inject numbers based on form data
// Add names from database to the list of forms to review
window.onload = async function() {
    const response = await fetch("http://localhost:3000/logininfo");
    const jsondata = await response.json();
    console.log(jsondata);
    document.getElementById("full_name").innerHTML = "Welcome back, " + jsondata.mock_database[0].name;
    var length = jsondata.responses.length;
    document.getElementById("data_number").innerHTML = length;
    var to_review = 0;
    var complete = 0;
    // Will replace eventually with websocket to live update the numbers of to review and complete when forms are reviewed.
    for (var i = 0; i < length; i++) {
        if (!jsondata.responses[i].form_complete) {
            to_review++;
        } else {
            complete++;
        }
        var employee_form = document.getElementById("employee-form").cloneNode(true);
        employee_form.childNodes[3].innerHTML = jsondata.responses[i].name;
        employee_form.childNodes[1].setAttribute("onclick", "complete_form('" + jsondata.responses[i].name + "')") ;
        employee_form.id = jsondata.responses.name;
        employee_form.childNodes[5].childNodes[1].innerHTML = "Answer 1: " +  '"' + jsondata.responses[i].goals + '"';
        employee_form.childNodes[5].childNodes[3].innerHTML = "Answer 2: " +  '"' + jsondata.responses[i].goal_rate + '"';
        employee_form.childNodes[5].childNodes[5].innerHTML = "Answer 3: " +  '"' + jsondata.responses[i].next_goals + '"';
        document.getElementById("employee-form").after(employee_form);
    }
    document.getElementById("review_number").innerHTML = to_review;
    document.getElementById("complete_number").innerHTML = complete;
    document.getElementById("employee-form").style.display = "none";

}

//set form complete to true in database
function complete_form(name) {
    var user_clicked = mock_database.find(user => user.name === name)
    user_clicked.form_complete = true;
}
