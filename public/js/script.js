//action="http://designosource.us7.list-manage.com/subscribe/post?u=a8c08f548f562436553aeb031&amp;id=ce92d01b4f"
$(document).ready( function () 
{
	function validate()
	{
		var input = $("#content form input#mce-EMAIL").val();
		var errors = true;
		var feedback;

		var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   		var validEmail = (pattern.test(input));

		if(input.length === 0)
		{
			feedback = "<p style='display: none;'>Vergeet je email adres niet!</p>";
			$("#feedback").append(feedback);
			$("#feedback p").slideDown();

			errors = true;
		}
		else
		{
			if(validEmail === false)
			{
				feedback = "<p style='display: none;'>Dit is geen correct email adres!</p>";
				$("#feedback").append(feedback);
				$("#feedback p").slideDown();

				errors = true;
			}
			else
			{
				errors = false;
			}
		}

		return errors;		
	}

	$("#content form input#mc-embedded-subscribe").on("click", function(e)
	{
		$("#feedback p").slideUp("normal", function() { $(this).remove(); } );
			
		if(validate() === false)
		{
			formData = {
			        u: "a8c08f548f562436553aeb031",
			        id: "ce92d01b4f"
			    };

			    $.ajax({
			        url: "http://designosource.us7.list-manage.com/subscribe/post",
			        type: "POST",
			        crossDomain: true,
			        contentType: 'application/json',
			        data: formData,
			        dataType: "json",
			        success: function(data) 
			        {
			            alert("ok");
			        },
			        error: function() 
			        {
			           alert("not ok");
			        }
			    });
			
			feedback = "<p style='display: none;'>We houden je op de hoogte!</p>";
			$("#feedback").append(feedback);
			$("#feedback p").slideDown();

			$("#content form input#mce-EMAIL").val("");
		}

		e.preventDefault();
	});
});