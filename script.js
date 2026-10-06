const preloader=document.getElementById('preloader');const menu=document.getElementById('menu');const nav=document.getElementById('nav');const form=document.getElementById('consultForm');const toast=document.getElementById('toast');
window.addEventListener('load',()=>setTimeout(()=>preloader.classList.add('hide'),450));
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
form?.addEventListener('submit',e=>{e.preventDefault();toast.classList.add('show');form.reset();setTimeout(()=>toast.classList.remove('show'),3200)});
