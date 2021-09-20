new Swiper ('.image-slider', {
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slideToClickedSlide: true,
    centeredSlides: true,
    
    //a11y: true,
    //keyboardControl: true,
    grabCursor: true,
    
    touchRatio: 1,
    freeMode: true,
    pagination: false,
    scrollContainer: false,
   // pagination: '.swiper-pagination',
    //paginationClickable: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    /*mousewheel: {
        sensitivity: 5,
        eventntsTarget: ".image-slider",
    },*/
    slidesPerView: 1,
    watchOverflow: true,
    initialSlide: 0,
    
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        diasbleOnInteraction: false,
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade:true,
    },


});

/*for ( let li of categories.querySelectorAll ('li')){
    let span = document.createElement('span');
    span.classList.add('show');
    li.prepend (span);
    span.append(span.nextSibling)
}
categories.onclick = function (event) {
    if (event.target.tagName != 'SPAN') return;
    //if (event.target.tagName == 'SPAN')
    let childCont = event.target.parentNode.querySelector('ul');
    if (!childCont) return;
    childCont.hidden=!childCont.hidden;
}*/




/*for (let li of categories.querySelectorAll("li")) {
    let span = document.createElement("span");
    span.classList.add("show");
    li.prepend(span);
    span.append(span.nextSibling);
}

categories.onclick = function (event) {
    if (event.target.tagName != "SPAN") return;
        let childrenList = event.target.parentNode.querySelector("ul");
    if (!childrenList) return;
    childrenList.hidden = !childrenList.hidden;

    if (childrenList.hidden) {
        event.target.classList.add("hide");
        event.target.classList.remove("show");
    } else {
        event.target.classList.add("show");
        event.target.classList.remove("hide");
    }
};
/*var i;
var ctg = document.getElementsByClassName("categories");
for (i = 0; i < ctg.length; i++) {
    ctg[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
    });
}*/




/*function fadeOUT() {
    var popup = document.getElementById("myPopup");
    popup.classList.add("");
}*/
 /*   function fadeOUT() {
        var popup = document.getElementById("myPopup");
        popup.classList.add("hide");
    }*/


 /*   function fadeIn() {
        var div = document.getElementById("myPopup"); 
        div.style.display = 'block'; 
        div.classList.add("show");
      }
      */

function fadeIN() {
        var div= document.getElementById("Popup");  
        div.classList.add("show");
}
function fadeOUT(){
        var div = document.getElementById("Popup"); 
        div.classList.add("hide");
        div.style.display = 'none'; 
}
