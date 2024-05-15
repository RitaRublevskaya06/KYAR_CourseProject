var lastResFind=""; 
var copy_page=""; 
function TrimStr(s) {
     s = s.replace( /^\s+/g, '');
  return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId) {
  var obj = window.document.getElementById(inputId);
  var textToFind;
 
  if (obj) {
    textToFind = TrimStr(obj.value);
  } else {
    alert("Введенная фраза не найдена");
    return;
  }
  if (textToFind == "") {
    alert("Вы ничего не ввели");
    return;
  }
 
  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Ничего не найдено, проверьте правильность ввода!");
 
  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;

 
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:#5355C6'>"+textToFind+"</a>"); 
  lastResFind=textToFind; 
  window.location = '#'+textToFind;
 }
 function CancelFind() {
    if (copy_page.length > 0) {
        document.body.innerHTML = copy_page;
        copy_page = "";
        lastResFind = "";
    }
}

function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
        if (pageYOffset > 100) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
});

const textWrapper = document.querySelector('h2');
textWrapper.style.opacity = '0';
textWrapper.style.transform = 'translateY(100%)';

setTimeout(() => {
  textWrapper.style.transition = 'opacity 1s, transform 1s';
  textWrapper.style.opacity = '1';
  textWrapper.style.transform = 'translateY(0)';
}, 500);

const textwrapper = document.querySelector('.text-wrapper-22');
textwrapper.style.opacity = '0';
textwrapper.style.transform = 'translatey(100%)';

setTimeout(() => {
  textwrapper.style.transition = 'opacity 1s, transform 1s';
  textwrapper.style.opacity = '1';
  textwrapper.style.transform = 'translatey(0)';
}, 500);

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target.className === 'modal') {
     event.target.style.display = "none";
  }
}
