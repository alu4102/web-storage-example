//Test for browser compatibility 
if (typeof(Storage !== "undefined")) {

    //check to see if the numvisits localstorage item is already set.
    if (localStorage.getItem("numvisits")) {
        //if it is, retrieve its value, increment it by 1 and update the value stored in the localstorage to reflect this.
        var numvisits = parseInt(localStorage.getItem("numvisits"), 10) + 1;
        localStorage.setItem("numvisits", numvisits);

        //get the stored name, if one exists to be used in the welcome message
        var welcomename = "";
        if (localStorage.getItem("name")) {
            var storedname = localStorage.getItem("name");

            var welcomename = ", " + storedname;

            document.getElementById("name").value = storedname;

        }

        //Update the visit counter item on the page with the number of visits the user has paid to the site
        document.getElementById("visitcounter").innerHTML = "Welcome back" + welcomename + "! You have visited this page " + numvisits + " times.<br />";

    } else {
        //if numvisits was not already set, create it and set its value to 1
        localStorage.setItem("numvisits", 1);

        //Display an appropriate welcome message to the user for their first visit
        document.getElementById("visitcounter").innerHTML = "Hello and welcome! I see you haven't visited here before..";
    }

    //get the updated numvisits localStorage item's value
    var numvisits = localStorage.getItem("numvisits");

} else {
    alert("Your Browser does not support the web storage APIs");
}

//store the user's name (as entered in the input field in the localStorage data store)


function storeName() {
    //Get the name entered by the user
    var newname = document.getElementById("name").value;

    //Check if name already exists
    if (localStorage.getItem("name")) {
        //if the name is already stored, ask the user to confirm they wish to update it
        var storedname = localStorage.getItem("name");

        if (confirm("Your name is already stored as " + storedname + ". Are you sure you want to change it to " + newname + "?")) {
            localStorage.setItem("name", newname);
            alert("Your name was updated, reload the page to get your updated welcome!");
        } else {
            alert("OK, I'll keep calling you " + storedname);
        }

    } else {
        localStorage.setItem("name", newname);
        alert("Your name has been stored as: " + newname + ". Reload the page to receive your new welcome!");
    }
}
