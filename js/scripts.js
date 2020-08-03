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
    if (this.nonVegTopping === pizzaNonVegTopping[0]) {
        this.price += 500;
    } else if (this.nonVegTopping === pizzaNonVegTopping[1]) {
        this.price += 400;
    } else if (this.nonVegTopping === pizzaNonVegTopping[2]) {
        this.price += 600;
    }


    if (this.vegTopping === pizzaVegTopping[0]) {
        this.price += 400;
    } else if (this.vegTopping === pizzaVegTopping[1]) {
        this.price += 500;
    } else if (this.vegTopping === pizzaVegTopping[2]) {
        this.price += 600;
    }

    return this.price;
}


order.prototype.totalCost = function() {
    var orderTotal = 0;
    for (var order = 0; order < totalCosts.length; order++) {
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}

  $(document).ready(function() {
    $("input#order1").click(function(event) {
        event.preventDefault();
        var sizes = $("select#piz").val();
        var crusts = $("select#crus").val();
        var noVegToppings = $("select#topnoveg").val();
        var vegToppings = $("select#topveg").val();

        var newPizzaOrder = new order(sizes, crusts, noVegToppings, vegToppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);


        $("#sz").text(sizes);
        $("#cr").text(crusts);
        $("#nvgs").text(noVegToppings);
        $("#vgs").text(vegToppings);
        $("#tc").text(newPizzaOrder.totalCost());


    });
