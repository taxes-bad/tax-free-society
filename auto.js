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

document.getElementById('TotalMoney').innerHTML = money;
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;
