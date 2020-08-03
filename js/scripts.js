//user interface
var totalCosts = [];

function order(size, crust, vegTopping, nonVegTopping) {
    this.size = size;
    this.crust = crust;
    this.nonVegTopping = nonVegTopping;
    this.vegTopping = vegTopping;
    this.price = 0;

}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaNonVegTopping = ["Chicken", "Sausage", "Bacon", ];
var pizzaVegTopping = ["Mushrooms", "Onions", "Capsicum", ];

order.prototype.cost = function() {
    if (this.size === pizzaSize[0]) {
        this.price += 500;
    } else if (this.size === pizzaSize[1]) {
        this.price += 700;
    } else if (this.size === pizzaSize[2]) {
        this.price += 900;
    }
    if (this.crust === pizzaCrust[0]) {
        this.price += 200;
    } else if (this.crust === pizzaCrust[1]) {
        this.price += 200;
    } else if (this.crust === pizzaCrust[2]) {
        this.price += 100;
    }