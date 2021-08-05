window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.container')
    let scroll = window.pageYOffset;
    // parallax.style.transform = 'translateY(' + scroll * 0.5 + 'px';
    console.log(scroll);
})