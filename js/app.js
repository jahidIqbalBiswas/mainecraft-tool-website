    //slide-nav
    $(document).ready(function() {
        //slide-nav
        $('.sidenav').sidenav();
        //sticky-nav
        $("#sticker").sticky({
            topSpacing: 0,
            zIndex: 99999,
        });
        $("#brand-logo").unstick();
        //slider
        $('.slider').bxSlider({
            auto: "true",
            speed: 1000,
            captions: "true",
            autoDelay: 4000,
            keyboardEnabled: "true"
        });
        //smooth scroll
        scroller.init();
        //prallaxie js
        $('.parallaxie').parallaxie({
            speed: 0.8,
            offset: 50,
        });
        //magnific popup
        $('.play-video').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                        // Or null - full URL will be returned
                        // Or a function that should return %id%, for example:
                        // id: function(url) { return 'parsed id'; }

                        src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: 'https://maps.google.',
                        src: '%id%&output=embed'
                    }

                    // you may add here more sources

                },

                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            }
        });
        //counter up js
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });
        // carousel
        $('.carousel').carousel();
        //form

        M.updateTextFields();

        $('select').formSelect();
        //wow js
        new WOW().init();
        // Or with jQuery 
        $('.tooltipped').tooltip();
    });
    //----mixitup---
    var any = document.querySelector(".port-wrapper");
    var filter = mixitup(any);
    //dark mode
    var darkBtn = document.querySelector(".darkSwitch");
    var body = document.querySelector("body");
    darkBtn.addEventListener("click", function() {
        body.classList.toggle("dark");
        this.classList.toggle("dark-active");
    });