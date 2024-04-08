window.onload = function() {
    // 웹 페이지가 완전히 로드되었을 때 실행. 페이지 로드 전에 js코드가 실행되는 것을 방지

    // text와 image들을 배열로 정의
    var elements = [
        "text1", "text2", "text3", "text4", "text5", 
        "image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13", "image14", "image15", "image16", "image17","image18", "image19", "image20", "image21", "image22", "image23", "image24", "image25", "image26", "image27", "image28", "image29", "image30",
        "glitch1", "glitch2"
    ];

    // 각 요소에 대해 처리
    elements.forEach(function(elementClass) {
        var element = document.querySelector('.' + elementClass);

        // 요소의 위치를 랜덤하게 설정
        var randomX = Math.random() * (window.innerWidth - element.offsetWidth);
        var randomY = Math.random() * (window.innerHeight - element.offsetHeight);

        // 화면 안에서만 위치를 조정
        randomX = Math.max(randomX, 0);
        randomX = Math.min(randomX, window.innerWidth - element.offsetWidth);
        randomY = Math.max(randomY, 0);
        randomY = Math.min(randomY, window.innerHeight - element.offsetHeight);

        // z-index를 랜덤하게 설정하여 요소들이 겹쳐지는 순서를 조정
        var randomZIndex = Math.floor(Math.random() * 100); // 0에서 99 사이의 랜덤한 정수
        element.style.position = 'absolute';
        element.style.left = randomX + 'px';
        element.style.top = randomY + 'px';
        element.style.zIndex = randomZIndex; // 랜덤한 z-index 설정
    });

// 페이지 자동 새로고침 함수
function autoRefresh() {
    // 2000밀리초(2초)마다 페이지를 새로고침
    setInterval(function() {
        location.reload();
    }, 2000);
}

// 페이지 로드 후 자동 새로고침 함수 호출
autoRefresh();

};
