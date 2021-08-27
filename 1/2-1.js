function Animal(name) {
    var foodAmount = 50;


    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }
    // вот это гетер и он же сетер

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        foodAmount = amount;
    };

    this.name = name;

    var self = this;
    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function() {
        animalFeed();
        console.log('Кот доволен ^_^');
        return this;
    };

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());

barsik = null;