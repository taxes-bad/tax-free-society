//playerData for saves.
var money = "";
var AutoPrinters = "";
var AutoPrinterCost = 10;

function loadAllValues() {
  document.getElementById('TotalMoney').innerHTML = money;
  document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
  document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
}

function saveGame() {
  var playerData = {
    money: money,
    AutoPrinters: AutoPrinters,
    AutoPrinterCost: AutoPrinterCost
  }
  //stringifying the player data for JSON.
  localStorage.setItem("playerData", JSON.stringify(playerData));
}

var autoSave = window.setInterval(function() {
  var playerData = {
    money: money,
    AutoPrinters: AutoPrinters,
    AutoPrinterCost: AutoPrinterCost
  }
  //stringifying the player data for JSON.
  localStorage.setItem("playerData", JSON.stringify(playerData));
}, 2000);

//setting up a loading function.
function loadGame() {
  var gamesave = JSON.parse(localStorage.getItem("playerData"));
  money = gamesave.money;
  AutoPrinters = gamesave.AutoPrinters;
  AutoPrinterCost = gamesave.AutoPrinterCost;
  loadAllValues();
}

window.onload = loadGame();

//function used to delete the player's save.
function saveKill() {
  let saveKillPrompt = prompt(
    "Are you sure? Type 'I am a Tax Evader' (case sensitive) if you are confident that you wish to delete your save."
  )
  if (saveKillPrompt == "I am a Tax Evader") {
    money = "";
    AutoPrinters = "";
    AutoPrinterCost = 10;
    localStorage.removeItem("playerData")
  }
  loadAllValues();
}