function solution(progresses, speeds) {
    var answer = [];
    let date = 0;
    let count = 0;
    let flag = false;
    while (true) {
        if (progresses.length === 0)
            break;
        for (let idx = 0; idx < progresses.length; ++idx) {
            progresses[idx] += speeds[idx];
        }
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count += 1;
            flag = true;
        }
        if (flag) {
            answer.push(count);
            count = 0;
            flag = false;
        }
    }
    return answer;
}

resultArray = solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5, 10, 7]);

console.log(resultArray);