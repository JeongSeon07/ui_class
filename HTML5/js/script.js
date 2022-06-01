id = prompt("아이디 입력");     //내장함수
console.log('id: ',id);         //case1.입력+확인
console.log('id',id);           //case2.입력+취소   null
console.log('id',id);           //case3.입력x + 확인    null
console.log('id',id);           //case4.입력x + 취소    null

if(id =="admin") {
    password = prompt("비밀번호 입력");

    if (password ==="123456") {
        // location.href = "http://www.naver.com";
        console.log("아이디와 비밀번호가 일치합니다.");
    }else {
        // location.href = "http://www.daum.net";
        console.log("비밀번호가 일치하지 않습니다.");
    }
}else {
    // location.href = "http://www.google.co.kr";
    console.log("아이디가 일치하지 않습니다");
}
