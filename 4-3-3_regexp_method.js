const str = `hello 
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// test 메소드
const regexp = /fox/gi;
console.log(regexp.test(str));
const regexp2 = /heropy/gi;
console.log(regexp2.test(str));

// replace 메소드
console.log(str.replace(regexp, 'AAA'));
console.log(str);