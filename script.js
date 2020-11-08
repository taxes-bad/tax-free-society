//playerData for saves.
var playerData = [(money = 10), (AutoPrinters = 0)];

//Displaying stuff.
document.getElementById('TotalMoney').innerHTML = money;

//Incrementing the money and illegal money.
function getrich() {
  money++;
  document.getElementById('TotalMoney').innerHTML = money;
}

//Toggles between Dark and Light mode. (ew light mode).
function ThemeToggle() {
  var element = document.body;
  element.classList.toggle('theme-toggle');
}

//reduces money by cost of printer and increments printer.
var AutoPrinterCost = 10;
var NewAutoPrinterCost;
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
function BuyAutoPrinter() {
  if (money >= AutoPrinterCost) {
    money = money - AutoPrinterCost;
  } else {
    document.getElementbyId('CantAffordPrinter').innerHTML =
      "You can't afford an Auto Printer!";
  }
  document.getElementById('TotalMoney').innerHTML = money;
  AutoPrinters = AutoPrinters + 1;
  z = AutoPrinters.toString();
  document.getElementById('TotalAutoPrinters').innerText = z;
}
