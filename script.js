let count = 0;
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const slider = document.querySelector(".images");
nextBtn.addEventListener("click", ()=>{
    count += 400;
    if (count >= 1600) {
        count = 0;
    }
    slider.style.left = -count + "px";
})
prevBtn.addEventListener("click", ()=>{
    count += -400;
    if (count < 0) {
        count = 1200;
    }
    slider.style.left = -count + "px";
})

