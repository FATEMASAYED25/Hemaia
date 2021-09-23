const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);

        } else {
            count.innerText = target;
        }
    }
    updateCount();
});


//services pages toggling content 
/*
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");
const content5 = document.getElementById("content5");
const hello = document.getElementById("hello");

one.onclick = function () {
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    hello.style.display = "none";
}



two.onclick = function () {
    content2.style.display = "block";
    content1.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    hello.style.display = "none";
}
three.onclick = function () {
    content3.style.display = "block";
    content1.style.display = "none";
    content2.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
    hello.style.display = "none";
}
four.onclick = function () {
    content4.style.display = "block";
    content1.style.display = "none";
    content3.style.display = "none";
    content2.style.display = "none";
    content5.style.display = "none";
    hello.style.display = "none";
}
five.onclick = function () {
    content5.style.display = "block";
    content1.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content2.style.display = "none";
    hello.style.display = "none";
}
*/


// creat pop up for our services boxes
const play=  document.getElementById("play");
const overlay=document.querySelector(".overlay")
const video=document.getElementById("video");
console.log(video);
 console.log(play);
play.addEventListener("click", (eo) => {
    overlay.classList.add("overlay-active")
    
});

 // When the user clicks anywhere outside of the modal, close it

 overlay.addEventListener("click", (eo) => {
    overlay.classList.remove("overlay-active")
    
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  });