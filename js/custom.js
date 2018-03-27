$(document).ready(function() {
    openSideNav();
});
function fabOnClick(fab, currentColor, nextColor) {
    var icon = fab.children[0];
    if(icon.innerHTML == 'create') {
        icon.innerHTML = 'close';
        fab.style['background-color'] = nextColor;
        icon.style.transform = 'rotateZ(90deg)';
    }
    else {
        icon.innerHTML = 'create';
        fab.style['background-color'] = currentColor;
        icon.style.transform = 'rotateZ(0deg)';
    }
}
function openSideNav() {
    hamburger.innerHTML = 'arrow_forward';
    hamburger.style.transform = 'rotateZ(180deg)';
    document.getElementById('side-nav').style.transform = 'translateX(0)';
}
function closeSideNav() {
    hamburger.innerHTML = 'menu';
    hamburger.style.transform = 'rotateZ(0deg)';
    document.getElementById('side-nav').style.transform = 'translateX(-100%)';
}
function openFrame(src) {
    document.getElementById('iframe').src = !document.getElementById('iframe').src.includes(src) ? src : 'tabs/main.html';
    closeSideNav();
}