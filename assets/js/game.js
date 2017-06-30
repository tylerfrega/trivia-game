
var questions = [

	{
		question: 'this is a question',
		answerOne: 'turds',
		answerTwo: 'dogs',
		answerThree: 'blogs'

	},

	{
		question: 'this is another question 2',
		answerOne: 'poops',
		answerTwo: 'stogs',
		answerThree: 'gods'


	},

	{
		question: 'this is another question 3',
		answerOne: 'pogs',
		answerTwo: 'stogs',
		answerThree: 'gods'


	},

	{
		question: 'this is another question 4',
		answerOne: 'bloops',
		answerTwo: 'stogs',
		answerThree: 'gods'


	},

	{
		question: 'this is a question 5',
		answerOne: 'turds',
		answerTwo: 'dogs',
		answerThree: 'blogs'

	},

	{
		question: 'this is another question 6',
		answerOne: 'poops',
		answerTwo: 'stogs',
		answerThree: 'gods'


	},

	{
		question: 'this is another question 7',
		answerOne: 'pogs',
		answerTwo: 'stogs',
		answerThree: 'gods'


	},

	{
		question: 'this is another question 8',
		answerOne: 'bloops',
		answerTwo: 'stogs',
		answerThree: 'gods'


	},

	{
		question: 'this is another question 9',
		answerOne: 'pogs',
		answerTwo: 'stogs',
		answerThree: 'gods'


	},

	{
		question: 'this is another question 10',
		answerOne: 'bloops',
		answerTwo: 'stogs',
		answerThree: 'gods'


	}

];


var questionCount = 0;
var clock;
var counter = 30;
var correctAnswers = 0;
var wrongAnswers = 0;
var currentQuestion = questions[questionCount];
var rightAnswers = ['blogs', 'stogs','gods', 'stogs', 'blogs', 'stogs','gods', 'stogs', 'gods', 'stogs' ];
var currentAnswer = rightAnswers[questionCount];
var selectedAnswer;


//displays current question from question array
function displayQuestion(){

	endOfGameCheck();
	currentQuestion = questions[questionCount];
	counter = 30;

	$('#time').show();
	$('#wrong').hide();
	$('#question').show();
	$('#answerOne').show();
	$('#answerTwo').show();
	$('#answerThree').show();
		
	$('#question').html(currentQuestion.question);
	$('#answerOne').html(currentQuestion.answerOne);
	$('#answerTwo').html(currentQuestion.answerTwo);
	$('#answerThree').html(currentQuestion.answerThree);
	
	questionTimer();
	
};



function nextQuestion(){
	
	questionCount = (questionCount + 1);
	displayQuestion();
};




//displays page for 5 seconds if user guesses the wrong answer
function displayWrongAnswerPage(){

	$('#time').hide();
	$('#question').hide();
	$('#answerOne').hide();
	$('#answerTwo').hide();
	$('#answerThree').hide();
	$('#wrong').show();
	$('#wrong').html('you got it wrong! looser');
	setTimeout(nextQuestion, 5000);
	
}

function displayRightAnswerPage(){

	$('#time').hide();
	$('#question').hide();
	$('#answerOne').hide();
	$('#answerTwo').hide();
	$('#answerThree').hide();
	$('#wrong').show();
	$('#wrong').html('you got it Right! Winner');
	setTimeout(nextQuestion, 5000);
	
}

function displayEndOfGame(){
	$('#time').hide();
	$('#question').hide();
	$('#answerOne').hide();
	$('#answerTwo').hide();
	$('#answerThree').hide();

	$('body').html('thats the end of the game bitch! you got ' + correctAnswers + ' right and ' + wrongAnswers + ' wrong');

}

function endOfGameCheck() {
	if(questionCount >= 10){
		displayEndOfGame();
	}else{
		return;
	}
}


function questionTimer(){
	clock = setInterval(countDown, 1000)

	function countDown(){
		if(counter === 0){
			clearInterval(clock);
			displayWrongAnswerPage();
		}

		if(counter > 0){
			counter--;
		}
		$('#time').html(counter);
	}
}



$('body').on('click','.answer', function(event){
	selectedAnswer = $(this).text();

	if(selectedAnswer === currentAnswer){
		console.log('its right');
		correctAnswers = (correctAnswers + 1);
		clearInterval(clock);
		displayRightAnswerPage();
	}else{
		wrongAnswers = (wrongAnswers + 1);
		clearInterval(clock);
		displayWrongAnswerPage();
	}
	
	
	

});


