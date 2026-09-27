const buttons=document.querySelectorAll(".filters button");
const photos=document.querySelectorAll(".photo");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
const close=document.getElementById("close");

buttons.forEach(button=>{
  button.addEventListener("click",()=>{
    buttons.forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
    const filter=button.dataset.filter;
    photos.forEach(photo=>{
      photo.style.display=(filter==="all"||photo.dataset.category===filter)?"block":"none";
    });
  });
});

photos.forEach(photo=>{
  photo.addEventListener("click",()=>{
    lightboxImg.src=photo.querySelector("img").src;
    lightboxImg.alt=photo.querySelector("img").alt;
    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden","false");
  });
});

function hideLightbox(){
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden","true");
}
close.addEventListener("click",hideLightbox);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)hideLightbox()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")hideLightbox()});
