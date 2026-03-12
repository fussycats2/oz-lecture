// 프롬프트 입력 및 타입 변환
const INPUT = prompt("점수를 입력하세요.");
var score = Number(INPUT);

// 입력오류시 콘솔메시지 출력 + 이외 정상출력 
if (score > 100 || score < 0 || isNaN(score)) {     
    console.log("Invalid score! Please enter a number between 0 and 100.")
} else {

        // 보너스 점수
        let bonusScore = score + 5;

        // 점수 제한
        if (bonusScore > 100) {    
            bonusScore = 100;
        }

    let finalScore = bonusScore;

    // 최종 점수 출력
    console.log("Final Score:", finalScore);

    // 등급 부여
    let grade;
    if (finalScore >= 100) {
        grade = "S";
    } else if (finalScore >= 90) {
        grade = "A";
    } else if (finalScore >= 80) {
        grade = "B";
    } else if (finalScore >= 70) {
        grade = "C";
    } else if (finalScore >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // 등급 출력
    console.log("Grade: ", grade);

    // 합격/불합격 여부
    console.log("Status:", finalScore >= 60 ? "Pass" : "Fail");

    //등급별 메시지 출력 (100점일 경우 별도 메시지 출력)
    if (finalScore === 100) {
        console.log("Message: Perfect Score!")
    } else {
        switch (grade) {
            case "S":
                console.log("Message: Super!!")
                break;
            case "A":
                console.log("Message: Excellent work!")
                break;
            case "B":
                console.log("Message: Good job!")
                break;
            case "C":
                console.log("Message: Satisfactory performance.")
                break;
            case "D":
                console.log("Message: Needs improvement.")
                break;
            default :
                console.log("Message: Please try harder!")
                break;
        }
    }
}


