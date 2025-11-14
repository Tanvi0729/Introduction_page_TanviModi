document.addEventListener('DOMContentLoaded', function(){
  // reveal on scroll
  const sections = document.querySelectorAll('.section');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'none';
      }
    });
  },{threshold:0.12});
  sections.forEach(s=>io.observe(s));

  // active link based on URL path
  const links = document.querySelectorAll('.nav a');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(l=>{
    if(l.getAttribute('href') === path) l.classList.add('active');
  });

  // smooth link scrolling for same page anchors
  links.forEach(a=>{
    a.addEventListener('click', function(e){
      // allow normal navigation for multi-page; for same page anchors prevent
      const href = this.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
      }
    });
  });
});
