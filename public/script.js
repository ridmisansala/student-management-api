async function sortTable(sortByvalue) {
    const order=sortByvalue ? 'asc' : 'desc';
    const response =await fetch(`http://localhost:3000/sortBy/${order}`);
    const studentArray = await response.json();
    const tableBody = document.getElementById("studentTable");
    tableBody.innerHTML = "";
    studentArray.forEach(student => {
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
async function searchStudents() {
    const searchTerm = document.getElementById("searchInput").value;
      
        alert("Searching students with term: " + searchTerm);
    
    const response = await fetch(`http://localhost:3000/searchStudents/${searchTerm}`);
    console.log("Response from server: ", response.status);
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
                    <button class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded" onclick="removeStudent(${studentArray.studentId})">
                        Remove "
                    </button>
                </td>`;
    });

}

