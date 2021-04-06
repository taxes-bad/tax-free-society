//setting up the variables for ease of reference
var money = ""
var AutoPrinters = ""
var AutoPrinterCost = 10
//playerData for saves.
function saveGame() {
  var playerData = {
    money: money,
    AutoPrinters: AutoPrinters,
    AutoPrinterCost: AutoPrinterCost
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
  if (typeof gamesave.AutoPrinterCost !== "undefined") {
    AutoPrinterCost = gamesave.AutoPrinterCost;
  }
  document.getElementById('TotalMoney').innerHTML = money;
  document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
  document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
}

//function used to delete the player's save.
function saveKill() {
  let saveKillPrompt = prompt(
    "Are you sure? Type 'I am a Tax Evader.' (case sensitive) if you are confident that you wish to delete your save."
  )
  if (saveKillPrompt == "I am a Tax Evader.") {
    money = "";
    AutoPrinters = "";
    AutoPrinterCost = 10;
    localStorage.removeItem("playerData")
  }
  document.getElementById('TotalMoney').innerHTML = money;
  document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
  document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
}

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
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
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
setInterval(function() {
  money = money + AutoPrinters, document.getElementById('TotalMoney').innerHTML = money
} , 1000)
//1000ms = 1 second

document.getElementById('TotalMoney').innerHTML = money;
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
loadGame();









