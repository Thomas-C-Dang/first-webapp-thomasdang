// Add JavaScript code for your web site here and call it from index.html.

document.getElementById("myBtn").addEventListener("click",() => {
    let input = document.getElementById("myInput").value;
    document.getElementById("myPara").hidden = false;   
    if (input != ""){ 
        document.getElementById("myPara").innerHTML = "Hello, " + input + "!";
        document.getElementById("cheeseSurvey").hidden = false;
        document.getElementById("answer").innerHTML = "";
        document.getElementById("nameEntry").hidden = true;
    }
    else{
        document.getElementById("myPara").innerHTML = "Please type in your name!"; 
    }
});


document.getElementById("Yes").addEventListener("click",() => {
    document.getElementById("cheeseSurvey").hidden = true;
    document.getElementById("myPara").hidden = true;
    document.getElementById("answer").innerHTML = "NICE! Join our club at F106 on Tuesdays at lunch!";
});

document.getElementById("No").addEventListener("click",() => {
    document.getElementById("cheeseSurvey").hidden = true;
    document.getElementById("myPara").hidden = true;
    document.getElementById("answer").innerHTML = "GET OUT !!";
});
