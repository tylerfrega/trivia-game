
var questions = [

	{
		question: 'What is House Starks Valyrian steel sword called?',
		answerOne: 'Ice',
		answerTwo: 'Snow',
		answerThree: 'Winter'

	},

	{
		question: 'Where are Jeor and Jorah Mormont from?',
		answerOne: 'River Run',
		answerTwo: 'Bear Island',
		answerThree: 'Essos'


	},

	{
		question: 'What is the name of Jon Snows Direwolf?',
		answerOne: 'Ghost',
		answerTwo: 'Grey Wind',
		answerThree: 'Nymeria'


	},

	{
		question: 'Which House fought alongside House Barathean during Roberts Rebelion?',
		answerOne: 'Tully',
		answerTwo: 'Lanister',
		answerThree: 'Targaryen'


	},

	{
		question: 'Who did Ned Stark replace as hand of the king?',
		answerOne: 'Little Finger',
		answerTwo: 'Sir Bariston Selmey',
		answerThree: 'Jon Arryn'

	},

	{
		question: 'Where is the Measters Citadel Located?',
		answerOne: 'Old Town',
		answerTwo: 'Harrenhall',
		answerThree: 'Mordor'


	},

	{
		question: 'Who Killed Areyes Targaryen?',
		answerOne: 'Robert Baratheon',
		answerTwo: 'Jamie Lanister',
		answerThree: 'Ned Stark'


	},

	{
		question: 'Whose House words are "Ours is the fury"?',
		answerOne: 'Tyrell',
		answerTwo: 'Baratheon',
		answerThree: 'Greyjoy'


	},

	{
		question: 'What is the name of the god known as "Lord of Light"?',
		answerOne: 'Azor Ahai',
		answerTwo: "R'hllor",
		answerThree: 'Voldemort'


	},

	{
		question: 'Who killed Rhaegar Targaryen',
		answerOne: 'Ned Stark',
		answerTwo: 'Jamie Lanister',
		answerThree:'Robert Baratheon' 


	}

];


var questionCount = 0;
var clock;
var counter = 30;
var correctAnswers = 0;
var wrongAnswers = 0;
var currentQuestion;
var rightAnswers = ['Ice', 'Bear Island','Ghost', 'Tully', 'Jon Arryn', 'Old Town','Jamie Lanister', 'Baratheon', "R'hllor", 'Robert Baratheon' ];
var currentAnswer;
var selectedAnswer;
var gifs = ['assets/images/1.gif', 'assets/images/2.gif', 'assets/images/3.gif', 
			'assets/images/4.gif', 'assets/images/5.gif', 'assets/images/6.gif', 
			'assets/images/7.gif', 'assets/images/8.gif', 'assets/images/9.gif', 
			'assets/images/10.gif'];


//displays current question from question array
function displayQuestion(){

	//endOfGameCheck();
	currentQuestion = questions[questionCount];
	currentAnswer = rightAnswers[questionCount];
	counter = 30;


	$('#startButton').hide();
	$('#startOver').hide();
	$('#gif').hide();
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
	
	if(questionCount >= 10){
		displayEndOfGame();
	}else{
	displayQuestion();
   }
};




//displays page for 5 seconds if user guesses the wrong answer
function displayWrongAnswerPage(){

	$('#time').hide();
	$('#question').hide();
	$('#answerOne').hide();
	$('#answerTwo').hide();
	$('#answerThree').hide();
	$('#wrong').show();
	$('#gif').show();
	$('#wrong').html('Incorrect! Shame Shame Shame');
	$('#gif').html('<img src="assets/images/shame.gif"/>')
	setTimeout(nextQuestion, 4000);
	
}

function displayRightAnswerPage(){

	currentGif = gifs[questionCount];

	$('#time').hide();
	$('#question').hide();
	$('#answerOne').hide();
	$('#answerTwo').hide();
	$('#answerThree').hide();
	$('#wrong').show();
	$('#wrong').html('Correct! You have brought honnor to your house');
	$('#gif').show().html('<img src = ' + currentGif + ' />')
	setTimeout(nextQuestion, 4000);
	
}

function displayEndOfGame(){
	
	$('#end').show().text('Thats the end of the game! you got ' + correctAnswers + ' right and ' + wrongAnswers + ' wrong');
	$('#time').hide();
	$('#question').hide();
	$('#answerOne').hide();
	$('#answerTwo').hide();
	$('#answerThree').hide();
	$('#gif').hide();
	$('#wrong').hide();
	$('#startOver').show().html('<button class= "btn-default">Start Over</button>');


	

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


function displayStartScreen(){
	$('#time').hide();
	$('#question').hide();
	$('#answerOne').hide();
	$('#answerTwo').hide();
	$('#answerThree').hide();

	$('#startButton').show();
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

$('#startButton').on('click', function(){
	displayQuestion();
});


$('#startOver').on('click', function(){
	questionCount = 0;
	correctAnswers = 0;
	wrongAnswers = 0;
	
	$('#end').hide();

	displayQuestion();
});






displayStartScreen();