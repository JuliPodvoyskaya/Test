let scrollElem = document.querySelector('button');

window.onscroll = function(){
    if (scrollY > 0) {
        scrollElem.style.opacity = "1";
    } else {
        scrollElem.style.opacity = "0";
    }
}

let timeOut;
scrollElem.addEventListener('click', function(){
    goUp() 
});
     
function goUp(){
let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
if(top > 0) {
   window.scrollBy(0,-100);
   timeOut = setTimeout('goUp()',5);
} else clearTimeout(timeOut);
}


