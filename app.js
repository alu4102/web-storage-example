var numvisits, welcomename, storedname;
if (typeof(Storage !== "undefined")) {
    if (localStorage.getItem("numvisits")) {
        numvisits = parseInt(localStorage.getItem("numvisits"), 10) + 1;
        localStorage.setItem("numvisits", numvisits);

        welcomename = "";
        if (localStorage.getItem("name")) {
           storedname = localStorage.getItem("name");
           welcomename = ", " + storedname;
           name.value = storedname;
        }

        visitcounter.innerHTML = "Welcome back" + 
                                  welcomename + 
                                 "! You have visited this page " + 
                                  numvisits + 
                                  " times.<br />";

    } else {
        localStorage.setItem("numvisits", 1);
        visitcounter.innerHTML = "Hello and welcome! I see you haven't visited here before..";
    }
} else {
    alert("Your Browser does not support the web storage APIs");
}

function storeName() {
    var newname = document.getElementById("name").value;

    if (localStorage.getItem("name")) {
        var storedname = localStorage.getItem("name");

        if (confirm("Your name is already stored as " + 
                    storedname + 
                    ". Are you sure you want to change it to " + 
                    newname + "?")) {
            localStorage.setItem("name", newname);
            alert("Your name was updated, reload the page to get your updated welcome!");
        } else {
            alert("OK, I'll keep calling you " + storedname);
        }

    } else {
        localStorage.setItem("name", newname);
        alert("Your name has been stored as: " + 
              newname + 
              ". Reload the page to receive your new welcome!");
    }
}


function clearLocalStorage() {
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("numvisits");
    rest.style.display = "none";
    visitcounter.innerHTML = "Forgot about your past. Reload the page";
    alert("reload the page");
}
