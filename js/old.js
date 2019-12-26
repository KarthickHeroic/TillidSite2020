(function ($) {
    //ScrollTo
    
    controller = new ScrollMagic.Controller({vertical: false});
    
    
    controller.scrollTo(function (newpos) {
        TweenMax.to(newpos, 0.5, {scrollTo: {x: -500}});
    });
    
    
    $(".nav-item").click(function(e){
        var id = '#'+$(this).attr('page-id');
    
        tlSec3.to(window, 0.5, {scrollTo: {y:id }});
    
        new ScrollMagic.Scene({
        
            triggerHook: 0,
            triggerElement: id,
            reverse: true
        })
        
        .addIndicators()          
        .addTo(controller)
        .on('enter', function () {
            console.log("section" +id+ "Enter");
        });
    
    });
    
    
    
    
    
    
    
    //  bind scroll to anchor links
    // $(".nav-item").click(function(e){
    //     var id = '#'+$(this).attr('page-id');
    
    //     $('section').each(function(index,element) {  
    //        if ($(this).hasClass('active')){
    //        var activeId=  '#'+$(this).attr('id');
    //        console.log(activeId)
    //        controller.scrollTo(id);
    //       // tlSec2.from(activeId, 0.5, {scrollTo: {x:100}});
    //       }
        
    //     });
    
    
    
       // if ($(id).length > 0) {
         //   e.preventDefault();
    
            // trigger scroll
            
          //  controller.scrollTo(id);
    
                // if supported by the browser we can even update the URL.
            // if (window.history && window.history.pushState) {
            //     history.pushState("", document.title, id);
            // }
      //  }
    //});
    
    
    
    
    //Tween
    var tlNav = new TimelineMax();
    var tlSec1 = new TimelineMax();
    var tlSec2 = new TimelineMax();
    var tlSec3 = new TimelineMax();
    
    //Tween Animation
    
    //Nav 
    
    tlNav.from(".nav-item", 1, { autoAlpha: 0, y: -50 , stagger: 0.1, ease: "power4.out",duration:1},"+=1");
    //Section 1
    
    tlSec1.from("#from", 0.5, { autoAlpha: 0, y: -500 ,stagger: 0.05, ease: "power4.out",duration:0.1}, 0);
    tlSec1.to("#from", {morphSVG:"#to", duration: 3,ease: "elastic.out(1, 0.3)"});
    tlSec1.to("#svgPathBlueRight", {morphSVG:"#svgPathRight", duration: 1},0);
    tlSec1.to("#svgPathRightFrom", {morphSVG:"#svgPathRight",ease: "power4.out", duration: 1},"-=3");
    tlSec1.to("#svgPathBlueRight", {opacity:0},"-=2.5");
    tlSec1.fromTo("#illustrationImage" , { scaleX:0, scaleY:0 }, { scaleX:1, scaleY:1,duration: 1.5, ease: "back.out(1.7)" },"-=3")
    
    tlSec1.from(".maskBox", 0.65, { autoAlpha: 0, x:-50, yPercent: 100, ease: Back.easeOut },"-=3");
    tlSec1.from(".content2", 0.65, { autoAlpha: 0, x:-50, ease:"power4.out" },"-=3");
    
    tlSec1.from("#track1", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},0);
    tlSec1.from("#track2", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1}, 0);
    tlSec1.from("#track3", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},0);
    tlSec1.from("#row1", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},0);
    tlSec1.from("#row2", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1}, 0);
    tlSec1.from("#row3", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1}, 0);
    tlSec1.from("#row4", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1}, 0);
    
    
    
    
    //Section 2
    
    
    
    
    
    
    //PageEnterTween 
    
     new ScrollMagic.Scene({
        
        triggerHook: 0,
        triggerElement: '.section1',
        reverse: true
    })
    .addIndicators()          
    .addTo(controller)
    .on('enter', function () {
        console.log("section 1 Enter");
    });
    
    
    new ScrollMagic.Scene({
        
        triggerHook: 'onLeave',
        triggerElement: '.section1',
        reverse: true
    })
    .on('leave', function () {
        console.log("section 1 leave");
    })
    
    
    new ScrollMagic.Scene({
        triggerElement: '.section2', 
        triggerHook: 0,
        reverse: true
    })
    
    .addIndicators()          
    .addTo(controller)
    .on('enter', function () {
        console.log("section 2 Enter");
        
    }); 
    
    // var section1 = new ScrollMagic.Scene({
    //     triggerElement: '.section3', 
    //     triggerHook: 0,
    //     reverse: true
    // })
    // .addIndicators()          
    // .addTo(controller)
    // .on('enter', function () {
    //     console.log("section 3 Enter");
        
    // }); 
    
    })(jQuery);
    