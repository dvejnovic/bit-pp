"use strict";

(function () {

    function Product(name, price, expDate) {
        this.productId = Math.floor(Math.random() * 90000) + 10000;
        this.name = name;
        this.price = parseFloat(price).toFixed(2);
        this.expirationDate = expDate
        this.getInfo = function () {
            var firstLetter = this.name[0].toUpperCase()
            var lastLetter = this.name[this.name.length - 1].toUpperCase()
            var productCode = firstLetter + lastLetter + this.productId
            return productCode + ', ' + this.name + ', ' + this.price

        }
    }

    function ShoppingBag() {

        this.productList = []
        var now = new Date()

        this.addProduct = function (p) {
            if (p.expirationDate > now) {
                return productList.push(p);
            }
        }

        this.avgPrice = function () {
            var sum = 0
            var numOfProducts = this.productList.length
            for (var i = 0; i < numOfProducts; i++) {
                var product = this.productList[i];
                sum += product;
            }
            this.result = sum / numOfProducts;
            return this.result;
            console.log(this.result);
        }

        this.getMostExpensive = function () {
            return Math.max(...this.productList);
        }
    }

    var banana = new Product('banana', '130.56789', "12 / 12 / 2018");
    var apple = new Product('apple', '100.68', '02/02/2018');


    console.log(banana.getInfo())

    var programmerBag = new ShoppingBag(banana, apple);
    console.log(programmerBag);


})();
