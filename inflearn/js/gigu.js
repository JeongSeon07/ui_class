$(document).ready(function(){
    //지구 이미지 웹요소를 찾아서 저장
    var $gigu = $("#gigu");


    //버튼에 이벤트 등록
    //5초만에 left값 480px로 설정하는 것이 곧 움직이는 애니메이션 형태처럼 보인다.
    $("#btnStart").click(function() {
        $gigu.animate({
            left : "480px"
        },5000);
    })
})