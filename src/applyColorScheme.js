function setColorScheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    let html = document.getElementsByTagName('html')[0];
    let themeSelector = document.getElementById('themeSelector');
    let themeLabel = document.getElementById('themeLabel');
    let moonIcon = document.getElementById('moonIcon');
    let sunIcon = document.getElementById('sunIcon');

    function applyTheme(darkMode) {
        if (darkMode) {
            html.classList.add('dark');
            themeLabel.classList.add('after:left-[4px]');
            themeLabel.classList.remove('after:left-[45px]');
            moonIcon.classList.remove("opacity-0");
            sunIcon.classList.add("opacity-0");
        } else {
            html.classList.remove('dark');
            themeLabel.classList.add('after:left-[45px]');
            themeLabel.classList.remove('after:left-[4px]');
            moonIcon.classList.add("opacity-0");
            sunIcon.classList.remove("opacity-0");
        }
    }

    applyTheme(prefersDarkScheme.matches);

    prefersDarkScheme.addEventListener('change', (e) => {
        applyTheme(e.matches);
    });

    themeSelector.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            applyTheme(false);
        } else {
            applyTheme(true);
        }
    });
}

export { setColorScheme };
