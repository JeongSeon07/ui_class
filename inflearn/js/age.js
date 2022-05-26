function calc() {
    var currentYear = 2022;                                     //올해연도를 변수에 저장
    var birthYear = prompt("테어난 년도를 입력하세요." , "YYYY");//사용자로부터 입력받은 값으로 변수에 저장
    var age = 0;                                                //변수를 0으로 초기화
    age = currentYear - birthYear + 1;                          //실제 나이를 구하기 위한 코드
    document.querySelector("#result").innerHTML = "당신의 나이는" + age + "세 입니다.";
}
    //document는 현재 웹브라우저의 페이지를 의미하고 queryselect()는 id가 result인 웹요쇼(div)를 의미한다.
    //inner는 대입한 값으로 html문서(결과값표시) 에 대체하라는 의미이다.