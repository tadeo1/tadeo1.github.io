$(document).ready(
    function(){
        $(window).scroll(
            function(){
                if($(this).scrollTop() > 0){
                    $('header').addClass('header2');
                    $('section').addClass('seccion');
                }
                else {
                    $('header').removeClass('header2');
                    $('section').removeClass('seccion');
                }
            }
        );
    }
);

function desarrollo() {
    window.alert("Funcion en desarrollo :(");
}


