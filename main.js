const str = `hello 
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록 _
`
// console.log(str.match(/\.$/gim));

//^ab, ab$
console.log(
    str.match(/d$/gm),
    str.match(/^t/gim)
);

// . , a|b, ab?
console.log(
    str.match(/./g),
    str.match(/h..p/g),
    str.match(/fox|dog/g),
    str.match(/https/g),
    str.match(/https?/g),
    str.match(/https?/g)
);

// {3}, {3,}, {3,5}
console.log(
    str.match(/d{2}/g),
    str.match(/d{2,}/g),
    str.match(/d{3,5}/g),
    str.match(/\w{2,3}/g),
    str.match(/\b\w{2,3}\b/g)
);

// [abc], [a-z], [A-Z], [0-9], [가-힣]
console.log(
    str.match(/[fox]/g),
    str.match(/[가-힣]/g),
);

// \w, \b, \d, \s

console.log(
    str.match(/\w/g),
    str.match(/\b/g),
    str.match(/\bf\w{1,}/g),
    str.match(/\d/g),
    str.match(/\d{1,}/g),
    str.match(/\s/g),
    );
    
const h= `   the hello world      !
`
console.log(
    h.replace(/\s/g, '')
);

// 앞쪽일치(?=), 뒷쪽일치(?<=)
const str2 = `hello 
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록 _
`

console.log(
    str2.match(/.{1,}(?=\@)/g),
    str2.match(/(?<=\@).{1,}/g)
);