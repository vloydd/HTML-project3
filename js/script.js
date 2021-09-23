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

/*FOR LEFT MENU (2nd variant)*/
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




/*var a=document.getElementsByClassName("fade-in-out").addEventListener("click", doFade);
var dof=document.getElementById("fadeInOut").addEventListener("click", doFade);
var c=document.getElementById("fadeIn").addEventListener("click", FadeOn);
var d=document.getElementById("fadeOut").addEventListener("click", FadeOff);
var e=document.getElementById("fadeOut2").addEventListener("click", FadeOff);
*/

function doFade() {
    const fadeInOut = document.querySelector("#fade");
    const faderClass = "fadeout";
    if (fadeInOut.classList.contains(faderClass)) {
        fadeInOut.classList.remove(faderClass);
    } else {
        fadeInOut.classList.add(faderClass);
    }
}

function FadeOff() {
    const fadeIn = document.querySelector("#fade");
    const faderoutcl = "fadeout";
    if (!(fadeIn.classList.contains(faderoutcl))) {
        fadeIn.classList.add(faderoutcl);
    }
}

function FadeOn() {
    const fadeInOut = document.querySelector("#fade");
    const faderClass = "fadeout";
    if (fadeInOut.classList.contains(faderClass)) {
        fadeInOut.classList.remove(faderClass);
    }
}


/*function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {    
        alert('Введите корректный e-mail');
        return false;
    }
}
const validname = document.getElementById('name')
const validphone = document.getElementById('phone')
const validemail = document.getElementById('email')
const validerror = document.getElementById('error')
form.addEventListener('submit', (e) => {
    let messages = []
    if (validname.value == '' || validname.value == null) {
        message.push('Поле обязательно для заполнения')
    }
    if (messages.length > 0) {
        e.preventDefault()
        validerror.innerText = messages.join(', ')
    }
})*/

const form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e) {

    //e.preventDefault();

    let error = formValidate(form);
    document.getElementById("error").innerHTML = error;
    if (error > 0) {
        e.preventDefault();
    }
    if (error === 0) {
        //let response = await fetch('sendmail.php', { method: 'get' });
        //return true;
        //break;
        e.stopImmediatePropagation();
        return true;
    }

    //let formData = new FormData(form);

}

function formValidate(form) {
    let error = 0;
    let freq = document.querySelectorAll('._req');

    for (let index = 0; index < freq.length; index++) {
        const input = freq[index];
        formRemoveError(input);

        if (input.classList.contains('_email')) {
            if (emailTest(input)) {
                formAddError(input);
                input.value = 'Неверный формат email';
                error++;
            }
        } else if (input.classList.contains('_tel')) {
            if (telTest(input)) {
                formAddError(input);
                input.value = 'Неверный формат номера телефона';
                error++;
            }
        } else {
            if (input.value === 'Поле обязательно для заполнения') {
                formAddError(input);
                input.value = 'Поле обязательно для заполнения';
                error++;
            }
            if (input.value === '') {
                formAddError(input);
                input.value = 'Поле обязательно для заполнения';
                error++;
            }
            /*if (input.value === 'Поле обязательно для заполнения') {
                formAddError(input);
                input.value = 'Поле обязательно для заполнения';
                error++;
            }*/
        }
    }
    return error;
}

function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

function emailTest(input) {
    const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
    return !res.test(input.value);
}

function telTest(input) {
    //const res = /^[0-9]+$/ //just a numbers;
    const res = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return !res.test(input.value);
    //return !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(input.value);
}