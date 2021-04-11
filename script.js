//player data
var playerData = {
  money: money,
  AutoPrinters: AutoPrinters,
  AutoPrinterCost: AutoPrinterCost,
}

//incrementing the money and illegal money.
function getrich() {
  money++;
  document.getElementById('TotalMoney').innerHTML = money;
}

document.getElementById('TotalMoney').innerHTML = money;
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
