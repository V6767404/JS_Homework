function Person(name, age) {

    this.name = name;
    this.age = age;
    this._personAge = 50;
}

Person.prototype._getFormattedAge = function() {
    return this._personAge + ' лет';
}

Person.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._getFormattedAge();

       this._personAge = amount;
}

Person.prototype.showInfo = function() {
 //   console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    this.dailyNorm(this.age);
    console.log('Привет, меня зовут ' + this.name + " мне " + this._getFormattedAge());

}
    var vasya = new Person('Вася', 30);
    vasya.showInfo();

    // console.log(vasya.age);
    // console.log(vasya.dailyNorm());
    // vasya.dailyNorm(20);
    // console.log(vasya.dailyNorm());
    // vasya.getFormattedAge();



