$('form').ajaxChimp({
    callback: callbackChimp
});

function callbackChimp (resp) {
    if (resp.result === 'success') {
        $('#feedback').html("Bedankt voor je inschrijving! Je ontvangt zo dadelijk een bevestigingsmail");
    }
    else {
    	var feedback = resp.msg;

    	switch(resp.msg) {
    		case '0 - Please enter a value':
    			feedback = "Gelieve een e-mailadres in te vullen";
    		break;

    		case '0 - An email address must contain a single @':
    			feedback = "Een e-mailadres moet een @ teken bevatten";
    		break;
    	}

    	$('#feedback').html(feedback);
    }
}