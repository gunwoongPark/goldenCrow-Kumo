function solution(people, limit) {
    people.sort(function (a, b) {
        return a - b;
    })

    var answer = 0;

    let lightIndex = 0;
    let heavyIndex = people.length - 1;

    while (lightIndex < heavyIndex) {
        if (people[lightIndex] + people[heavyIndex] <= limit) {
            lightIndex++;
            heavyIndex--;
        }
        else {
            heavyIndex--;
        }
        answer++;
    }
    if (lightIndex === heavyIndex)
        answer++;

    return answer;
}

result = solution([70, 80, 50], 100);

console.log(result);