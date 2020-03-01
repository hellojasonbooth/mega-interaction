
    const downArrowTag = document.querySelector('button#arrow-down')
    const bodyTag = document.querySelector('body')
    const mainTag = document.querySelector('main')
    
    downArrowTag.addEventListener('click', moveMain)

    function moveMain() {
        bodyTag.classList.remove('active')
    }



    document.addEventListener('scroll', function () {

        const pixels = window.pageYOffset

        if (pixels == 0){
            //alert('worked')
            bodyTag.classList.add('active')
        }

    })




    // purely for example purposes only
    // to animate the body up the height of the browser

    // overflow glitch if page refreshed and scroll initiated
    // so to clear that we do this
    window.onload = function() {
        setTimeout (function () {
         scrollTo(0,0)
        }, 10) //10ms for example
    }

    // arrow click function
    // for ease jquery is used
    $(function() {
        $("#arrow-down").on('click', function() {
            var hero = $(window).height();
            $("HTML, body").animate({
                scrollTop: hero
            }, 600);
        });
    });

