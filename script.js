function homepage(){
    gsap.set(".slidersm", {
        scale: 5,
    })
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
          
            scrub: 2
        }
    });
    tl.to(".vdodiv", {
        '--clip': "0%",
        ease: Power2,
    
    }, 'a')
    tl.to(".slidersm", {
        scale: 1,
        ease: Power2,
    
    }, 'a')
    tl.to(".slidersm", {
        scale: 1,
        ease: Power2,
    
    }, 'a')
    tl.to(".lft", {
        xPercent: -10,
        stagger: .03,
        ease: Power4
    
    }, 'b')
    tl.to(".rgt", {
        xPercent: 10,
        stagger: .03,
        ease: Power4
    
    }, 'b')
}
function realpageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
        trigger:".real",
        start:"top top",
        end:"bottom bottom",
        scrub:1
        },
        xPercent:-300,
        ease:Power4  
    })
}
function teamAnimation(){

    document.querySelectorAll(".listelem")
.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
       
      gsap.to(this.querySelector(".picture"),{opacity:1,x: gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),ease:Power4,duration:.5})
    }) 
    el.addEventListener("mouseleave",function(dets){
     gsap.to(this.querySelector(".picture"),{opacity:0,ease:Power4,duration:.5})   
    })
}) 
}
function para1Animation () {
    var cluter = ""
var para1 = document.querySelector(".para1").textContent.split("")
.forEach(function (e){
    if (e === " ") cluter += `<span>&nbsp;</span>`
    cluter += `<span>${e}</span>`
})

document.querySelector(".para1").innerHTML = cluter;
 console.log(para1);

 gsap.set(".para1 span",{
    opacity:.1
 })

 gsap.to(".para1 span",{
    scrollTrigger: {
        trigger: ".managerPart1",
        start: "top 70%",
        end: "bottom 100%",
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    ease: Power4,
    stagger:.3,
 })

}

function para2Animation () {
    var cluter = "";
document.querySelector(".para2").textContent.split("")
.forEach(function (e){
    if (e === " ") cluter += `<span>&nbsp;</span>`
    cluter += `<span >${e}</span>`
})

document.querySelector(".para2").innerHTML = cluter;

 gsap.set(".para2 span",{
    opacity:.1
 })

 gsap.to(".para2 span",{
    scrollTrigger: {
        trigger: ".managerPart2",
        start: "top 70%",
        end: "bottom 100%",
        scrub: 2,
        // markers:true,
    },
    opacity:1,
    ease: Power4,
    stagger:.3,
 })

}
function loco(){
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
}
function capsulsAnimation() { 
    gsap.to(".capsule2",{
        ease: Power4,
        marginTop:"0",
        rotate:"-16deg",
        scrollTrigger: {
            trigger: ".capusals",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 2,
            // markers:true,
        }
    
    })

}
function bodycolorChange(){
    document.querySelectorAll(".section").forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            end:"bottom 50%",
            onEnter:function(){
               document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color);
            }
        })
    })
}
bodycolorChange();
loco();
homepage();
realpageAnimation();
teamAnimation();
para1Animation();
para2Animation();
capsulesAnimation();

