function redirectIfItIsMobile(target) {
    if (window.innerWidth <= 640) {
        window.location.href = target;
    }
}