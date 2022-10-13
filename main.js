//nav bar
let open_nav = document.getElementById('open_nav');
let close_nav = document.getElementById('close_nav');
let nav0 = document.getElementById('nav');

open_nav.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '0';
});
close_nav.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '-100%';
});