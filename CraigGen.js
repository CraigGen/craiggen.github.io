function newCraig() {
	var nums = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 99, 123, 100, 101, 69, 420];
	var suffixes = ["alicious", "TheBootyHunter", "TheBootySlayer", "TheMan", "00110011", "TheHarryPotterFangirl", "-CHAN", " SENPAI", "xxx"];
	var randNumIndex = Math.floor(Math.random() * 16);
	var randSufIndex = Math.floor(Math.random() * 9);
	if (randSufIndex == 5) {
		return "xxxCraigxxx";
	} else {
		var randType = Math.random();
		if (randType > 0.5) {
			var base = "Craig";
			var gen = base.concat(suffixes[randSufIndex]);
			var nextType = Math.random();
			if (randType > 0.5) {
				gen.concat(nums[randNumIndex].toString());
			}
			return gen;
		} else {
			var base = "Craig";
			var gen = base.concat(nums[randNumIndex].toString());
			return gen;
		}
	}
}
