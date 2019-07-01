

/*-----прокрутка ссылок---------*/

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').click(function(){

    // var target = $(this).attr('href');

    // $('html, body').animate({scrollTop: $(target).offset().top-150}, 500);
    // return false;

        $(".nav-link").click(function () {
            $(".nav-link").removeClass('current');
        })
        $(this).addClass('current');

        // var target = this.hash,
        //     menu = target;
        // $target = $(target);
        // $('html, body').stop().animate({
        //     'scrollTop': $(target).offset().top-150}, 500, 'swing', function () {
        //     window.location.hash = target;
        //     $(document).on("scroll", onScroll);
        // });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-150 <= scrollPos && refElement.position().top-120 + refElement.height() > scrollPos)  {
            currLink.addClass("current");
        }
        else{
            currLink.removeClass("current");
        }
    });
}



/*------------смена стиля----------------*/

var colorButtons  = document.querySelectorAll('.changeColor');
  		
  

  		for(var i=0; i<colorButtons.length; i++){

  			let buttonForChangeStyle= colorButtons[i];

  			console.log(buttonForChangeStyle);


  			buttonForChangeStyle.onclick =  function(){
  				let block = document.querySelectorAll('.backgroundClassic');

          let icons = document.querySelectorAll('.color-icons-item');

  				block.forEach(function(element){

  					element.style.background = buttonForChangeStyle.id;

  				});

          icons.forEach(function(element){

            element.style.color = buttonForChangeStyle.id;

          })


  			}
  		}


      /*----------сменя фото-----------------*/
      
      
      var image=document.getElementById("myPhoto");
      var imgs = ['images/photoCV.jpg','images/photoCV2.jpg', 'images/photoCV3.jpg', 'images/photoCV4.jpg', 'images/photoCV5.jpg']; 
      var i=0;

      image.onclick =  function(){

          
          image.src=imgs[i++];

          if(i>=imgs.length){
            i=0;
          }

        }

      

