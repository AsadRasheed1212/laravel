$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


  // first card work start
  $(document).ready(function(){

    $(document).on('click', '#mode', function(){
        if ( $(this).hasClass("light") ) {
          $(this).removeClass( "light" );
          $(this).addClass( "night" );
          $('body').css("background-color", "#FEE6C8");
          $('#main-color-header').css("color", "#2D3436");
          $('.left-side-card').css("background-color", "#545D7A");
          $('.container-card').css("background-color", "#EEEDF0").css("color", "#2D3436");
        }
        else if ( $(this).hasClass("night") ){
          $(this).removeClass( "night" );
          $(this).addClass( "light" );
          $('body').css("background-color", "#23395D");
          $('#main-color-header').css("color", "white");
          $('.left-side-card').css("background-color", "#EEEDF0");
          $('.container-card').css("background-color", "#00225D").css("color", "white");
        }
    });

    $(document).on('click', '.ribbon-color', function(){
      let color = $(this).data( "color");
      $('.ribbon').css("background-color", color);
      $('.symbol').css("color", color);
    });

    /*************************************************/
  	$(document).on('input', '#logo-color', function(){
  		let color = $('#logo-color').val();
    	$(".lenovo-brand").css("background-color", color);
  	});

    $(document).on('input', '#picture-bg-color', function(){
  		let color = $('#picture-bg-color').val();
    	$('.left-side-card').css("background-color", color);
    	$('.heading-card-title').css("color", color);
  	});

    $(document).on('input', '#info-bg-color', function(){
  		let color = $('#info-bg-color').val();
    	$(".container-card").css("background-color", color);
  	});

    $(document).on('input', '#info-badge-color', function(){
  		let color = $('#info-badge-color').val();
    	$(".badge-tag").css("background-color", color);
  	});

    $(document).on('input', '#button-add-color', function(){
  		let color = $('#button-add-color').val();
    	$(".heading-card-title-info").css("color", color);
    	$(".add-to-cart-button button").css("background-color", color);
  	});

    $(document).on('input', '#price-color', function(){
  		let color = $('#price-color').val();
    	$(".card-product-support i").css("color", color);
    	$(".amount").css("color", color);
  	});

});


  // first card work end