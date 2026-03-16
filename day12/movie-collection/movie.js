// 영화 정보 객체 생성, 배열 저장
let movies = [
    {title: "The Matrix", director: "Wachowskis", year: 1999, genre: "Sci-Fi"},
    {title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi"},
    {title: "Parasite", director: "Bong", year: 2019, genre: "Drama"}
];

// 기본 장르 설정 및 변수 선언
const defaultGenre = "Unknown";
let count = movies.length;

// 영화 정보 출력 함수(for문 사용)
function printMovies(movies) {
    for (let i = 0; i < movies.length; i++) {
        var movie = movies[i];
        if (!movie.title) movie.title = "Unknown";
        if (!movie.director) movie.director = "Unknown";
        if (!movie.year) movie.year = "Unknown";
        console.log(`${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre || defaultGenre}`);
    }
    console.log(`Total Movies: ${count}`);
}

//영화 정보 출력
console.log("Movie Collection:");
printMovies(movies);

// sf영화만 출력 함수(for, if문 사용)
function sciFiMovies(movies) {
    for (let i = 0; i < count; i++) {
        var movie = movies[i];
        if (movie.genre === "Sci-Fi") {
            if (!movie.title) movie.title = "Unknown";
            if (!movie.director) movie.director = "Unknown";
            if (!movie.year) movie.year = "Unknown";
            console.log(`${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre || defaultGenre}`);
        }
    }
}

// sf영화 정보 출력
console.log("Sci-Fi Movies:");
sciFiMovies(movies);

// 평균 출판년도 계산 함수
const calculateAverageYear = function(movies) {
    let years = movies.map(movie => movie.year);
    let sum = 0;
    for (let i = 0; i < years.length; i++) {
        sum = sum + years[i]
    }
    return sum / years.length;
}

// 평균 출판년도 (0자리 반올림)
let avgYear = calculateAverageYear(movies);
const sumVal = avgYear.toFixed(0);


// 가장 최신 영화 함수
const findNewestMovie = (movies) => {
    let newest = movies[0];   
    for (let i = 1; i < count; i++) {
        if (movies[i].year > newest.year) {
            newest = movies[i];
        }
    }
    return newest;
}
// 가장 최신영화 
const newestMovie = findNewestMovie(movies);

// 평균년도 / 최신 영화 출력
console.log("Statistics:");
console.log(`Average Year: ${sumVal}년`);
console.log(`${newestMovie.title} (${newestMovie.year})`);