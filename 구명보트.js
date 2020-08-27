function solution(people, limit) {

    people.sort(function (a, b) {
        return a - b;
    })

    var answer = 0;
    let boatWeight = 0;
    let mostLight = 0;

    while (people.length !== 0) {
        mostLight = Math.min.apply(null, people);

        if (limit >= boatWeight + mostLight) {
            const index = people.indexOf(mostLight);
            boatWeight += mostLight;
            people.splice(index, 1);
            if (people.length === 0) {
                answer += 1;
            }
        }

        else {
            answer += 1;
            boatWeight = 0;
        }
    }

    return answer;
}

result = solution([10, 20, 30, 40, 50, 60, 70, 80, 90], 100);

console.log(result);