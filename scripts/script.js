  /*Carousel*/
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-track a');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;
  const visible = 4;
  const total = items.length;

  nextBtn.addEventListener('click', () => {
    if (index < total - visible) index++;
    update();
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) index--;
    update();
  });

  function update() {
    const offset = -(index * (100 / visible));
    track.style.transform = `translateX(${offset}%)`;
  }


  