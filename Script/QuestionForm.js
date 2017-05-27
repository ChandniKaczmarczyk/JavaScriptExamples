var Questions=['What is the result of 5+5?' ,'What is the result of (5*5)+10', "What is the result of 10+10?"];
var Answers =['10','35','20'];

function StartQuize()
{
	var score=0;

	for(var i=0;i<Questions.length;i++)
	{
		var Ans=prompt(Questions[i],'');
		
		if(Ans.toLowerCase()==Answers[i])
		{
			alert("Currect...!");
			score++;
		}
		else
		{
			alert("Wrong Answer. The correct answer is : "+Answers[i]);
		}

	}

	document.getElementById('divquestionresult').innerHTML="Your score is " +score;
}