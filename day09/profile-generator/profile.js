// 변수 선언 및 출력
var myName = "choBR";
let myAge = 44;
const AGE_CHK = myAge > 44;

let cellPhone = "010\n5248\t9058";
let myNameAge = myName+" "+myAge;
console.log(cellPhone);
console.log(myNameAge);

// 배열
let myHobbies = ["coding", "gaming", "traveling", null];
console.log("My hobbies: " + myHobbies[0] + "," + myHobbies[1] + "," + myHobbies[2]);
console.log("myHobbies[0]", typeof myHobbies[0]);
console.log("myHobbies[1]", typeof myHobbies[1]);
console.log("myHobbies[2]", typeof myHobbies[2]);
console.log("myHobbies[3]", typeof myHobbies[3]);

// 객체 리터럴
let myInfo = {
    name: "Bumrak Cho",
    age: 44,
    add: "seoul",
    isStudent: true,
    email: null,
    job: undefined
}
console.log("저의 이름은 " + myInfo.name + "이며, 나이는 " + myInfo.age + "세, 사는곳은 " + myInfo.add + "입니다");
console.log(`저의 이름은 ${myInfo.name}이며, 나이는 ${myInfo.age}세, 사는곳은 ${myInfo.add}입니다`);

// 타입
console.log("AGE_CHK", typeof AGE_CHK);
console.log("myAge", typeof myAge);
console.log("isStudent", typeof myInfo.isStudent);

let first = null;
let second = undefined;

console.log("first", typeof first);
console.log("second", typeof second);
console.log(first === second);        // false

console.log("email", typeof myInfo.email);
console.log("job", typeof myInfo.job);







