//SWIPER SLIDer;
new Swiper('.image-slider', {
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
        crossFade: true,
    },
});



//FOR LEFT MENU (2nd variant);

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





function doFade() {
    const fadeInOut = document.querySelector("#feedback");
    const faderClass = "fadeout";
    if (fadeInOut.classList.contains(faderClass)) {
        fadeInOut.classList.remove(faderClass);
    } else {
        fadeInOut.classList.add(faderClass);
    }
}

//FADE EFFECT;
const fade = document.querySelector("#feedback");
const fadeStatus = "fadeout";
//ENABLING FADE FOR FEEDBACK; 
function FadeOn() {
    if (fade.classList.contains(fadeStatus)) {
        fade.classList.remove(fadeStatus);
    }
}
//SHUTTING DOWN FADE FOR FEEDBACK (ACTUALLY DOESN'T WORK, bc we have visibility: hidden); 
function FadeOff() {
    if (!(fade.classList.contains(fadeStatus))) {
        fade.classList.add(fadeStatus);
    }
}




//Validation of our feedback form;
const form = document.getElementById('form');
form.addEventListener('submit', formSend);
//func for options for sending a form;
async function formSend(e) {
    let error = formValidate(form);
    //Для виведення кстi помилок у формi, взаємодія з класом error;
    //document.getElementById("error").innerHTML = error;

    //if we have errors, we don't move;
    if (error > 0) {
        e.preventDefault();
    }
    //if we haven't eroors, we keep going;
    if (error === 0) {
        return true;
    }


}

//looking for errors in our form and return its amount;
function formValidate(form) {
    let error = 0;
    let freq = document.querySelectorAll('._req');

    for (let index = 0; index < freq.length; index++) {
        const input = freq[index];
        formRemoveError(input);

        if (input.classList.contains('_email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
                if (input.value === '') {
                    input.value = 'Поле обязательно для заполнения';
                }
                else {
                    input.value = 'Неверный формат email';
                }
            }
        } else if (input.classList.contains('_tel')) {
            if (telTest(input)) {
                formAddError(input);
                error++;
                if (input.value === '') {
                    input.value = 'Поле обязательно для заполнения';
                }
                else {
                    input.value = 'Неверный формат номера телефона';
                }
            }
        } else {
            if (input.value === 'Поле обязательно для заполнения') {
                formAddError(input);
                error++;
                input.value = 'Поле обязательно для заполнения';
            }
            if (input.value === '') {
                formAddError(input);
                error++;
                input.value = 'Поле обязательно для заполнения';
            }
        }
    }
    return error;
}

//works with errors;
function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

function emailTest(input) {
    //email format;
    const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
    return !res.test(input.value);
}

function telTest(input) {
    //const res = /^[0-9]+$/ //just a numbers;

    //different formats (the best way is just 10 numbers);
    const res = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return !res.test(input.value);
}