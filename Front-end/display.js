function reset2() {
    console.log("pass");
    temp = document.getElementById("result");
            $("#result").hide("slow");

}
function back() {
    location.href = "index.html";
}
$.get('http://localhost:3000/students',function (data2) {

            console.log(data2);
            temp = document.getElementById("result");
            for(i=0;i<data2.length;i++){
                temp.innerHTML += (
                `
                <table border = "1px solid white" color : "black"  cellpadding="2px" width="100%" border-collapse = "collapse">
                    <tr>
                        <th>Field</th>
                        <th>Data</th>
                    </tr>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td> ${data2[i].Name}</td>
                    </tr>
                    <tr>
                        <td><strong>Student ID</strong></td>
                        <td>${data2[i].StudentId}</td>
                    </tr>
                    <tr>
                        <td><strong>Gender</strong></td>
                        <td> ${data2[i].Gender}</td>
                    </tr>
                    <tr>
                        <td><strong>City</strong></td>
                        <td>${data2[i].City}</td>
                    </tr>
                    <tr>
                        <td><strong>State</strong></td>
                        <td>${data2[i].State}</td>
                    </tr>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td>${data2[i].EmailId}</td>
                    </tr>
                    <tr>
                        <td><strong>Qualification</strong></td>
                        <td>${data2[i].Qualification}</td>
                    </tr>
                    <tr>
                        <td><strong>Stream</strong></td>
                        <td>${data2[i].Stream}</td>
                    </tr>
                    <tr>
                        <td><strong>Date of Birth</strong></td>
                        <td>${data2[i].DateOfBirth}</td>
                    </tr>
                </table><br>`)
            }
            $("#result").show("slow");
        });