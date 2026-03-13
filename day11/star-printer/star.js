
const STAR = "*";
const minStars = 1;
const maxStars = 10;

const getPromptInput = () => {
    let input;
    let isNotValid = true;
    
    while (isNotValid) {
        let inputStr = prompt("출력할 별 갯수를 입력하세요.")
        input = Number(inputStr);
        if(isNaN(input) || input < minStars || input > maxStars) {
            console.log('Invalid input! Enter a number between 1 and 10.');
            return null;
        }
        isNotValid = false;
    }
    return input;
}

const input = getPromptInput();

function printStar(count) {
    let starMk = "";
    for (let i = 0; i < count; i++) {
        starMk += STAR;
    }
    console.log(starMk);
}

const printReverseStars = function(count) {
    for (let i = count; i > 0; i--) {
        let reverseStarMk = "";
        for (let j = 0; i > j; j++) {
        reverseStarMk += STAR;
        }
        console.log(reverseStarMk);
    }
}

const printSquare = (count) => {
    for (let i = 0; i < count; i++) {
        let squareStarMk = "";
        for (let j = 0; count > j; j++) {
        squareStarMk += STAR;
        }
        console.log(squareStarMk);
    }
}    

if (input !== null) {
    printStar(input);
}
console.log("====================")

if (input !== null) {
    printReverseStars(input);
}
console.log("====================")

if (input !== null) {
    printSquare(input);
}