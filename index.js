console.log('Hello World!')

//Array to return an odd number

const arr1 = [2, 4, 0, 100, 4, 11, 2602, 36] //Should return: 11 (the only odd number)
const arr2 = [160, 3, 1719, 19, 11, 13, -21] //Should return: 160 (the only even number)


function findOdd(array) {
    let arrResultEven = []
    let arrResultOdd = []
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if (element = (element % 2 === 0)) {  //even
            arrResultEven.push(array[index])
        }// add to new array even
        else {arrResultOdd.push(array[index])  } //odd
    }
    // console.log('Evens:', arrResultEven)    
    console.log('Odds:', arrResultOdd)    
}


findOdd(arr1)



function findEven(array) {
    let arrResultEven = []
    let arrResultOdd = []
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if (element = (element % 2 !== 0)) {  //even
            arrResultEven.push(array[index])
        }// add to new array even
        else {arrResultOdd.push(array[index])  } //odd
    }
    console.log('Evens:', arrResultEven)    
    // console.log('Odds:', arrResultOdd)    
}

findEven(arr2)

console.log('Signing Off')
