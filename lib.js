function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (num <= 1) {
        return false; // 1 보다 작거나 같은 수 일때
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // 2부터 num의 제곱근 중 하나라도 나누어떨어진다면 소수아님
        }
    }
    return true; // 소수
}

function fact(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * fact(num - 1); // 재귀 사용 n!
    }
}

module.exports = {
    avg,
    prime,
    fact,
};
