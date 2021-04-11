//player data
var playerData = {
  money: money,
  AutoPrinters: AutoPrinters,
  AutoPrinterCost: AutoPrinterCost,
  lastTick: Date.now()
}

//offline progress, thanks YHVR (u/YhvrTheSecond)
var offlineLoop = window.setInterval(function() {
  diff = Date.now() - playerData.lastTick;
  playerData.lastTick = Date.now();
  playerData.money += playerData.goldPerClick * (diff / 1000) // divide diff by how often (ms) mainGameLoop is ran
  document.getElementById("goldMined").innerHTML = playerData.money + " Gold Mined"
}, 1000)

//incrementing the money and illegal money.
function getrich() {
  money++;
  document.getElementById('TotalMoney').innerHTML = money;
}

document.getElementById('TotalMoney').innerHTML = money;
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;