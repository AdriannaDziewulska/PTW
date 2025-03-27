document.addEventListener("DOMContentLoaded", function () {
    console.log("JS załadowany");

    let lp = 1;

    document.getElementById("addFilm")?.addEventListener("click", function() {
        let title = document.getElementById("title").value;
        let director = document.getElementById("director").value;
        let year = document.getElementById("year").value;
        console.log("Dodawanie filmu:", title, director, year);
        if (title && director && year) {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${lp++}</td><td>${title}</td><td>${director}</td><td>${year}</td>`;
            document.getElementById("filmTable").appendChild(row);
        }
    });


    let addTechBtn = document.getElementById("addTech");
    if (addTechBtn) {
        addTechBtn.addEventListener("click", function() {
            let tech = document.getElementById("techInput").value;
            console.log("Dodawanie technologii:", tech);
            if (tech) {
                let li = document.createElement("li");
                li.textContent = tech;
                document.getElementById("techList").appendChild(li);
            }
        });
    } else {
        console.error("Nie znaleziono przycisku 'Dodaj'.");
    }

    let removeLastTechBtn = document.getElementById("removeLastTech");
    if (removeLastTechBtn) {
        removeLastTechBtn.addEventListener("click", function() {
            let list = document.getElementById("techList");
            if (list.children.length > 0) {
                list.removeChild(list.lastChild);
            }
        });
    } else {
        console.error("Nie znaleziono przycisku 'Usuń ostatnią'.");
    }

    let removeAllTechBtn = document.getElementById("removeAllTech");
    if (removeAllTechBtn) {
        removeAllTechBtn.addEventListener("click", function() {
            document.getElementById("techList").innerHTML = "";
        });
    } else {
        console.error("Nie znaleziono przycisku 'Usuń wszystkie'.");
    }

    let convertBtn = document.getElementById("convert");
    if (convertBtn) {
        convertBtn.addEventListener("click", function() {
            let amount = parseFloat(document.getElementById("amount").value);
            let currency = document.getElementById("currency").value;
            let rate = currency === "eur" ? 4.5 : 4.2;
            console.log("Kwota:", amount, "Waluta:", currency, "Przeliczone:", amount * rate);
            document.getElementById("result").textContent = amount ? `${amount * rate} ${currency.toUpperCase()}` : "Podaj poprawną kwotę";
        });
    } else {
        console.error("Nie znaleziono przycisku 'Przelicz'.");
    }
});
