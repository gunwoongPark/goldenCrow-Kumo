function DFS(start, graph, visit) {
    if (visit[start] === true) {
        return 0;
    }

    visit[start] = true;

    for (let idx = 0; idx < graph[start].length; ++idx) {


        if (graph[start][idx] === 1) {
            DFS(idx, graph, visit)
        }
    }

    return 1;
}

function solution(n, computers) {
    let visit = new Array();
    var answer = 0;

    for (let idx = 0; idx < n; ++idx)
        visit.push(false);

    for (let idx = 0; idx < n; ++idx) {
        if (DFS(idx, computers, visit))
            answer++;

    }

    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))