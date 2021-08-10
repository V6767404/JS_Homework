/* Практическое задание 1:
Создать класс Cat. Добавить ему свойство - name, которое будем получать при создании объекта класса, и пока пустой
метод feed. Создать объект класса Cat, вывести в консоль его имя и затем удалить объект.
*/
function Cat(name) {
    this.name = name;

    this.feed = function() {

    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

barsik = null;


/*Практическое задание 2:
Добавить в класс Cat приватное свойство foodAmount, равное 50, и приватный метод formatFoodAmount, который
будет возвращать это свойство + слово 'гр.'. В методе feed необходимо выводить в консоль информацию вида:
"Насыпаем в миску (количество гр.) корма."
"Количество гр." получаем с помощью метода formatFoodAmount.
Вывести в консоль результат выполнения метода feed.
*/
function Cat(name) {
    this.name = name;
    this.foodAmount = 50;

    var self = this;
    function formatFoodAmount() {
        return self.foodAmount + 'гp.';
      }
    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    }
}
var barsik = new Cat('Барсик');

barsik.feed();
