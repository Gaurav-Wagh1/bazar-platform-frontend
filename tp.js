// const arr = ['0-1000', '20000-'];

// let lowestLimit = Number.MAX_SAFE_INTEGER;
// let highestLimit = 0;
// for (let str of arr) {
//     const valuesArr = str.split("-");
//     if (valuesArr.length == 1) {
//         if (+valuesArr[0] > highestLimit && +valuesArr[0] > lowestLimit) { highestLimit = +valuesArr[0] }
//         else { lowestLimit = +valuesArr[0]; }
//     }
//     if (+valuesArr[0] < lowestLimit) {
//         lowestLimit = +valuesArr[0]
//     }
//     if (highestLimit < +valuesArr[1]) {
//         highestLimit = +valuesArr[1]
//     }
// }
// console.log({ lowestLimit, highestLimit });

function findHighestAndLowest(arr) {
    let highest = -Infinity;
    let lowest = Infinity;

    arr.forEach(range => {
        const [start, end] = range.split('-').map(Number);
        if (end === undefined) {
            highest = Math.max(highest, start);
            lowest = Math.min(lowest, start);
        } else {
            highest = Math.max(highest, end);
            lowest = Math.min(lowest, start);
        }
    });

    return { highest, lowest };
}

const inputArray = [ '5000-10000', '10000-20000', '20000-'];
const { highest, lowest } = findHighestAndLowest(inputArray);
console.log('Highest:', highest);
console.log('Lowest:', lowest);
