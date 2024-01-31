


gsap.from("#navleft,#navright",{
    opacity:0,
    stagger: 0.1,
    delay:.3,
    y:-30,
    duration:1,
    ease:Power2
})


gsap.from("#centertag_a",{
    opacity:0,
    delay:.8,
    y:-30,
    duration:1,
    ease:Power3
})



let t1=gsap.timeline();

t1.from(".kullu>h5, .kullu>h3, .kullu>p,.button",{
    opacity:0,
    delay:.5,
    stagger:.2,
    ease:Power2
})


gsap.from("#temple>img,#susimage",{
    y:-30,
    duration:2,
    ease:Power3
})



