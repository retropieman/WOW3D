(function (window) {
  var box = document.querySelector('.cube');

  window.show = show;
  window.toggle = toggle;
  
  function show(side) {
    box.classList.remove('front', 'back', 'right', 'left', 'top', 'bottom');
    box.classList.add(side);
  };
  
  function toggle(property) {
    box.classList.toggle(property);
  } 
})(window);
