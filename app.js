let arr1 = [
    [1, 4, 7],
    [2, 25, 8],
    [3, 6, 12],
]

let arr2 = [
    [1, 4, 7],
    [2, 25, 8],
    [3, 6, 12],
]

for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr1.length; j++){
        console.log(`i= ${i}  j= ${j}`);
        console.log(arr1[i][j] * arr2[i][j])
    }
}