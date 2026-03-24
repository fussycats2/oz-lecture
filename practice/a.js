const numbers = [1, 2, 3, 4, 5];

// map()을 사용하여 각 numbers 요소에 콜백함수를 적용한 결과값을 새로운 배열(squares)에 추가합니다.
const squares = numbers.map((number) => number ** 2);

console.log("원본 배열:", numbers); // 출력: 원본 배열: [1, 2, 3, 4, 5]
console.log("새로운 배열:", squares); // 출력: 새로운 배열: [1, 4, 9, 16, 25]