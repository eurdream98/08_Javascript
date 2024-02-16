//숫자 타입으로 암묵적 변환

//1. 산술 연산자
// 산술 연산자의 피연산자는 모두 숫자여야 하므로 숫자가 아닌 피연산자를 숫자타입으로 암묵적 타입 변환한다.
console.log(10+'5');
console.log(10-'5');
console.log(10*'5');
console.log(10/'5');
console.log(10%'5');
console.log(10%'JavaScript');

//2. 비교 연산자
// 비교 연산자로 크기를 비교하기 위해 모두 숫자 타입이여야
//하므로 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10>'5');
console.log(10>'20');
console.log(`1000 > 'a':${1000>'a'}`)
console.log(`10 > 'a':${10>'a'}`)

//참고 : NaN끼리 비교 연산자 사용도 불가능하므로 isNaN함수를 이용해 확인해야한다.
console.log(`NaN==NaN:${NaN==NaN}`);
console.log(`NaN==NaN:${isNaN(NaN)}`);

// 3. +단항 연산자
// 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');  //0
console.log(+'1'); //1
console.log(+'JavaScript'); //NaN
console.log(+true); //1
console.log(+false); //0
console.log(+null); //0
console.log(+undefined); //NaN
// console.log(+Symbol());
//에러남
console.log(+{});//NaN
console.log(+[]);//0
console.log(+function(){});//NaN




