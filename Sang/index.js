document.addEventListener("DOMContentLoaded", function() {
  const images = [
    { id: 'img', transform: 'translate(-55vw, -16vw) scale(0.5)' },
    { id: 'img1', transform: 'translate(-30vw, 10vw) scale(0.5)' },
    { id: 'img2', transform: 'translate(16vw, 22vw) scale(0.5)' },
    { id: 'img3', transform: 'translate(-52vw, 18vw) scale(0.7)' },
    { id: 'img4', transform: 'translate(-5vw, 15vw) scale(0.5)' },
    { id: 'img5', transform: 'translate(27vw, -15vw) scale(0.5)' },
    { id: 'img6', transform: 'translate(30vw, -1vw) scale(0.6)' },
    { id: 'img7', transform: 'translate(1vw, -17vw) scale(0.5)' },
    { id: 'img8', transform: 'translate(-30vw, -11vw) scale(0.5)'},
    { id: 'img9', transform: 'translate(-50vw, -2vw) scale(0.5)' },
    { id: 'img10', transform: 'translate(8vw, -12vw) scale(0.7)' },
    { id: 'img11', transform: 'translate(27vw, 11vw) scale(0.5)' },
    { id: 'img12', transform: 'translate(-25vw, -11vw) scale(0.4)' },
    { id: 'img13', transform: 'translate(-30vw, 23vw) scale(0.4)' },
    { id: 'img14', transform: 'translate(-14vw, 0vw) scale(0.3)' },
    { id: 'img15', transform: 'translate(1vw, 4vw) scale(0.4)' }
  ];


  scrollHandler();

  function scrollHandler() {
    images.forEach((image, index) => {
      setTimeout(function() {
        animateImage(document.getElementById(image.id), image.transform);
      }, 100 * index); 
    });
  }

  window.addEventListener("scroll", scrollHandler);

  function animateImage(imgElement, transformation) {
    imgElement.style.transition = "transform 0.5s ease";
    imgElement.style.transform = transformation;
  }

  let imagesToEnlarge = document.querySelectorAll('.aa');

  imagesToEnlarge.forEach(function(image, index) {
    let isEnlarged = false;

    image.addEventListener('click', function() {
      if (!isEnlarged) {
        // 이미지를 클릭했을 때의 동작 - enlarge the image
        document.body.style.overflow = 'hidden'; 

        // Determine the scale factor based on the image index
        let scaleFactor = (index >= 6 && index <= 8) ? 0.2 : 0.3;

        this.style.width = 'auto';
        this.style.height = 'auto';
        this.style.position = 'fixed';
        this.style.top = '50%';
        this.style.left = '50%';
        this.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
        this.style.zIndex = '100';
        this.style.c

        // Add a class to the image when enlarged
        this.classList.add('enlarged');
      } else {
        // 이미지를 클릭했을 때의 동작 - remove the image
        this.remove();
      }

      // Toggle the state
      isEnlarged = !isEnlarged;
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let textElement = document.querySelector('.text');

  textElement.addEventListener('click', function() {
      location.reload();
  });
});