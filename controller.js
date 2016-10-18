flag_clickable = false;
$('#allow_click').click(function(event){
	event.preventDefault();
	$(".ucarea").removeClass('ucarea').addClass('carea');
})