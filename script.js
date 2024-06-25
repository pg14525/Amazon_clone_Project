const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn =document.querySelector ('.control_prev');
const nxt_btn =document.querySelector ('.control_next');

let n =0;
// first image
function changeSlide(){

    // hide all the images 
    for(let i =0;i<imgs.length;i++){
    //    selects the images and set none
        imgs[i].style.display='none';
        // allows only one image to appear
    }
    imgs[n].style.display='block';
    // n=0 display first image 
}
changeSlide();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
n=imgs.length-1;
    }
    changeSlide();
})
nxt_btn.addEventListener('click',(e)=>{
    if(n < imgs.length-1){
        n++;
    }
    else{
n=0;
    }
    changeSlide();
});
// disables the scroll wheel
const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;
    });
}