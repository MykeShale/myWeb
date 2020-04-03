var typed = new Typed('.typing', {
    strings: [ "", "", "a Web Developer,", "", "", "a Web Designer,", "", "", "a System Analyst,", "", "", "a Video Editor,", "", "", "        also a         Marketer ...🤑", "", "", ""],
    loop: true,
    typeSpeed: 170,
    backSpeed: 110,
    backDelay: 800,

});

var typed = new Typed('.typing1', {
    strings: ["a Web Developer,", "", "", "a Web Designer,", "", "", "        also a         Marketer        ...   🤑", "", "", ""],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 900,

});


$(document).ready(function(){
var showPass = 0;
$('.btn-show-pass').on('click', function(){
if(showPass == 0) {
$(this).next('input').attr('type','text');
$(this).find('i').removeClass('mdi-eye');
$(this).find('i').addClass('mdi-eye-off');
showPass = 1;
}
else {
$(this).next('input').attr('type','password');
$(this).find('i').addClass('mdi-eye');
$(this).find('i').removeClass('mdi-eye-off');
showPass = 0;
}

});
});