$(function(){

    $('.visual').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 5000,
        pauseOnHover:false,
    });
    $('.visual').slick('init');
    let aaa = true;
    $('.btn_stop').click(function(){
        if (aaa==true){
            $(this).addClass('on');
            $('.visual').slick('slickPause');                        
            aaa=false;
        }else{
            $(this).removeClass('on');
            $('.visual').slick('slickPlay');
            aaa=true;
        }
    });


    let newyear = moment('2021-12-23');
    
    function countDown(){
        let now = moment();
        let timeRema = moment.duration(newyear.diff(now));
        divClock(timeRema);
    }     
    function divClock(tr){
        let day = Math.floor(tr.asDays()+1);
        $('#days').text(digit(day));
        let hour = Math.floor(tr.asHours() % 24);
        $('#hours').text(digit(hour));
        let min = Math.floor(tr.asMinutes() % 60);
        $('#minutes').text(digit(min));
        let sec = Math.floor(tr.asSeconds() % 60);
        $('#seconds').text(digit(sec));
    };
    let newyear2 = moment('2021-12-22'); 
    function countDown2(){
        let now = moment();
        let timeRema = moment.duration(newyear2.diff(now));
        divClock2(timeRema);
    }     
    function divClock2(tr){
        let day = Math.floor(tr.asDays());
        $('#days2').text(digit(day));
        let hour = Math.floor(tr.asHours() % 24 - 5);
        $('#hours2').text(digit(hour));
        let min = Math.floor(tr.asMinutes() % 60);
        $('#minutes2').text(digit(min));
        let sec = Math.floor(tr.asSeconds() % 60);
        $('#seconds2').text(digit(sec));
    };
    function digit(num){
        if(num < 10){
            num = '0' + num;            
        }
        return num;
    };
    setInterval(function(){
        countDown();
        countDown2();
    },1000)

    $(".visual").on("afterChange", function(){
    if($('.slick-dots .slick-active').index() == 5){
            $('.slick-dots li').addClass('fff');
            $('.slick-prev').addClass('on');
            $('.slick-next').addClass('on');
            $('.btn_stop').addClass('fff');
        }else if($('.slick-dots .slick-active').index() == 6){
            $('.slick-prev').removeClass('on');
            $('.slick-next').removeClass('on');
        }else{
            $('.slick-dots li').removeClass('fff');
            $('.slick-prev').removeClass('on');
            $('.slick-next').removeClass('on');
            $('.btn_stop').removeClass('fff');
        }
    });
    
    $('.r_gnb li .menu_btn').click(function(){
        $(this).fadeOut();
        $('.tab_menu').animate({
            marginRight : 0
        } , 1000 ) ;
    })

    $('.x_btn').click(function(){
        $('.r_gnb li .menu_btn').fadeIn();
        $('.tab_menu').animate({
            marginRight : '-40%'
        } , 1000) ;
    })


});