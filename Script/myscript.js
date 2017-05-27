var fruits=['Banana','Mango','Apple','Watermelon'];
document.getElementById('divfruits').innerHTML=fruits;

function changebodyColor() {
	
var colorname=prompt("What is your favourite color Blue, Pink or White? Please enter here...",'');

	if(colorname.toLowerCase()=="blue")
	{ 
		document.body.style.backgroundColor="blue";
	}
	else if(colorname.toLowerCase()=="pink")
	{
	document.body.style.backgroundColor="pink";
	}
	else
	{
	document.body.style.backgroundColor="White";
	}

}