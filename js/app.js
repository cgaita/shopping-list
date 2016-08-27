$(document).ready(function(){
	$('.fa-plus-circle').on('click', function(event){
		event.preventDefault();
		var item = $('#search-bar').val();	
		$('.checked-items').append('<li class="items"><i class="fa fa-check-circle-o" aria-hidden="true"></i>' + item + '<i class="fa fa-times-circle-o" aria-hidden="true"></i></li>');
		$('#search-bar').val('');
	});
	$('.text-center').submit(function(event){
		event.preventDefault();
		var item = $('#search-bar').val();	
		$('.checked-items').append('<li class="items"><i class="fa fa-check-circle-o" aria-hidden="true"></i>' + item + '<i class="fa fa-times-circle-o" aria-hidden="true"></i></li>');
		$('#search-bar').val('');
	});
	$('.col-md-6').on('click','.fa-check-circle-o', function(){
		var thing = $(this).parent('li');
		thing.appendTo('.done-items');
		$('.done-items .items').children().removeClass('fa-times-circle-o');
	});
	$('.col-md-6').on('click', '.fa-times-circle-o', function(){
		var thing = $(this).parent('li');
		thing.remove();
	});
	$('.done-items .items .fa-check-circle-o').mouseover(function(){
		$('.done-items .items .fa-check-circle-o').hide();
		$('.done-items .items').children().wrap('<i class="fa fa-times-circle-o" aria-hidden="true"></i>');
	});
});