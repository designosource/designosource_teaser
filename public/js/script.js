$('form').ajaxChimp({
    callback: callbackChimp
});

function callbackChimp (resp) {
    var feedback = "";

    if (resp.result === 'success') {
        feedback = "Bedankt voor je inschrijving! Je ontvangt zo dadelijk een bevestigingsmail";
    }
    else {
    	feedback = resp.msg;

    	switch(resp.msg) {
    		case '0 - Please enter a value':
    			feedback = "Gelieve een e-mailadres in te vullen";
    		break;

    		case '0 - An email address must contain a single @':
    			feedback = "Een e-mailadres moet een @ teken bevatten";
    		break;
    	}
    }

    $('#feedback').fadeOut(function(){
        $('#feedback').fadeIn().html(feedback);
    });
}