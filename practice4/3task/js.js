function findStringOnce(arr) {
    var counts = {};
    var uniqueElements = [];

    arr.forEach(function(element) {
        counts[element] = (counts[element] || 0) + 1;
    });

    Object.keys(counts).forEach(function(key) {
        if (counts[key] === 1) {
            uniqueElements.push(key);
        }
    });

    return uniqueElements;
}

            var initialArray = ["First", "Second", "First", "Third", "Fourth", "Fourth" ];
            var uniqueValues = findStringOnce(initialArray);

            console.log("Исходный массив:", initialArray);
            console.log("Уникальные элементы:", uniqueValues);



