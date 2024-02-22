//Symbol은 ES6에서 추가 된 7번째 타입으로
//다른 값과 중복 되지 않는 유일무이한 값.
// 이름 충돌 위험이 없는객체의유일한 프로퍼티 값을 만들기 위해 사용
//심벌 이외 원시 값은 리터럴을 통해 생성하며 심벌은 Symbol함수를 통해 호출해서 생성

//심벌 생성
var dd=Symbol('key');
console.log(typeof dd);

//객체 타입
//자바스크립트의 데이터타입은 크게 원시타입,객체타입으로 분류한다.
//number,string,boolean,undefined,null,symbol6가지 데이터 타입 외의 값은 모두 "객체"타입이다.
//(객체,함수,배열..등에 대해서는 추후 자세히 다룰 예정)

//객체 생성
var obj ={};
obj[dd] ='value';
console.log(obj[dd])
