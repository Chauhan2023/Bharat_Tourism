const video=document.querySelector(".indiavideo>video");

const button=document.querySelector("#indiatext>p");

const mobile_click=document.querySelector("#indiatext>h4")

button.addEventListener('mouseenter',function(){
    video.style.opacity=1;
    video.autoplay=true;
    video.play();
})

button.addEventListener('mouseleave',function(){
    video.style.opacity=0;
    video.pause();
    video.currentTime=0;
})

mobile_click.addEventListener('touchstart', function(){
    video.style.opacity=1;
    video.autoplay=true;
    video.play();
});

mobile_click.addEventListener('touchend', function(){
    video.style.opacity=0;
    video.pause();
    video.currentTime=0;
});





const slide=document.querySelectorAll(".carouselimg");

for (let index = 0; index < slide.length; index++) {
    slide[index].style.left= index * 100 + "%";
    
}


// let count=0;
// const button_left=document.querySelector(".icons-l");
// const button_right=document.querySelector(".icons-r");

// button-left.addEventListener("click",function(){
//     if (count>0) {
//         for (let index =0; index < slide.length; index++) {
//             slide[index].style.left=-count * 100 + "%";
            
//         }
//         count--;
//     }
// })

// button-right.addEventListener("click",function(){
//     if (count<slide.length) {
//         for (let index = 0; index < slide.length; index++) {
//             slide[index].style.left=count * 100 + "%";
            
//         }
//         count++;
//     }
   
// })

let count = 0;
const slides = document.querySelectorAll(".carouselimg");
const button_left = document.querySelector(".icons-l");
const button_right = document.querySelector(".icons-r");

button_left.addEventListener("click", function () {
    if (count > 0) {
        count--;
        for (let index = 0; index < slides.length; index++) {
            slides[index].style.transform = `translateX(-${count*100}%)`;
        }
    }
});

button_right.addEventListener("click", function () {
    if (count < slides.length - 1) {
        count++;
        for (let index = 0; index < slides.length; index++) {
            slides[index].style.transform=`translateX(-${count*100}%)`
        }
    }
});



setInterval(function(){
    if (count < slides.length-1) {
        count++;
        for (let index = 0; index < slides.length; index++) {
            slides[index].style.transform=`translateX(-${count*100}%)`
        }
    }
    else{
        count=-1;
    }
},2000)