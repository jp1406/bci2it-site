
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('[data-menu="industries-trigger"]');
  const parentLi = trigger ? trigger.closest('li') : null;
  if (trigger && parentLi) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      parentLi.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!parentLi.contains(e.target)) parentLi.classList.remove('open');
    });
  }
});
