const arrFirst = [5, 6, 4, 3, 32, 5, 6, 8];
const lastIndex = arrFirst.length - 1;
const headIndex = 0;
const freeArr = [];

const midDefiner = Math.floor((lastIndex + headIndex) / 2);
const midIndex = arrFirst[midDefiner];
console.log(midIndex);

const result = arrFirst.map(function (value, index, arr) {
    freeArr[index] = value;

    if (midIndex > arrFirst[index]) {
        freeArr.unshift(value);
    }
    else if(midIndex < arrFirst[index]){
        freeArr.push(value);
    }
    else{
        console.log('404');
    }
    console.log(freeArr);
});
console.log(result);
