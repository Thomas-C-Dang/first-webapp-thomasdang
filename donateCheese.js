let nameInput = document.getElementById("donateCheeseNameInput").value;
let cheeseInput = document.getElementById("donateCheeseInput").value;

document.getElementById("donateCheeseNameBtn").addEventListener("click",() => {
    let input = document.getElementById("donateCheeseNameInput").value;
    document.getElementById("donateCheeseNameConfirm").hidden = false;   
    if (input == ""){ 
        document.getElementById("donateCheeseNameConfirm").innerHTML = "Please type in your name!"; 
    }
    else{
        document.getElementById("donateCheeseNameConfirm").innerHTML = ""; 
        document.getElementById("donateCheeseEntry").hidden = false; 
        document.getElementById("donateCheeseName").hidden = true; 
        nameInput = input;
    }
});

document.getElementById("donateCheeseBtn").addEventListener("click", () => {
    if (document.getElementById("donateCheeseInput").value == ""){
        document.getElementById("donateCheeseConfirm").innerHTML = "Please enter the cheese name!";
    }
    else{
        document.getElementById("donateCheeseEntry").hidden = true;
        document.getElementById("donateCheeseFinal").hidden = false;        
        document.getElementById("donateCheeseConfirm").innerHTML = "Thanks, " + nameInput + "! Please donate the cheese to the current club leader on Tuesday at F106 during lunch! (at the next meeting)";
    }
});

document.getElementById("returnFirstPage").addEventListener("click", () => {
    document.getElementById("donateCheeseFinal").hidden = true;
    document.getElementById("donateCheeseName").hidden = false;
    document.getElementById("donateCheeseNameInput").value = "";
    document.getElementById("donateCheeseInput").value = "";    
});
