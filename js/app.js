$(document).ready(function(){
	//to add using the plus sign
	$('.fa-plus-circle').on('click', function(event){
		event.preventDefault();
		//adds the users value (item) to list 
		var item = $('#search-bar').val();	
		$('.checked-items').append('<li class="items"><i class="fa fa-check-circle-o" aria-hidden="true"></i>' + item + '<i class="fa fa-times-circle-o" aria-hidden="true"></i></li>');
		// clears search bar 
		$('#search-bar').val('');
	});
	//to add using enter
	$('.text-center').submit(function(event){
		event.preventDefault();
		var item = $('#search-bar').val();	
		$('.checked-items').append('<li class="items"><i class="fa fa-check-circle-o" aria-hidden="true"></i>' + item + '<i class="fa fa-times-circle-o" aria-hidden="true"></i></li>');
		$('#search-bar').val('');
	});
	//moves items from list to cart using the check button
	$('.col-md-6').on('click','.fa-check-circle-o', function(){
		//"this=fa-check-cricle-o" "parent is the li class "items""
		var thing = $(this).parent('li');
		//moves item to cart
		thing.appendTo('.done-items');
		//removes X from the appened item.(still having problems)
		//$('.done-items .items').children().removeClass('fa-times-circle-o');
	});
	//deletes items when X is clicked
	$('.col-md-6').on('click', '.fa-times-circle-o', function(){
		var thing = $(this).parent('li');
		thing.remove();
	});
	//attempt to have check turn to X when mouse hovers over it.
	//$('.done-items .items .fa-check-circle-o').mouseover(function(){
	//	$('.done-items .items .fa-check-circle-o').hide();
	//	$('.done-items .items').children().wrap('<i id="done-item" class="fa fa-times-circle-o" aria-hidden="true"></i>');
	//});
});