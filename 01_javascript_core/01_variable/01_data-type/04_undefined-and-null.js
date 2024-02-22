// var undef=undefined; -> 개발자가 의도적으로 변수에 할당하는 것은 지양
var undef; //자바스크립트 엔진이 변수 초기화 시 undefined 사용
console.log(undef);

var nullVal = 'something';
nullVal = null;
console.log(nullVal);