var backdrop = document.getElementById('backdrop');
document.body.style.minHeight = window.innerHeight * 2 + 'px';
window.addEventListener('scroll', function(ev) {
    // the last number changes where the image fades out entirely (0.5 = scrolled to 50% of image)
    var target = 1 - ((document.documentElement.scrollTop || window.scrollY) / (window.innerHeight * 0.5));
    if (target < 0.1) target = 0.1;
    else if (target > 1) target = 1;
    /*img.style.opacity = target;*/
   backdrop.style.opacity = target;
});