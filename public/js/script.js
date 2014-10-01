$('form').ajaxChimp({
    callback: callbackChimp
});

function callbackChimp (resp) {
    var feedback = "";
    var input = $("input#mce-EMAIL").val();
    var domainError = input.split("@");
    var domainErrorPart = domainError[1];

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

            case '0 - The domain portion of the email address is invalid (the portion after the @: '+ domainErrorPart +')':
    			feedback = "Dit is een ongeldig e-mailadres";
    		break;
    	}
    }

    $('#feedback').fadeOut(function(){
        $('#feedback').fadeIn().html(feedback);
    });
}