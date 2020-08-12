import re

def solution(lines):
    result_list = []
    for line in lines:
        log_str = line.split(' ')
        S = log_str[1]
        T = log_str[2]

        S = S.split(':')

        hour = S[0]
        minute = S[1]
        second = S[2]

        result = (int(hour)*60*60 + int(minute)*60 + float(second))*1000

        T = ''.join(re.findall('\d+', T))
        if (len(T) > 1):
            T = float(T[:1] + '.' + T[1:])
        else:
            T = float(T)

        result_list.append((result - (T*1000)+1, result))

    answer = []
    dummy = 1

    for idx in range(len(result_list)-1):
        count = 1
        for jdx in range(idx+1, len(result_list)):
            if result_list[jdx][0] - result_list[idx][1] < 1000:
                count+=1
            elif result_list[jdx][1] - result_list[idx][1] >= 4000:
                break
        answer.append(count)
    answer.append(dummy)
    max_answer = max(answer)

    if max_answer == 0:
        return 1

    return max_answer


final_result = solution([
'2016-09-15 01:00:04.001 2.0s',
'2016-09-15 01:00:07.000 2s'
])

print(final_result)