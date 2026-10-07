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