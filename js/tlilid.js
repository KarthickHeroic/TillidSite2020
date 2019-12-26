
$(document).ready(function(){

//Tween Animation
var tlNav = new TimelineMax();
var tlHome = new TimelineMax();
var tlWhoWeAre = new TimelineMax();
var tlWhatWeDo = new TimelineMax();
var tlSkill = new TimelineMax({
    onComplete: function(){
        mouseMove();
      }
    
});
var tlService = new TimelineMax();
var tlIndustries = new TimelineMax();
var tlCoreTechnologoies = new TimelineMax();
var tlContact = new TimelineMax();


var tlCloud = new TimelineMax();
var tlSharePoint = new TimelineMax();
var tlDynamics = new TimelineMax();
var tlBi = new TimelineMax();
var tlUi = new TimelineMax();
var tlleftMenu = new TimelineMax();
var getActiveID;  
var getCoreActiveId;
var caseIndex = 0;
var coreActivePage ="cloud";
$(document).ready(function() {
    homeIn();
  
});



 


    $(".nav-item").click(function(e){
        var id = '#'+$(this).attr('page-id');        
        
        if(!$(id).hasClass('active'))        {
            getActiveID = $("section").filter(".active").attr("id");
            $("#"+getActiveID).removeClass('active');
            eval(getActiveID + "Out" + "()"); 
            $(id).addClass('active');      
            eval($(this).attr('page-id') + "In" + "()");       
        }
     
    });
 

    $(".core-item").click(function(e){
        caseIndex=0;
        var id = '#'+$(this).attr('core-id');       
      //  var menuId= '#'+ $(this).attr('id')    
        if(!$(id).hasClass('active'))   
              {               
            getCoreActiveId = $(".coreContent").filter(".active").attr("id");           
            $("#"+getCoreActiveId).removeClass('active');
            eval(getCoreActiveId + "Out" + "()"); 
            $(id).addClass('active'); 
            eval($(this).attr('core-id') + "In" + "()");  
            coreActivePage =$(this).attr('core-id');            
        }
       
    });

    // Skill

    tlleftMenu.to("#mcloud",0.2,{css: {fontWeight:600,color:"rgba(0, 0, 0, 0.85)"}});  

    $('.coreLeft ul li').click(function(e) 
    { 
       var currentClickId =  $(this).attr('id');      

        $('.coreLeft ul li').each(function() {
           
            if($(this).hasClass('act'))   
            {
                if($(this).attr('id')!=currentClickId)
                {
                    $(this).removeClass('act');
                    $("#"+currentClickId).addClass('act');    
                    tlleftMenu.to("#"+currentClickId,0.2,{css: {fontSize: "1.2rem",fontWeight:600,color:"rgba(0, 0, 0, 0.85)"}});   
                    tlleftMenu.to("#"+$(this).attr('id'),0.2,{css: {fontSize: "1.3rem",fontWeight:100,color:"rgba(0, 0, 0, 0.5)"}});            
                }
                
            }
          });

    // tlleftMenu.to("#"+currentClickId,0.2,{css: {fontSize: "1.2rem",fontWeight:600}})

    });




//Tween


//Nav 

tlNav.from(".nav-item", 1, { autoAlpha: 0, y: -50 , stagger: 0.1, ease: "power4.out",duration:1},"+=1");

//home
tlHome.from("#from", 0.3, { autoAlpha: 0, y: -500 ,stagger: 0.05, ease: "power4.out",duration:0.1} ,"+=2")

.to("#from",0.3, {morphSVG:"#to", duration: 3,ease: "elastic.out(1, 0.3)"})
.to("#svgPathBlueRight",0.3, {morphSVG:"#svgPathRight", autoAlpha: 1})
.to("#svgPathRightFrom",0.3, {morphSVG:"#svgPathRight",ease: "power4.out", duration: 1})
.to("#svgPathBlueRight", {opacity:0},"-=2.5")
.fromTo("#illustrationImage" ,0.3, { scaleX:0, scaleY:0 }, { scaleX:1, scaleY:1,duration: 1.5, ease: "back.out(1.7)" })
.from(".maskBox", 0.65, { autoAlpha: 0, x:-50, yPercent: 100, ease: Back.easeOut })
.from(".content2", 0.65, { autoAlpha: 0, x:-50, ease:"power4.out" })
.from("#track1", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#track2", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#track3", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#row1", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#row2", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#row3", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#row4", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2");
tlHome.pause();


function homeIn() {
    $('#home').removeClass("d-none");
    tlHome.delay(2);
    tlHome.timeScale(1);
    tlHome.play();
}

function homeOut() {
    tlHome.timeScale(2);
    tlHome.reverse();
    setTimeout(
        function() 
        {
            $('#home').addClass("d-none");
        }, 1500);
}


//whoweare

tlWhoWeAre

.from("#whoimgebg", 0.4, {morphSVG:"#whoimgebgfrom", duration: 0.2},"+=2")
.fromTo("#whoimg" ,0.3, { scaleX:0, scaleY:0 }, { scaleX:1, scaleY:1,duration: 1.5, ease: "back.out(1.7)" })
// .from("#whoimg", 0.5, { autoAlpha: 0, ease:"power4.out"},3)
.from(".whoTitile",1,{opacity: 0,x:-150, ease:"power4.out"})
.from(".whoContent",1,{opacity: 0,x:-150, ease:"power4.out"})
.from("#track2-1", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#track2-2", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#track2-3", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#row2-1", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#row2-2", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#row2-3", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")

tlWhoWeAre.pause();


function whoweareIn() {
    $('#whoweare').removeClass("d-none");
    tlWhoWeAre.timeScale(1);
    tlWhoWeAre.play();
 
}

function whoweareOut() {
    tlWhoWeAre.timeScale(2);
    tlWhoWeAre.reverse();
    setTimeout(
        function() 
        {
            $('#whoweare').addClass("d-none");
        }, 1500);
}



//whatwedo

tlWhatWeDo

.from("#whatimgebg", 0.4, {morphSVG:"#whoimgebgfrom", duration: 0.2},"+=2")
.from("#whatimg", 0.65, { autoAlpha: 0, y:-50, ease:"power4.out" })
.from(".whatTitile",1,{opacity: 0,x:-150, ease:"power4.out"})
.from(".whatContent",1,{opacity: 0,x:-150, ease:"power4.out"})
.from("#track3-1", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#track3-2", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#track3-3", 0.2, { autoAlpha: 0, x: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#row3-1", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#row3-2", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2")
.from("#row3-3", 0.2, { autoAlpha: 0, y: -50 ,scaleX:1, scaleY:1, stagger: 0.03, ease: "power4.out",duration:0.1},"-=2");
tlWhatWeDo.pause();


function whatwedoIn() {
    $('#whatwedo').removeClass("d-none");
    tlWhatWeDo.delay(2);
    tlWhatWeDo.timeScale(1);
    tlWhatWeDo.play();
}

function whatwedoOut() {
    tlWhatWeDo.timeScale(2);
    tlWhatWeDo.reverse();
    setTimeout(
        function() 
        {
            $('#whatwedo').addClass("d-none");
        }, 1500);
}


  
const skillCount = document.querySelectorAll(".ulBox>ul").length;
const skillIndex = skillCount-1;
let isAnimating = false;
let count = 0;
var colorCount =1;
const duration = 1;
tlSkill
.from("#skills .bgContainer",1, { autoAlpha: 0, y:-500, ease:"power4.out" },"+=1")
.from("#skills .skillLeftContainer", 1, { autoAlpha: 0, y:+500, ease:"power4.out"})
.from("#skills .barDivided",1, { autoAlpha: 0, y:-500, ease:"power4.out"},"-=1")
.from("#skills .skillRightContainer",1, { autoAlpha: 0, y:-500, ease:"power4.out"},"-=1");


window.addEventListener("wheel", () => 
{

  heightf = $(".ulBox").height();
  heightBg = $(".bgSkill").height();
  const delta = Math.sign(event.deltaY);
  if(count==0 || count==skillCount-1)
      {
        isAnimating = false;
      }
    if(!isAnimating) 
    {
      if(delta > 0 && count < skillCount - 1) {
        var previousId = $(".title").eq(count).attr("id");
        var currentId = $(".title").eq(count+1).attr("id");
      //  var previousSkillId = $(".skillItems").eq(skillCount-count-1).attr("id");
        gsap.to("#"+previousId, {duration: duration, autoAlpha:0.2});
        gsap.to("#"+previousId+">h1", {css: {fontSize: "1.5rem"}});
        gsap.to("#"+currentId, {duration: duration, autoAlpha:1});
        gsap.to("#"+currentId+">h1", {css: {fontSize: "2rem"}});
       gsap.to(".bgContainer",{duration: duration, y: "-=" + heightBg})
        gsap.to(".titleContainer", {duration: duration, y: "-=" + 100, onComplete: () => isAnimating = false })
        gsap.to(".ulBox", {duration: duration, y: "+=" + heightf});
        console.log(count);
        
        gsap.to(".listBox",{className: '+=listBox borderColor'+(colorCount+1)});
        
  
        // var previousSkillId = $(".ulBox>ul").eq(skillIndex-count).attr("id"); 
        // console.log(previousSkillId);
        
        // gsap.fromTo("#"+previousSkillId,0.5, {y:0},{y:+heightf});
         count++;
         colorCount++;
         var currentSkillId = $(".ulBox>ul").eq(skillIndex-count).attr("id");   
          console.log(currentSkillId);           
          gsap.from("#"+currentSkillId+">li",0.5,{y:-heightf,stagger: {
            amount: 0.6, 
            
            from: "end"
          }});

      } 
      else if(delta < 0 && count > 0) 
      {
        var previousId = $(".title").eq(count).attr("id");
       var currentId = $(".title").eq(count-1).attr("id");
        gsap.to("#"+previousId, {duration: duration, autoAlpha:0.2})
        gsap.to("#"+previousId+">h1", {css: {fontSize: "1.5rem"}});
        gsap.to("#"+currentId, {duration: duration, autoAlpha:1});
        gsap.to("#"+currentId+">h1", {css: {fontSize: "2rem"}});
        gsap.to(".bgContainer",{duration: duration, y: "+=" + heightBg})
        gsap.to(".titleContainer", {duration: duration, y: "+=" + 100, onComplete: () => isAnimating = false });
        gsap.to(".ulBox", {duration: duration, y: "-=" + heightf});
        gsap.to(".listBox",{className: '+=listBox borderColor'+(colorCount-1)});
    //     var previousSkillId = $(".ulBox>ul").eq(skillIndex-count).attr("id"); 
    //     console.log(previousSkillId);
        
    //   //  gsap.fromTo("#"+previousSkillId,0.5, {y:0},{y:-heightf});
        count--;
        colorCount--;
          var currentSkillId = $(".ulBox>ul").eq(skillIndex-count).attr("id");   
          console.log(currentSkillId);           
          gsap.from("#"+currentSkillId+">li",0.5,{y:+heightf,stagger: 0.1});

      }   
      isAnimating = true;
    }
  });


  


  
// const skillCount = document.querySelectorAll(".title").length;
// const skillIndex = skillCount-1;
// let isAnimating = false;
// let count = 0;
// const duration = 1;
// tlSkill
// .from("#skills .bgContainer",1, { autoAlpha: 0, y:-500, ease:"power4.out" },"+=2")
// .from("#skills .skillLeftContainer", 1, { autoAlpha: 0, y:+500, ease:"power4.out"})
// .from("#skills .barDivided",1, { autoAlpha: 0, y:-500, ease:"power4.out"},"-=1")
// .from("#skills .skillRightContainer",1, { autoAlpha: 0, y:-500, ease:"power4.out"},"-=1");


// window.addEventListener("wheel", () => 
// {
//   heightof = $(".skillItems").offset();
//   heightf = $(".skillItems").height();
//   heightBg = $(".bgSkill").height();
//   const delta = Math.sign(event.deltaY);
//   if(count==0 || count==skillCount-1)
//       {
//         isAnimating = false;
//       }
//     if(!isAnimating) 
//     {
//       if(delta > 0 && count < skillCount - 1) {
//         var previousId = $(".title").eq(count).attr("id");
//         var currentId = $(".title").eq(count+1).attr("id");
//       //  var previousSkillId = $(".skillItems").eq(skillCount-count-1).attr("id");
//         gsap.to("#"+previousId, {duration: duration, autoAlpha:0.2});
//         gsap.to("#"+previousId+">h1", {css: {fontSize: "1.5rem"}});
//         gsap.to("#"+currentId, {duration: duration, autoAlpha:1});
//         gsap.to("#"+currentId+">h1", {css: {fontSize: "2rem"}});
//        gsap.to(".bgContainer",{duration: duration, y: "-=" + heightBg})
//         gsap.to(".titleContainer", {duration: duration, y: "-=" + 100, onComplete: () => isAnimating = false })
//         gsap.to(".skillRightContainer", {duration: duration, y: "+=" + heightf},3);
//         var previousSkillId = $(".skillItems").eq(skillCount-count-1).attr("id");
//         count++;
//         var currentSkillId = $(".skillItems").eq(skillIndex-count).attr("id");      
//         gsap.fromTo("#"+currentSkillId+">ul>li",0.5, {opacity:0,y:-50,stagger:0.5},{opacity:1,y:0,stagger:0.3});

//       } 
//       else if(delta < 0 && count > 0) 
//       {
//         var previousId = $(".title").eq(count).attr("id");
//        var currentId = $(".title").eq(count-1).attr("id");
//         gsap.to("#"+previousId, {duration: duration, autoAlpha:0.2})
//         gsap.to("#"+previousId+">h1", {css: {fontSize: "1.5rem"}});
//         gsap.to("#"+currentId, {duration: duration, autoAlpha:1});
//         gsap.to("#"+currentId+">h1", {css: {fontSize: "2rem"}});
//         gsap.to(".bgContainer",{duration: duration, y: "+=" + heightBg})
//         gsap.to(".titleContainer", {duration: duration, y: "+=" + 100, onComplete: () => isAnimating = false });
//         gsap.to(".skillRightContainer", {duration: duration, y: "-=" + heightf});
//         count--;
//         var currentSkillId = $(".skillItems").eq(skillIndex-count).attr("id");
//         gsap.fromTo("#"+currentSkillId+">ul>li",0.5, {opacity:0,y:+50,stagger:0.5},{opacity:1,y:0,stagger:0.3})
//       }   
//       isAnimating = true;
//     }
//   });



tlSkill.pause();


function skillsIn() {
    $('#skills').removeClass("d-none");
    tlSkill.delay(2);
    tlSkill.timeScale(1);
    tlSkill.play();
}

function skillsOut() {
    tlSkill.timeScale(2);
    tlSkill.reverse();
    setTimeout(
        function() 
        {
            $('#skills').addClass("d-none");
        }, 1500);
}

function mouseMove()
{

    var skill = $('.skillWrapper'),
    wrapScreenHeight =  $('#skills').height(),
    wrapHeight = skill.height(),
    listHeight = skill.find('.scrollWrapper').height();
    gsap.registerPlugin(CSSRulePlugin);
    var t = TweenMax.to("h6", 1,{rotation:360, paused:true})
    
    skill.on('mousemove', function(e) {
   
        dP = ((e.pageY / wrapHeight));
    t.progress(dP)
    TweenMax.to(skill, 10, {scrollTop: ((listHeight * dP) - wrapScreenHeight), ease: "power4.out"});
    });

    
}


tlService

.from("#serviceBg", 1, { autoAlpha: 0, y:-500, stagger:0.5 , ease:"power4.out" },"+=2")
.from(".serviceHeader",1, { autoAlpha: 0, x:500, stagger:0.5 , ease:"power4.out" },"-=0.5")
.fromTo(".boxService", 0.3, { scaleX:0, scaleY:0 }, { scaleX:1, scaleY:1,duration: 0.5,stagger:0.2, ease: "back.out(1.7)" },"-=0.5")
.from(".serviceTitle", 1, { autoAlpha: 0, y:+50, stagger:0.2 , ease:"power4.out" },"-=0.5")
.from(".serviceContent", 1, { autoAlpha: 0, stagger:0.2 , ease:"power4.out" },"-=2.5");

tlService.pause();


function servicesIn() {
    $('#services').removeClass("notActive");
    tlService.delay(2);
    tlService.timeScale(1);
    tlService.play();
}

function servicesOut() {  
    tlService.timeScale(4);
    tlService.reverse();
    setTimeout(
        function() 
        {
            $('#services').addClass("notActive");
        }, 1500);
   
}


tlIndustries

.from("#svgIndustries", 0.3, { scaleY:0, transformOrigin:"0% 50%" },"+2")
.from(".industriesHeader", 1, { x:50, autoAlpha:0})
.fromTo(".imgBox", 0.3, { autoAlpha:0, scaleX:2, scaleY:2 }, {autoAlpha:1, scaleX:1, scaleY:1,duration: 0.5,stagger:0.2, ease: "back.out(1.7)" },"+2")
.from(".titleIndustries",0.2,{autoAlpha: 0, y:+50,stagger:0.3},"-=1.5")
.from("#row4-1",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-2",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-3",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1)
.from("#row4-4",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-5",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-6",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1)
.from("#row4-7",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-8",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-9",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1)
.from("#row4-10",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-11",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-12",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1)
.from("#row4-13",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-14",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-15",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1)
.from("#row4-16",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-17",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-18",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1)
.from("#row4-19",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-20",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-21",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1)
.from("#row4-22",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-23",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-24",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1)
.from("#row4-25",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-26",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-27",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1)
.from("#row4-28",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1).from("#row4-29",0.3,{autoAlpha: 0,y:-10, stagger:0.2},1)



tlIndustries.pause();


function industriesIn() {
    $('#industries').removeClass("d-none");
    tlIndustries.delay(2);
    tlIndustries.timeScale(1);
    tlIndustries.play();
}

function industriesOut() {   
    tlIndustries.timeScale(4);
    tlIndustries.reverse();
    setTimeout(
        function() 
        {
            $('#industries').addClass("d-none");
        }, 1500);
  
   
}


tlCoreTechnologoies

.from("#core", 1, { autoAlpha: 0, y:-500, stagger:0.5 , ease:"power4.out" },"+=1.3");


tlCoreTechnologoies.pause();


function coreIn() {
    $('#core').removeClass("d-none");
    cloudIn();
    tlCoreTechnologoies.delay(2);
    tlCoreTechnologoies.timeScale(1);
    tlCoreTechnologoies.play();
}

function coreOut() {   
    tlCoreTechnologoies.timeScale(2);
    tlCoreTechnologoies.reverse();
    setTimeout(
        function() 
        {
            $('#core').addClass("d-none");
        }, 1500);
  
   
}

tlContact
.from("#svgContactBg", 1, { autoAlpha: 0, y:-500, ease:"power4.out" },"+=2")
.from("#svgContact", 0.3, { scaleY:0, transformOrigin:"0% 50%" })
.from(".titleContact",0.3,{x:-100, autoAlpha:0})
var SplitTextTitle = new SplitText(".titleCompany", {type:"words"});
gsap.registerPlugin(CSSRulePlugin);
tlContact.staggerFrom(SplitTextTitle.words, 0.5, {opacity:0}, 0.2)
.from(".address",0.3,{y:-50, autoAlpha:0})
.from(".mailId",0.3,{y:-50, autoAlpha:0})
.fromTo(".socialImg",0.3,{ scaleX:0, scaleY:0 }, { scaleX:1, scaleY:1,duration: 0.5,stagger:0.2, ease: "back.out(1.7)" })
.from("#row5-1",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-2",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-3",0.1,{autoAlpha: 0,y:-10, stagger:0})
.from("#row5-4",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-5",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-6",0.1,{autoAlpha: 0,y:-10, stagger:0})
//.from("#row5-7",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-8",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-9",0.1,{autoAlpha: 0,y:-10, stagger:0})
//.from("#row5-10",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-11",0.1,{autoAlpha: 0,y:-10, stagger:0})
.from("#row5-12",0.1,{autoAlpha: 0,y:-10, stagger:0})
.from("#row5-13",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-14",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-15",0.1,{autoAlpha: 0,y:-10, stagger:0})
.from("#row5-16",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-17",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-18",0.1,{autoAlpha: 0,y:-10, stagger:0})
.from("#row5-19",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-20",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-21",0.1,{autoAlpha: 0,y:-10, stagger:0})
.from("#row5-22",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-23",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-24",0.1,{autoAlpha: 0,y:-10, stagger:0})
.from("#row5-25",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-26",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-27",0.1,{autoAlpha: 0,y:-10, stagger:0})
.from("#row5-28",0.1,{autoAlpha: 0,y:-10, stagger:0}).from("#row5-29",0.1,{autoAlpha: 0,y:-10, stagger:0});
tlContact.pause();


function contactsIn() {
    $('#contacts').removeClass("d-none");
    tlContact.delay(2);
    tlContact.timeScale(1);
    tlContact.play();
}

function contactsOut() {   
    tlContact.timeScale(2);
    tlContact.reverse();
    setTimeout(
        function() 
        {
            $('#contacts').addClass("d-none");
        }, 1500);  
}

tlCloud.to(".cloudCore",1,{yPercent:+100});
tlCloud.pause();

function callLog(){
console.log("enter");
}

function cloudIn() {
    $(".cloudCore").css("z-index","1");  
    tlCloud.timeScale(4);
    tlCloud.play();
 
}

function cloudOut() {
    $(".cloudCore").css("z-index","0");  
    tlCloud.delay(2);
    tlCloud.timeScale(1);
    tlCloud.reverse();
}

tlSharePoint.to(".sharepointCore",1,{yPercent:+100},0);
tlSharePoint.pause();

function sharepointIn() {
    $(".sharepointCore").css("z-index","1");
    tlSharePoint.timeScale(4);
    tlSharePoint.play();
 
}

function sharepointOut() {
    $(".sharepointCore").css("z-index","0 !important");
    tlCloud.delay(2);
    tlSharePoint.timeScale(1);
    tlSharePoint.reverse();
}

tlDynamics.to(".dynamicsCore",1,{yPercent:+100},0);
tlDynamics.pause();

function dynamicsIn() {
    $(".dynamicsCore").css("z-index","1");
    tlDynamics.timeScale(4);
    tlDynamics.play();
 
}

function dynamicsOut() {
    $(".dynamicsCore").css("z-index",".0");
    tlCloud.delay(2);
    tlDynamics.timeScale(1);
    tlDynamics.reverse();
}


tlBi.to(".biCore",1,{yPercent:+100},0);
tlBi.pause();

function biIn() {
    $(".biCore").css("z-index","1");
    tlBi.timeScale(4);
    tlBi.play(); 
}

function biOut() {
    $(".biCore").css("z-index","0");
    tlCloud.delay(2);
    tlBi.timeScale(1);
    tlBi.reverse();
}


tlUi.to(".uiuxCore",1,{yPercent:+100},0);
tlUi.pause();

function uiuxIn() {
    $(".uiuxCore").css("z-index","1");
    tlUi.timeScale(4);
    tlUi.play();
}

function uiuxOut() {
    $(".uiuxCore").css("z-index","0");
    tlCloud.delay(2);
    tlUi.timeScale(1);
    tlUi.reverse();
}





});
