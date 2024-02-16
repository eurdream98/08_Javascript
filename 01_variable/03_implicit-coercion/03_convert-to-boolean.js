//논리 타입으로 암묵적 변환
//자바스크립트 엔진은 boolean타입이 아닌 값을 Truthy 값(참으로 평가 되는 값)
//또는 Falsy 값(거짓으로 평가 되는 값)으로 구분한다.
//Truthy -> true, Falsy -> false로 암묵적 타입 변환된다.
if('고동환') console.log("if('고동환')");//true
if(null) console.log("if(null)"); //false
if(undefined) console.log("if(undefined)"); //false
if(0) console.log("if(0)"); //false
if(1) console.log("if(1)");//true
if(NaN) console.log("if(NaN)"); //false
if('') console.log("if('')"); //false

//undefined,null,0,NaN,''(빈 문자열)을 제외하고는 모두 truthy가 나옴