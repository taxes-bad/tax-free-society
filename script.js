//playerData for saves.
var playerData = [(money = ""), (AutoPrinters = "")];

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









