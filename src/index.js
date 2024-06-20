window.onload = () => {
    setColorScheme();
};

function setColorScheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    console.log(prefersDarkScheme);
    let html = document.getElementsByTagName('html')[0];
    console.log(html);
    let themeSelector = document.getElementById('themeSelector');
    let themeLabel = document.getElementById('themeLabel');
    let moonIcon = document.getElementById('moonIcon');
    let sunIcon = document.getElementById('sunIcon');

    if (prefersDarkScheme.matches) {
        console.log("dark");
        html.classList.add('dark');
        console.log(html.classList);
        themeLabel.classList.add('after:left-[4px]');
        moonIcon.classList.add("opacity-0");
        sunIcon.classList.remove("opacity-0");
    } else {
        console.log("light");
        html.classList.remove('dark');
        themeLabel.classList.add('after:left-[45px]');
        moonIcon.classList.add("opacity-0");
        sunIcon.classList.remove("opacity-0");
    }

    themeSelector.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            themeLabel.classList.remove('after:left-[4px]');
            moonIcon.classList.add("opacity-0");
            sunIcon.classList.remove("opacity-0");
        } else {
            html.classList.add('dark');
            themeLabel.classList.add('after:left-[4px]');
            moonIcon.classList.remove("opacity-0");
            sunIcon.classList.add("opacity-0");
        }
    });
}