const slideImgs=document.querySelectorAll('.slide-in');
//DOM
window.addEventListener('scroll',debounce(checkSlide));
//hook up function
function checkSlide(e)
{
  slideImgs.forEach(sliderImg=>
    {
        const slideInAt= (window.scrollY + window.innerHeight)-sliderImg.height/2;    //half of the iamge
        const imgBottom= sliderImg.offsetTop+sliderImg.height;    //bottom of the image
        const isHalfShown=slideInAt > sliderImg.offsetTop;     //is it at half of screen?
        const isNotScrollPast= window.scrollY< imgBottom;
        if(isHalfShown && isNotScrollPast)
        {
            sliderImg.classList.add('active');   //add .active class on image

        }else
        {
            sliderImg.classList.remove('active');    //remove .active class on image
            
        }
    });
};
//debounce function for count less scroll time
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }