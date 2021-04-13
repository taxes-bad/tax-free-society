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

//get the modal
var modal = document.getElementById("modal");

//get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//finding offline progress 
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
  playerData.money += playerData.AutoPrinters * (diff / 1000) // divide diff by how often (ms) mainGameLoop is ran
  document.getElementById("modalText").innerHTML = playerData.money + " Money"
}, 1000)

//open the modal 
function openModal() {
  modal.style.display = "block";
  clearInterval(autoPrinting)
}

//when the player clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  setInterval(function() {money = money + AutoPrinters, document.getElementById('TotalMoney').innerHTML = money} , 1000)
}

openModal();

document.getElementById('TotalMoney').innerHTML = money;
document.getElementById('AutoPrinterCost').innerHTML = AutoPrinterCost;
document.getElementById('TotalAutoPrinters').innerHTML = AutoPrinters;