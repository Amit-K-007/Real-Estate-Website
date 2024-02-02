//  nav bar animation 
if(window.scrollY !== 0){
    document.querySelector("header").classList.add("active");
    document.querySelector("header").style.height = "60px";
}
window.addEventListener("scroll",(event)=>{
    if(window.scrollY !== 0){
        document.querySelector("header").classList.add("active");
        document.querySelector("header").style.height = "60px";
        document.querySelector("header > button").style.top = "13px";
    }
    else{
        document.querySelector("header").classList.remove("active");
        document.querySelector("header").style.height = "80px";
        document.querySelector("header > button").style.top = "22px";
    }
});

// favorite icon animation
const favIcons = document.querySelectorAll("#areas .home .favourite");
favIcons.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        icon.classList.toggle("material-symbols-outlined");
        icon.classList.toggle("material-icons");
    });
});

// video play button animation
window.addEventListener("scroll",()=>{
    const video = document.querySelector("#video").getBoundingClientRect();
    if(video.top<=640 && video.top>=-140){
        document.querySelector("#video div span").classList.add("glow");
    }
    else{
        document.querySelector("#video div span").classList.remove("glow");
    }
});

//Blue button modification
const blueButtons = document.querySelectorAll(".blue-button");
blueButtons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        btn.querySelector("button").click();
    });
});

// form submit button
document.querySelector("#hero form .submit").addEventListener("click",()=>{
    document.querySelector("#hero form .submit button").click();
})

// navbar button
const navButton = document.querySelector("header > button");
navButton.addEventListener("click",()=>{
    document.querySelector(".navbar > div").classList.toggle("activeNav");
});
