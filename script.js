//setting up the variables for ease of reference
var money = ""
var AutoPrinters = ""
//playerData for saves.
function saveGame() {
  var playerData = {
    money: money,
    AutoPrinters: AutoPrinters
  }
  //stringifying the player data for JSON.
  localStorage.setItem("playerData",JSON.stringify(playerData));
}

//setting up a loading function.
function loadGame() {
  var gamesave = JSON.parse(localStorage.getItem("playerData"));
  //future-proofing old saves
  if (typeof gamesave.money !== "undefined") {
    money = gamesave.money;
  }
  if (typeof gamesave.AutoPrinters !== "undefined") {
    AutoPrinters = gamesave.AutoPrinters;
  }
  document.getElementById('TotalMoney').innerHTML = money;
  document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
}
//function used to delete the player's save.
function saveKill() {
  localStorage.removeItem("playerData");
}

//displaying stuff.
document.getElementById('TotalMoney').innerHTML = money;
document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;

//incrementing the money and illegal money.
function getrich() {
  money++;
  document.getElementById('TotalMoney').innerHTML = money;
}

//toggles between Dark and Light mode. (ew light mode).
function ThemeToggle() {
  var element = document.body;
  element.classList.toggle('theme-toggle');
}

//reduces money by cost of printer and increments printer.
var AutoPrinterCost = 10;
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
function BuyAutoPrinter() {
  if (money >= AutoPrinterCost) {
    money = money - AutoPrinterCost;
    AutoPrinters++;
    AutoPrinterCost = Math.round(AutoPrinterCost * 1.5);
    document.getElementById('TotalMoney').innerHTML = money;
    document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
    document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
  }
}

//making the auto printers automatically print money.
setInterval(function() {
  money = money + AutoPrinters, document.getElementById('TotalMoney').innerHTML = money
} , 1000)
//1000ms = 1 second

document.getElementById('TotalMoney').innerHTML = money;
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
loadGame();









