$('form').ajaxChimp({
    callback: callbackChimp
});

function callbackChimp (resp) {
    var feedback = "";
    var input = $("input#mce-EMAIL").val();
    var domainError = input.split("@");
    var domainErrorPart = domainError[1];

    if (resp.result === 'success') {
        feedback = "<p class='succes'>Bedankt voor je inschrijving! Je ontvangt zo dadelijk een bevestigingsmail</p>";
    }
    else {
    	feedback = resp.msg;

    	switch(resp.msg) {
    		case '0 - Please enter a value':
    			feedback = "<p class='error'>Gelieve een e-mailadres in te vullen</p>";
    		break;

    		case '0 - An email address must contain a single @':
                feedback = "<p class='error'>Een e-mailadres moet een @ teken bevatten</p>";
            break;

            case '0 - The domain portion of the email address is invalid (the portion after the @: '+ domainErrorPart +')':
    			feedback = "<p class='error'>Dit is een ongeldig e-mailadres</p>";
    		break;
    	}
    }

    $('#feedback').fadeOut(function(){
        $('#feedback').fadeIn().html(feedback);
    });
}