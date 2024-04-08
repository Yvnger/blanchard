// Header login link
const loginLink = document.querySelector('.header__login-link');
const loginIcon = document.querySelector('.header__login-icon path');
const loginIconDefault = 'M9.62056 9.09278L10.6389 10.1111L14.25 6.5L10.6389 2.88889L9.62056 3.90722L11.4839 5.77778H4.4V7.22222H11.4839L9.62056 9.09278ZM16.0556 0H5.94444C5.14278 0 4.5 0.65 4.5 1.44444V4.33333H5.94444V1.44444H16.0556V11.5556H5.94444V8.66667H4.5V11.5556C4.5 12.35 5.14278 13 5.94444 13H16.0556C16.85 13 17.5 12.35 17.5 11.5556V1.44444C17.5 0.65 16.85 0 16.0556 0Z';
const loginIconHover = 'M9.62056 9.09278L10.6389 10.1111L14.25 6.5L10.6389 2.88889L9.62056 3.90722L11.4839 5.77778H0V7.22222H11.4839L9.62056 9.09278ZM16.0556 0H5.94444C5.14278 0 4.5 0.65 4.5 1.44444V4.33333H5.94444V1.44444H16.0556V11.5556H5.94444V8.66667H4.5V11.5556C4.5 12.35 5.14278 13 5.94444 13H16.0556C16.85 13 17.5 12.35 17.5 11.5556V1.44444C17.5 0.65 16.85 0 16.0556 0Z';

loginLink.addEventListener('mouseenter', () => {
    loginIcon.setAttribute('d', loginIconHover);
});

loginLink.addEventListener('mouseleave', () => {
    loginIcon.setAttribute('d', loginIconDefault);
})

// Header nav toggle
const burger = document.querySelector('.header__nav-hamburger');
const close = document.querySelector('.nav__close');
const nav = document.querySelector('.header__nav.nav');
const navActiveClass = 'nav--opened';

burger.addEventListener('click', () => toggleNav());
close.addEventListener('click', () => toggleNav());

function toggleNav() {
    if (nav.classList.contains(navActiveClass)) {
        nav.classList.remove(navActiveClass);
    } else {
        nav.classList.add(navActiveClass);
    }

    return;
}