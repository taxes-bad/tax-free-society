//playerData for saves.
function saveGame() {
  var playerData = {
    money: money,
    AutoPrinters: AutoPrinters,
    AutoPrinterCost: AutoPrinterCost
  }
  //stringifying the player data for JSON.
  localStorage.setItem("playerData", JSON.stringify(playerData));
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
    "Are you sure? Type 'I am a Tax Evader' (case sensitive) if you are confident that you wish to delete your save."
  )
  if (saveKillPrompt == "I am a Tax Evader") {
    money = "";
    AutoPrinters = "";
    AutoPrinterCost = 10;
    localStorage.removeItem("playerData")
  }
  document.getElementById('TotalMoney').innerHTML = money;
  document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
  document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
}