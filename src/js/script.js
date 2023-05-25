// const LOCALSTORAGE_KEY = 'ui-theme';

// const themeBtn = document.querySelector('.theme-btn');
// const hamburgerMenu = document.querySelector('.hamburger');
// const mobileNavMenu = document.querySelector('.nav__list');
// const bodyDarkTheme = document.querySelector('body');

// themeBtn.addEventListener('click', onThemeToggle);

// hamburgerMenu.addEventListener('click', onClickHamburgerMenu);

// function onThemeToggle() {
//   themeBtn.classList.toggle('theme-btn--active');

//   const isDark = bodyDarkTheme.classList.toggle('dark');
//   if (isDark) {
//     localStorage.setItem(LOCALSTORAGE_KEY, 'dark');
//   } else {
//     localStorage.setItem(LOCALSTORAGE_KEY, 'light');
//   }
// }

// function onClickHamburgerMenu() {
//   hamburgerMenu.classList.toggle('hamburger--active');
//   mobileNavMenu.classList.toggle('nav__list--active');
// }

// window.onload = chekLocalStor();

// function chekLocalStor() {
//   const theme = localStorage.getItem(LOCALSTORAGE_KEY);
//   console.log(theme);
//   if (theme === 'dark') {
//     themeBtn.classList.add('theme-btn--active');

//     bodyDarkTheme.classList.add('dark');
//   }
//   if (theme === 'light') {
//     themeBtn.classList.remove('theme-btn--active');

//     bodyDarkTheme.classList.remove('dark');
//   }
// }

// function setLocalStorage() {}
// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// };

// const load = (key) => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };

// export default {
//   save,
//   load,
// };
