var mulTable = [];

function createMultiplicationMatrix(mulTable) {
    for (var i = 0; i < 100; i++) {
        mulTable[i] = [];
        for (var j = 0; j < 100; j++) {
            mulTable[i][j] = i * j;
        }
    }
}

createMultiplicationMatrix(mulTable);

console.log("3 * 9 = " + mulTable[3][9]); 
console.log("5 * 7 = " + mulTable[5][7]);
console.log("0 * 99 = " + mulTable[0][99]); 

