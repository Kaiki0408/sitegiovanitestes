function updatetab(id){
    $('.room_tab').fadeOut(600, function () {
		$('.room_tab').delay().removeClass('show_tab');
		});
    /* $('.lodgingLink.selectedTab').removeClass('selectedTab'); */
  
		$('#room_tab_' + id).delay(600).fadeIn(600, function () {
		$('#room_tab_' + id).addClass('show_tab');
		});
  	/* $('.lodgingLink').addClass('selectedTab') */

    
    return false;
}

