<!-- HTML top code goes here -->

<?

// From processing takes place here. message displayed here too
require('form/form.class.php');
$form = new Form();
$form->processForm(

	'womenville.com' // Put you mail domain here
	,
	'Pugs Blog' // Put your site name / form name here
	,
	'kristinmyers@outlook.com' // Where will the form notification be sent?
	,
	'noreply@pugsblog.com' // This what the form FROM: address wil be, if the form submissions doesn't contain an email field

);


?>

<!-- HTML bottom code goes here -->
