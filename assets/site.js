
document.addEventListener('DOMContentLoaded',()=>{
  const t=document.querySelector('[data-menu="industries-trigger"]');
  const p=t?t.closest('li'):null;
  if(t&&p){
    t.addEventListener('click',e=>{e.preventDefault();p.classList.toggle('open')});
    document.addEventListener('click',e=>{if(!p.contains(e.target))p.classList.remove('open')});
  }
});
