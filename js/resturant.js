

$(document).ready(function() {


// header sticky script
// ____________________________________

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >300)
  })

  });
  