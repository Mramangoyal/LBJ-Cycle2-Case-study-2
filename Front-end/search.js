function reset2() {
    console.log("pass");
    temp = document.getElementById("searchResult");
            // temp.style.display="none";
            $("#searchResult").hide("slow");

}
function back() {
    location.href = "index.html";
}

function search(event) {
    event.preventDefault()
    const id = document.getElementById("id").value.trim();
    console.log("Searching id");
    const studentsearch = {
        id: id
    }
    yourUrl = 'http://localhost:3000/student/search';
    data = JSON.stringify(studentsearch)
    $.ajax({
        url: 'http://localhost:3000/student/search',
        dataType: "json",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(studentsearch),
        success: function (data2) {

            console.log(data2);
            //document.write(`<h1>Details of searched student are as follows:</h1><br><strong>Name</strong> = ${data2.Name}<br><strong>Student Id</strong> = data2.StudentId<br><strong>Gender</strong> = data2.Gender<br><strong>City</strong> = data2.City<br><strong>State</strong> = data2.State<br><strong>Email</strong> = data2.EmailId<br><strong>Qualification</strong> = data2.Name<br><strong>Stream</strong> = data2.Stream<br><strong>Date of Birth</strong> = data2.DateOfBirth<br>`);
            temp = document.getElementById("searchResult");
            temp.innerHTML = (
                `<h1>Details of searched student are as follows:</h1>
                <table border = "1px solid white" color : "black"  cellpadding="2px" width="100%" border-collapse = "collapse">
                    <tr>
                        <th>Field</th>
                        <th>Data</th>
                    </tr>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td> ${data2.Name}</td>
                    </tr>
                    <tr>
                        <td><strong>Student ID</strong></td>
                        <td>${data2.StudentId}</td>
                    </tr>
                    <tr>
                        <td><strong>Gender</strong></td>
                        <td> ${data2.Gender}</td>
                    </tr>
                    <tr>
                        <td><strong>City</strong></td>
                        <td>${data2.City}</td>
                    </tr>
                    <tr>
                        <td><strong>State</strong></td>
                        <td>${data2.State}</td>
                    </tr>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td>${data2.EmailId}</td>
                    </tr>
                    <tr>
                        <td><strong>Qualification</strong></td>
                        <td>${data2.Qualification}</td>
                    </tr>
                    <tr>
                        <td><strong>Stream</strong></td>
                        <td>${data2.Stream}</td>
                    </tr>
                    <tr>
                        <td><strong>Date of Birth</strong></td>
                        <td>${data2.DateOfBirth}</td>
                    </tr>
                </table>`
                )
            $("#searchResult").show("slow");
        },
        error: function () {
            temp = document.getElementById("searchResult");
            temp.innerHTML = (
                "<strong>Student Not Found!!<strong>"
                )
            $("#searchResult").show("slow");

        },
        failure: function (response) {
            console.log("call failed");
            console.log(response);
        }
    });
}