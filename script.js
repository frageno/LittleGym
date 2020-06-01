$(document).ready(()=>{
    $('.nav-button').click(()=>{
        $('.nav-button').toggleClass('c-hamburger__change');
    });

    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position>=180){
            $('.t-mission__img').addClass('t-mission__effect-right');
            $('.t-mission__second-title').addClass('t-mission__effect-left');
        }
        else{
            $('.t-mission__img').removeClass('t-mission__effect-right');
            $('.t-mission__second-title').removeClass('t-mission__effect-left');


        }
    });
})