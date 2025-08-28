document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.getElementById('navToggle');
  const links=document.getElementById('navLinks');
  if(toggle && links){
    toggle.addEventListener('click',()=>links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
  }
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const id=a.getAttribute('href'); if(id.length>1){ e.preventDefault(); document.querySelector(id)?.scrollIntoView({behavior:'smooth'});}
  }));
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('in-view'); io.unobserve(entry.target);} });
  },{threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const el=document.getElementById('typewriter');
  if(el){
    const roles=['Desarrollador Full-Stack','Frontend con React / Next.js','Backend con Spring Boot','Amante de las UIs con SCSS ✨', 'Manejo de Inteligencia Artificial con Openai',
      'Base de datos con MongoDB/Atlas y MySQL'
    ];
    let i=0,j=0,deleting=false;
    const tick=()=>{
      const word=roles[i];
      if(!deleting){ el.textContent=word.slice(0,j++); if(j>word.length){ deleting=true; setTimeout(tick,1200); return; } }
      else { el.textContent=word.slice(0,j--); if(j===0){ deleting=false; i=(i+1)%roles.length; } }
      setTimeout(tick,deleting?40:70);
    };
    tick();
  }
});