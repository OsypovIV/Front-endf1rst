function findDuplicates(arr) {
    var duplicates = [];
    var seen = {}; // объект для отслеживания уже увиденных элементов

    for (var i = 0; i < arr.length; i++) {
        var currentElement = arr[i];
        
        // Если элемент уже встречался, добавляем его в массив дубликатов
        if (seen[currentElement]) {
            if (duplicates.indexOf(currentElement) === -1) {
                duplicates.push(currentElement);
            }
        } else {
            seen[currentElement] = true;
        }
    }

    return duplicates;
}

