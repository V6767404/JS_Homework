function Person(name, age) {
    var personAge = 50;
    this.name = name;
    this.age = age;

    function getFormattedAge() {
        return personAge + ' лет';
    }


    Person.prototype._getFormattedAge = function() {
        return this._personAge + ' гр.';
    };
    // dailyNorm - ф-ция сетер (есть аргумент) и гетер (если нет аргумента)

    this.dailyNorm = function (amount) {
        if (!arguments.length) return getFormattedAge();

        personAge = amount;
    };

    this.showInfo = function() {
      //  console.log(self.dailyNorm()); // геттер (нет аргумента)
   this.dailyNorm(age); // сеттер (есть аргумент)
   console.log('Привет, меня зовут ' + this.name + " мне " + getFormattedAge());
    };
}
    var vasya = new Person('Вася', 46);
    vasya.showInfo();

    // console.log(vasya.age);
    // console.log(vasya.dailyNorm());
    // vasya.dailyNorm(20);
    // console.log(vasya.dailyNorm());
    // vasya.getFormattedAge();



