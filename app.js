var numvisits, welcomename, storedname;
var storage = $.localStorage;
if (storage) {
    if (storage.get("numvisits")) {
        numvisits = parseInt(storage.get("numvisits"), 10) + 1;
        storage.set("numvisits", numvisits);

        welcomename = "";
        if (storage.get("name")) {
           storedname = storage.get("name");
           welcomename = ", " + storedname;
           //name.value = storedname;
        }

        $('#visitcounter').html("Welcome back" + 
                                  welcomename + 
                                 "! You have visited this page " + 
                                  numvisits + 
                                  " times.<br />");

    } else {
        storage.set("numvisits", 1);
        $('#visitcounter').html(
            "Hello and welcome! I see you haven't visited here before..");
    }
} else {
    alert("Your Browser does not support the web storage APIs");
}

function storeName() {
    var newname = document.getElementById("name").value;
    var storage = $.localStorage;

    if (storage.get("name")) {
        var storedname = storage.get("name");

        if (confirm("Your name is already stored as " + 
                    storedname + 
                    ". Are you sure you want to change it to " + 
                    newname + "?")) {
            storage.set("name", newname);
            alert("Your name was updated, reload the page to get your updated welcome!");
        } else {
            alert("OK, I'll keep calling you " + storedname);
        }

    } else {
        storage.set("name", newname);
        alert("Your name has been stored as: " + 
              newname + 
              ". Reload the page to receive your new welcome!");
    }
}


function clearLocalStorage() {
    var storage = $.localStorage;
    storage.remove("name");
    storage.remove("numvisits");
    rest.style.display = "none";
    $('#visitcounter').html("Forgot about your past. Reload the page");
    alert("reload the page");
}
