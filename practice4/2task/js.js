function findUnique(arr) {
    return arr.reduce(function(uniqueArr, currentElement) {
        if (!uniqueArr.includes(currentElement)) {
            uniqueArr.push(currentElement);
        }
        return uniqueArr;
    }, []);
}
let initialArray = [1, 2, 3, 1, 5, 3, 4, 1];
let uniqueValues = findUnique(initialArray);

console.log("Початковий масив:", initialArray);
console.log("Унікальний елементи:", uniqueValues);

