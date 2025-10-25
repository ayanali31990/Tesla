
var tl = gsap.timeline()

tl.from(".navbar h3",{
    y:-30,
    duration:0.5,
    delay:1,
    opacity:0,
    scrub:3
})

tl.from("#img",{
    x:-150,
    duration:0.4,
    stagger:0.2,
    opacity:0
})

tl.from(".navbarEnd i",{
    x:150,
    duration:0.5,
    stagger:0.2,
    opacity:0
})







