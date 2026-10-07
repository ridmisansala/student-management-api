async function saveStudent() {
    alert("Student is in the process");

    if (!document.getElementById("studentId").value || !document.getElementById("firstName").value || !document.getElementById("lastName").value || !document.getElementById("email").value || !document.getElementById("course").value || !document.getElementById("batch").value || !document.getElementById("age").value) {
        alert("Please fill in all fields.");
        return;
    }
    const formData = new FormData();
    formData.append("studentId", document.getElementById("studentId").value);
    formData.append("firstName", document.getElementById("firstName").value);
    formData.append("lastName", document.getElementById("lastName").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("course", document.getElementById("course").value);
    formData.append("batch", document.getElementById("batch").value);
    formData.append("age", document.getElementById("age").value);

    const response = await fetch("http://localhost:3000/saveStudent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    const result = await response.json();
    alert(result.message);
    closeModal();
}
async function loadStudents() {
    const response = await fetch("http://localhost:3000/students");
    const students = await response.json();
    const tableBody = document.getElementById("studentTable");
    tableBody.innerHTML = "";
    students.forEach(student => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = student.studentId;
        row.insertCell(1).textContent = student.firstName;
        row.insertCell(2).textContent = student.lastName;
        row.insertCell(3).textContent = student.email;
        row.insertCell(4).textContent = student.course;
        row.insertCell(5).textContent = student.batch;
        row.insertCell(6).textContent = student.age;
        row.insertCell(7).innerHTML = `
         <td>
                    <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded" onclick="openUpdateModal(${student.studentId})">
                        Update 
                    </button>
                </td>

                <td>
                    <button class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded" onclick="removeStudent(${student.studentId})">
                        Remove  
                    </button>
                </td>`;
    });
}