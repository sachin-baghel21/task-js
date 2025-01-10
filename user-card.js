const btn = document.getElementById("from-btn");
let id = 1; // Auto-incrementing ID counter

btn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

            const username = document.getElementById("user").value.trim();
            const email = document.getElementById("uemail").value.trim();
            const password = document.getElementById("upassword").value.trim();
            const city = document.getElementById("ucity").value.trim();
            const tdata = document.getElementById("tbody");

  // Check if all fields are filled
  if (username && email && password && city) {
    // Create a new row
    const newRow = document.createElement("tr");

    // Create and append table cells
    const idCell = document.createElement("td");
    idCell.textContent = id++;
    newRow.appendChild(idCell);

    const usernameCell = document.createElement("td");
    usernameCell.textContent = username;
    newRow.appendChild(usernameCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = email;
    newRow.appendChild(emailCell);

    const passwordCell = document.createElement("td");
    passwordCell.textContent = password;
    newRow.appendChild(passwordCell);

    const cityCell = document.createElement("td");
    cityCell.textContent = city;
    newRow.appendChild(cityCell);

    const actionCell = document.createElement("td");
    const selectButton = document.createElement("button");
    selectButton.textContent = "Select";
    selectButton.addEventListener("click", () => {
        updateCardDetails(idCell.textContent, username, email, city);
    });
    actionCell.appendChild(selectButton);
    newRow.appendChild(actionCell);

    tdata.appendChild(newRow);
    document.querySelector("form").reset();
  } 
  else {
    alert("Please fill in all fields!");
  }
});
function updateCardDetails(id, username, email,city) {
    document.getElementById("card-id").textContent = id;
    document.getElementById("card-name").textContent = username;
    document.getElementById("card-email").textContent = email;
    document.getElementById("card-city").textContent = city;
}
