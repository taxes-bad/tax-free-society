//setting up the variables for ease of reference
var money = ""
var AutoPrinters = ""
var AutoPrinterCost = 10 

function BuyAutoPrinter() {
  if (money >= AutoPrinterCost) {
    money = money - AutoPrinterCost;
    AutoPrinters++;
    AutoPrinterCost = Math.round(AutoPrinterCost * 1.2);
    document.getElementById('TotalMoney').innerHTML = money;
    document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
    document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
  }
}

//making the auto printers automatically print money.
var autoPrinting = setInterval(function() {money = money + AutoPrinters, document.getElementById('TotalMoney').innerHTML = money} , 1000)
//1000ms = 1 second

//get the modal
var modal = document.getElementById("myModal");

//get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//finding offline progress 

//open the modal 
function openModal() {
  modal.style.display = "block";
  clearInterval(autoPrinting)
}

//when the player clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  setInterval(function() {money = money + AutoPrinters, document.getElementById('TotalMoney').innerHTML = money} , 1000)
}

openModal();

document.getElementById('TotalMoney').innerHTML = money;
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;