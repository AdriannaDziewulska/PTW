document.addEventListener("DOMContentLoaded", function () {
    let lp = 1;

    document.getElementById("addContact").addEventListener("click", function () {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        let age = document.getElementById("age").value;
        let birthDate = document.getElementById("birthDate").value;
        let gender = document.getElementById("gender").value;
        let group = document.getElementById("group").value;

        if (firstName && lastName && email && age && birthDate) {
            let row = document.createElement("tr");
            row.className = group;
            row.innerHTML = `<td>${lp++}</td><td>${firstName}</td><td>${lastName}</td>
                             <td>${email}</td><td>${age}</td><td>${birthDate}</td>
                             <td>${gender}</td><td>${group}</td>`;
            document.getElementById("contactsTable").appendChild(row);
            
            let pet = document.getElementById("pet");
            pet.classList.add("run-animation");
            setTimeout(() => pet.classList.remove("run-animation"), 2000);
        }
    });
});
