//player data
var money = "";
var AutoPrinters = "";
var AutoPrinterCost = 10;

//incrementing the money and illegal money.
function getrich() {
  money++;
  document.getElementById('TotalMoney').innerHTML = money;
}

function tab(tab) {
  //hide all your tabs, then show the one the user selected.
  document.getElementById("optionsMenu").style.display = "none";
  document.getElementById("shopMenu").style.display = "none";
  document.getElementById(tab).style.display = "inline-block";
}
//go to a tab for the first time, so not all show
tab("shopMenu");

document.getElementById('TotalMoney').innerHTML = money;
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;