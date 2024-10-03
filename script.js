// 페이지가 로드되기 전에 'loading' 클래스를 추가하여 페이지를 숨깁니다.
document.body.classList.add('loading');

// 페이지가 완전히 로드되면 'loading' 클래스를 제거하고 'loaded' 클래스를 추가합니다.
window.addEventListener('load', function() {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
});

// 햄버거 메뉴 토글 기능
document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');  // 햄버거 메뉴 아이콘의 상태를 변경
    const navMenu = document.querySelector('#header-container nav');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';  // 메뉴가 열려있다면 숨기기
    } else {
        navMenu.style.display = 'block';  // 메뉴가 닫혀있다면 열기
    }
});
