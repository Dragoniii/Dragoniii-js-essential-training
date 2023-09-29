const computer = {
    brand: "Apple",
    color: "Grey",
    owner: "SAP",
    model: "Unknown",
    assetIdTag: 209513,
    memorys: {RAM: "32GB", SSD: "256GB"},
    computerIsOn: false,
    computerStatus: function(computerIsOn){
        this.computerIsOn = computerIsOn;
    }
}

console.log(computer);
console.log(computer.assetIdTag);
console.log(computer.memorys);
console.log(computer.memorys.RAM);
computer.computerStatus(true);
console.log(computer.computerIsOn);