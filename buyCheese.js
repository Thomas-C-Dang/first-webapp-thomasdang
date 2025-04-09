let total = 0;

document.getElementById("myBtn").addEventListener("click",() => {
    let input = document.getElementById("myInput").value;
    document.getElementById("myPara").hidden = false;   
    if (input != ""){ 
        document.getElementById("cheeseSelect").hidden = false;
        document.getElementById("nameEntry").hidden = true; 
        document.getElementById("myPara").innerHTML = "";        
    }
    else{
        document.getElementById("myPara").innerHTML = "Please type in your name!"; 
    }
});

document.getElementById("submitOrder").addEventListener("click",() =>{
    if (document.getElementById("cheeseStorage").value == "none"){
        document.getElementById("myPara").innerHTML = "Please select a cheese!";
    }
    else{
        document.getElementById("checkout").hidden = false;   
        document.getElementById("cheeseSelect").hidden = true;  
        document.getElementById("myPara").innerHTML = "";
        total += parseFloat(document.getElementById("cheeseStorage").value);
        document.getElementById("fee").innerHTML = "Total: $" + total;    
    }
});

document.getElementById("buyMore").addEventListener("click",() =>{
    document.getElementById("cheeseSelect").hidden = false;
    document.getElementById("checkout").hidden = true; 
    document.getElementById("myPara").innerHTML = "";     
});

document.getElementById("goBackCard").addEventListener("click",() =>{
    document.getElementById("confirmCardPayment").hidden = true; 
    document.getElementById("nameEntry").hidden = false;
    document.getElementById("myPara").innerHTML = "";
    document.getElementById("myInput").value = "";
    document.getElementById("cheeseStorage").value = "none";
    document.getElementById("creditCardNum").value = "";  
    document.getElementById("fee").innerHTML = "Total: $0.00";  
    total = 0;
});

document.getElementById("goBackCash").addEventListener("click",() =>{
    document.getElementById("confirmCashPayment").hidden = true; 
    document.getElementById("nameEntry").hidden = false;
    document.getElementById("myPara").innerHTML = "";  
    document.getElementById("myInput").value = "";
    document.getElementById("cheeseStorage").value = "none";
    document.getElementById("creditCardNum").value = "";   
    document.getElementById("fee").innerHTML = "Total: $0.00";
    total = 0;
});

document.getElementById("submitOnlinePayment").addEventListener("click", () =>{
    if (isNaN(document.getElementById("creditCardNum").value) || document.getElementById("creditCardNum").value.length != 16){
        document.getElementById("myPara").innerHTML = "Please provide a valid credit card number.";      
    }
    else{
        document.getElementById("myPara").innerHTML = "";      
        document.getElementById("checkout").hidden = true; 
        document.getElementById("confirmCardPayment").hidden = false;         
    }
});

document.getElementById("payCash").addEventListener("click", () => {
    document.getElementById("myPara").innerHTML = "";      
    document.getElementById("checkout").hidden = true; 
    document.getElementById("confirmCashPayment").hidden = false;    
});
