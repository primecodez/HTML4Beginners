/*
node _6.js
well the below program is not an example of labled break
*/

const matrix = [
    [1, 2, 3], // Row 0
    [4, 5, 6], // Row 1
    [7, 8, 9]  // Row 2
];
const target = 6
function findTheCoordinates(matrix,target){
    for(let r = 0;r < matrix.length ; r++){
        for(let c =0;c < matrix[r].length;c++){
            if(matrix[r][c] === target){
                return {row : r, col : c}
            }
        }
    }
    return null;
}

const result = findTheCoordinates(matrix, target);
console.log(result);
