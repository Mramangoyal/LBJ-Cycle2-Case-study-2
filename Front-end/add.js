function back() {
    location.href = "index.html";
}

function add(event) {
event.preventDefault();
    const id = document.getElementById("id").value.trim();
    const name = document.getElementById("name").value.trim();
    const state = document.getElementById("state").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const stream = document.getElementById("stream").value.trim();
    const qual = document.getElementById("qualification").value.trim();
    const city = document.getElementById("city").value.trim();

    if (document.getElementById("male").checked === true) {
        var gender = "male";
    } else if (document.getElementById("female").checked === true) {
        var gender = "female";
    }
    const student = {
        id: id,
        name: name,
        gender: gender,
        dob: dob,
        city: city,
        state: state,
        email: email,
        qual: qual,
        stream: stream

    }

    yourUrl = 'http://localhost:3000/students';
    data = JSON.stringify(student)
    $.ajax({
        url: 'http://localhost:3000/students',
        dataType: "json",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(student),
        success: function (data2) {
            console.log(data2)
        },
        error: function () {

        },
        failure: function (response) {
            console.log("call failed");
            console.log(response);
        }
    });

    console.log(student)
    alert("Form submitted successfully!");
}