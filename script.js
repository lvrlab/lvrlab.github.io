// 페이지가 로드되기 전에 'loading' 클래스를 추가하여 페이지를 숨깁니다.
document.body.classList.add('loading');

// 페이지가 완전히 로드되면 'loading' 클래스를 제거하고 'loaded' 클래스를 추가합니다.
window.addEventListener('load', function() {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
});
