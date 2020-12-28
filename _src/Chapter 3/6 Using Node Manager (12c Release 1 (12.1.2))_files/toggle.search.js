
$(document).ready(function() {
						   
//jQuery('.slideTogglebox').slideUp("fast");
jQuery('.slideTogglebox').css({ "overflow":'hidden' });
		
$('#slideToggle').toggle(function(){	
		
		///////  DOWN
		
		jQuery('.slideTogglebox').css({ "display": 'block' });
		//jQuery('.slideTogglebox').css({ "visibility": 'visible' });
		jQuery('.slideTogglebox').css({ "height": 'auto' });
		jQuery('.searchbar').css({ "height": 'auto' });
		jQuery('.searchbar').slideDown("fast");
		$('#searchimg').attr("src","assets/img-common/icn_search_x.png" );		

		


 },function(){
 	 	
		///////  UP
		jQuery('.searchbar').slideUp("fast");
 		$('#searchimg').attr("src", "assets/img-common/icn_search.png" );
		
}); // end toggle function
}); // end ready function