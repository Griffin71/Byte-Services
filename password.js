document.addEventListener('DOMContentLoaded', function() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("priceTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

    document.getElementById("searchInput").addEventListener("input", function() {
        searchTable();
    });

    function searchTable() {
        var input, filter, table, tr, td, i, txtValue, found;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("priceTable");
        tr = table.getElementsByTagName("tr");
        found = false;
        for (i = 1; i < tr.length; i++) {
            tr[i].style.display = "none";
            td = tr[i].getElementsByTagName("td");
            for (var j = 0; j < td.length; j++) {
                if (td[j]) {
                    txtValue = td[j].textContent || td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        found = true;
                        break;
                    }
                }
            }
        }
        document.getElementById("noResultsMessage").style.display = found ? "none" : "block";
    }

    document.getElementById("searchInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchTable();
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.getElementById("searchButton").addEventListener("click", function() {
    var input = document.getElementById("searchInput").value;
    if (input.trim() === "") {
        alert("Please enter the name of the laptop before searching.");
    } else {
        searchTable();
    }
});