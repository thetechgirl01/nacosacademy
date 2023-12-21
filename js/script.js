let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter-item .counter');

let body = document.body;

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(InputNumber => {
   InputNumber.oninput = () =>{
      if(InputNumber.value.length > InputNumber.maxLength) InputNumber.value = InputNumber.value.slice(0, InputNumber.maxLength);
   }
});

window.onscroll = () =>{
   profile.classList.remove('active');
   searchForm.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }

}

let toggleBtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

const enabelDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enabelDarkMode();
}

toggleBtn.onclick = (e) =>{
   let darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enabelDarkMode();
   }else{
      disableDarkMode();
   }
}


function showLoader(duration) {
const loader = document.getElementById("loader");
loader.style.display = "block";

setTimeout(() => {
loader.style.display = "none";
}, duration);
}

function loadStudentPage() {
const delayDuration = 1000; // 3 seconds delay


showLoader(delayDuration);
setTimeout(() => {
window.location.href = "../about.php";
}, delayDuration);
};

function showLoader(duration) {
const loader = document.getElementById("loader");
loader.style.display = "block";

setTimeout(() => {
 loader.style.display = "none";
 document.getElementById("content").classList.remove("hidden");
}, duration);
}

document.addEventListener("DOMContentLoaded", () => {
showLoader(1000);
});





function showLoader(duration) {
   const loader = document.getElementById("loader");
   loader.style.display = "block";

   setTimeout(() => {
     loader.style.display = "none";
     document.getElementById("content").classList.remove("hidden");
   }, duration);
 }

 document.addEventListener("DOMContentLoaded", () => {
   showLoader(15000);
 });




// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
        else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

const signInForm = document.getElementById('sign-in-form');
const registerForm = document.getElementById('register-form');
const signInLink = document.getElementById('sign-in-link');
const registerLink = document.getElementById('register-link');
let loginParag = document.querySelector('.login-parag');


signInLink.addEventListener('click', () => {
  signInForm.classList.remove('hidden');
  signInForm.classList.add('block');
  signInForm.classList.add('opacity-100');

  registerForm.classList.remove('block');
  registerForm.classList.add('hidden');
  registerForm.classList.remove('opacity-100');
});

registerLink.addEventListener('click', () => {
  registerForm.classList.remove('hidden');
  registerForm.classList.add('block');
  registerForm.classList.add('opacity-100');
  loginParag.innerHTML = "Register for LearnUNN"
  

   signInForm.classList.remove('block');
  signInForm.classList.add('hidden');
  signInForm.classList.remove('opacity-100');
});
let firstName = document.querySelectorAll('#first_name');
let lastName = document.querySelector('#last_name');
let pwd = document.querySelector('#pwd');
let statusParagraph = document.querySelector('#status_paragraph');
const signInBtn = document.querySelector('#signin-btn');



let getStartedBtn = document.querySelector('#get_started_btn');
getStartedBtn.addEventListener('click', function (e) {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;
  const Ripple = document.createElement('span');
  Ripple.classList.add('ripple');
  Ripple.style.left = x + 'px';
  Ripple.style.top = y + 'px';
  getStartedBtn.appendChild(Ripple);
  setTimeout(() => Ripple.remove(), 3000);
});


const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.add('translate-x-0');
});

navbarHideBtn.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.remove('translate-x-0');
})

