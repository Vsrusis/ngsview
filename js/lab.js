	$(".box_mnu .panel-heading").each(function(){
			var ph = $(this).height() + 3;
			var pdt = $(this).find(".dropdown-toggle");
			pdt.height(ph);
	});
	$(".till_item .tc").each(function(){
		var parh = $(this).parent().height();
		$(this).height(parh);
	});
 