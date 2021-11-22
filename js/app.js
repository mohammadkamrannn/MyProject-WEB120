$(document).ready(function(){
    $('header nav ul li a').click(function(){
        $('header nav ul li a').removeClass('active');
        $(this).addClass('active');
        // event.preventDefault();
    });
});