//let inBetween = function(a, b) {
	//    return function(c) {
	//        if ((c >= a && c <= b) || (c >= b && c <= a)) {
	//            return true;
	//        } else {
	//            return false;
	//        }
	//    };
	//};

	//let inArray = function(array) {
	//    return function(c) {
	//        if (array.includes(c)) {
	//            return true;
	//        } else {
	//            return false;
	//        }
	//    };
	//};

	//let arr = [1, 2, 3, 4, 5, 6, 7];

	//alert(arr.filter(inBetween(3, 6)));
	//alert(arr.filter(inArray([1, 2, 10])));

	//let byField = function(fieldName) {
	//    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
	//};

	//let users = [
	//    { name: "John", age: 20, surname: "Johnson" },
	//    { name: "Pete", age: 18, surname: "Peterson" },
	//    { name: "Ann", age: 19, surname: "Hathaway" }
	//];

	//users.sort(byField('name'));
	//alert(users[0].name);
	//users.sort(byField('age'));
	//alert(users[0].age);
	function makeArmy() {
	    let shooters = [];

	    let i = 0;
	    while (i < 10) {
	        let shooter = function() { // функция shooter
	            alert(i); // должна выводить порядковый номер
	        };
	        shooters.push(shooter);
	        i++;
	    }

	    return shooters;
	}

	let army = makeArmy();

	alert(army[0]()); // у 0-го стрелка будет номер 10
alert(army[5]()); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
