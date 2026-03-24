for(var i = 0; i < 5; i++) {
    console.log('javascript');
}

for(var i = 0; i < 10; i++) {
    console.log('*');
}

for(var i = 1; i < 13; i++) {
    console.log(i + '월');
}

for(var i = 2; i < 101; i += 2) {
    console.log()
}

var sum = 0;
for(var i = 1; i < 11; i++) {
    sum = sum + 1;
}


for(var i = 2; i < 10; i++) {
}

function logMessage() {
  return "출력만 하고 반환도 합니다.";
}

const result = logMessage(); // "출력만 하고 반환은 없습니다." 출력
console.log(result);         // undefined