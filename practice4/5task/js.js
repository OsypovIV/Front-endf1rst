function toCamelCase(str) {
    return str.replace(/-([a-z])/g, function(match, letter) {
        return letter.toUpperCase();
    });
}

console.log(toCamelCase("background-color")); // Вивід "backgroundColor"
console.log(toCamelCase("list-style-image")); // Вивід "listStyleImage"
