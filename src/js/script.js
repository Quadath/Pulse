 $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        prevArrow:  '<button type="button" class="slick-prev"> <img src="../icons/chevron-left.png"> </button>',
        nextArrow:  '<button type="button" class="slick-next"> <img src="../icons/chevron-right.png"> </button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            }]
      });  
  }); 

 