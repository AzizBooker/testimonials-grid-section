
gsap.defaults({
    ease:"ease-in-out",
    duration:0.6
})

let tl=gsap.timeline()

tl
.from('.testimonial_1',{
    delay:.5,
    opacity:0,
    x:-10
}
)
.from('.testimonial_2',{
    opacity:0,
    y:-10,
})
.from('.testimonial_3',{
    opacity:0,
    x:-10
})
.from('.testimonial_4',{
    opacity:0,
    y:10
})
.from('.testimonial_5',{
    opacity:0,
    y:20,
    
})