function init(){
	//to add using the plus sign
	function addItem(event){
		event.preventDefault();
		event.stopImmediatePropagation();
		//adds the users value (item) to list 
		var item = $('#search-bar').val();	
		$('.checked-items').append('<li class="items"><i class="done-item fa fa-check-circle-o" aria-hidden="true"></i> ' + item + ' <i class="fa fa-times-circle-o" aria-hidden="true"></i></li>');
		// clears search bar 
		$('#search-bar').val('');
	}

	$('.fa-plus-circle').on('click', function(event){
		//prevents empty entry
		stopEmpty();
	});
	//to add using enter
	$('.text-center').submit(function(event){
		//prevents empty entry
		stopEmpty();
	 	//addItem(event);
	});
	//moves items from list to cart using the check button
	$('.col-md-6').on('click','.fa-check-circle-o', function(){
		//"this=fa-check-cricle-o" "parent is the li class "items""
		var thing = $(this).parent('li');
		//moves item to cart
		thing.appendTo('.done-items');
		//removes X from the appened item.(still having problems)
		$('.done-items .items').children().removeClass('fa-times-circle-o');
		init();
	});
	//deletes items when X is clicked
	$('.col-md-6').on('click', '.fa-times-circle-o', function(){
		var thing = $(this).parent('li');
		thing.remove();
	});
	//attempt to have check turn to X when mouse hovers over it.
	$('.cart-items .done-item').on('mouseleave',function(){
		$(this).removeClass('fa-times-circle-o');
		$(this).addClass('fa-check-circle-o');
	})
	$('.cart-items .done-item').on('mouseover',function(){
		console.log('1234')
		if($(this).hasClass('fa-check-circle-o')){
			$(this).removeClass('fa-check-circle-o');
			$(this).addClass('fa-times-circle-o');
		}
		else{
			
		}
		//if($(this))
		//$(this).hide();
		//$(this).children().wrap('<i id="done-item" class="fa fa-times-circle-o" aria-hidden="true"></i>');
	});
}
//prevent empty entry
function stopEmpty(){
	if (!$('#search-bar').val()){
			event.preventDefault();
		} else{
			addItem(event);
		}
}
$(document).ready(function(){
	init();	
});
