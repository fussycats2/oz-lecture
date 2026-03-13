// 0부터 4까지 콘솔찍는 코드
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("=================")
console.log("////////////////")

// 1부터 5까지 콘솔찍는 코드
for (let i = 1; i < 6; i++) {
    console.log(i);
}
console.log("=================")

// 1부터 10까지 홀수만 찍는 코드
for (let i = 1; i < 11; i += 2) {
    console.log(i);
}
console.log("=================")

// 중첩반복문
for (let i = 0; i < 2; i++) {
    console.log(`i: ${i}`);
    for (let j = 0; j < 2; j++) {
        console.log(`j: ${j}`);
    }
}
console.log("=================")

// for문과 배열
let arr = ["banana", "apple", "orange"];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    const fruit = arr[i];
    console.log(fruit);
}
console.log("=================")