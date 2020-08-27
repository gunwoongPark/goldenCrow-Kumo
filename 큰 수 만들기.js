function solution(number, k) {
    var answer = '';

    var numArr = (number.split("")).map(str => Number(str));

    for (let idx = 0; idx < k; ++idx) {
        let maxIndex = numArr.indexOf(Math.max.apply(null, numArr));
        let minIndex = numArr.indexOf(Math.min.apply(null, numArr));

        

    }

    return answer;
}

let result = solution("1924", 2);
console.log(result);