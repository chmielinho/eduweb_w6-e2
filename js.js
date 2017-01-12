(function () {
	class LocalDataBase {
		constructor(name) {
			this.name = name;
		}
		get(key) {
			return JSON.parse(localStorage.getItem(this.name + '.' + key));
		}
		save(key, value) {
			localStorage.setItem(this.name + '.' + key, JSON.stringify(value));
		}
	}
	var DB1 = new LocalDataBase("DB1");
	var janek = {
		firstName: "Jan",
		lastName: "Kowalski",
		age: 32
	};
	DB1.save("janek", janek);
	console.log(DB1.get("janek"));
})();