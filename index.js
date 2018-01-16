const quizQuestions = [
	{
		question: 'What is Rick\'s last name ?',
	answers: ['Sanchez', 'Smith', 'Solenya', 'Rubin'],
	correctAnswer : 'Sanchez'
	},
	{
		question: 'What item helps Rick travel between universes?',
	answers: ['Tin Can', 'Halzinger', 'Microverse Battery', 'Portal Gun'],
	correctAnswer : 'Portal Gun'
	},
	{
		question: 'Jerry Smith is a huge fan of which nautical movie?',
	answers: ['Jaws', 'Titanic', 'Finding Nemo', 'The Love Boat'],
	correctAnswer : 'Titanic'
	},
	{
		question: 'What name did the Smiths give their pet dog?',
	answers: ['Snowball', 'Morty Jr', 'Snuffles', 'Bill'],
	correctAnswer : 'Snuffles'
	},
	{
		question: 'This Freddy Kruger-like character shows up in Season 1 Ep. 2.',
	answers: ['Zeep Xanflorp', 'Scary Terry', 'Krombopulos Michael', 'Worldender'],
	correctAnswer : 'Scary Terry'
	},
	{
		question: 'What would Jerry have to donate to save Shrimply Pibbles life in Season 2 Ep. 8?',
	answers: ['His Heart', 'His Nipples', 'His Eyeholes', 'His Penis'],
	correctAnswer : 'His Penis'
	},
	{
		question: 'What is the last name of the prinicpal of Morty and Summers school?',
	answers: ['Prinicpal Vagina', 'Prinicpal Goldenfold', 'Prinicpal Feratu', 'Prinicpal Gene'],
	correctAnswer : 'Prinicpal Vagina'
	},
	{
		question: 'What is the sauce Rick is goes crazy about at the end of episode 3 – 1?',
	answers: ['Tarzan Verde Sauce', 'Aladdin\'s hummus', 'Mulan Szechuan Sauce', 'Snow White Sauce'],
	correctAnswer : 'Mulan Szechuan Sauce'
	},
	{
		question: 'Who is Morty\'s crush in school??',
	answers: ['Tricia', 'Jessica', 'Stacy', 'Jacqueline'],
	correctAnswer : 'Jessica'
	},
	{	
		question: 'What would Rick and Morty rather play than help the president?',
	answers: ['Call of Duty', 'Terraria', 'Roy: A Life Well Lived', 'Minecraft'],
	correctAnswer : 'Minecraft'
	}
	];

let currentIndex = 0;
let currentStreak = 0;
let currentCorrect = 0;
let currentQuestion = 1;

//-----start quiz functions
function startQuiz() {
	$('button.start-page').click(function(){
		$('section.questions-page').removeClass('hidden');
		$('section.start-page').addClass('hidden');
		renderQuestionsPage();
		});
}	

//-----render Q&A functions
function renderQuestionsPage() {
	//add access key to buttons
	const question = currentQuest();
	$('section.questions-page').html
	(`
	<header role="heading" class="questions-page-header">Progress Bar ${currentCorrect * 10}% Streak ${currentStreak} Question ${currentQuestion}/10</header>
		<p role="status"class="questions-page-para question">${question.question}</p>
		<form role="list" class = 'answers-form'>
			<div role="group" class="button1 div">
				<span role="listitem" class="answer1 span">${question.answers[0]}</span>
				<input role="button" class="questions-page button button1" type="button" value="answers 1">
			</div>
			<div role="group" class="button2 div">
				<span role="listitem" class="answer2 span">${question.answers[1]}</span>
				<input role="button" class="questions-page button button2" type="button" value="answers 2">
			</div>
			<div role="group" class="button3 div">
				<span role="listitem" class="answer3 span">${question.answers[2]}</span>
				<input role="button" class="questions-page button button3" type="button" value="answers 3">
			</div>
			<div role="group" class="button4 div">
				<span role="listitem" class="answer4 span">${question.answers[3]}</span>
				<input role="button" class="questions-page button button4" type="button" value="answers 4">
			</div>
		</form>
	`);
}

function currentQuest() {
	const quest = quizQuestions[currentIndex];
	return quest;
}

function answerCheck(answerChoose) {
	const answer = currentQuest();
	return answer.correctAnswer === answerChoose;
}
		
//-----render result of answer of question just asked functions
function renderResult() {
	$('section.questions-page').on('click', '.button', function(event){
		$('section.modal-page').removeClass('hidden');
		$('section.questions-page').addClass('modal-render');
		const answerPicked = $(this).siblings('span').html();
		const question1 = currentQuest();
		if (answerCheck(answerPicked)) {
			$('section.modal-page').html(`
				<header role="heading" class="modal-page-header">Correct</header>
  				<img role="img" src="https://media.giphy.com/media/xT0xeHxJS9SNIXw568/giphy.gif" alt="gif of thousand ants making a 3 pointer" class="img">
  				<button role="checkbox" class="modal-page button">Continue</button>
			`);
			currentStreak ++;
			currentCorrect ++;
			currentQuestion ++;
		}
		
		else {
			$('section.modal-page').html(`
				<header role="heading" class="modal-page-header">Incorrect</header>
  				<img role="img" src="https://media.giphy.com/media/xT0xekPgV0OgNfcbuw/giphy.gif" alt="gif of morty scratching his head saying aww jezz okay">
  				<p role="status"class="modal-page-para">The correct answer was ${question1.correctAnswer}</p>
  				<button role="checkbox" class="modal-page button">Continue</button>
			`);
			currentStreak = 0;
			currentQuestion ++;
		}
	});
}

//-----reset Quiz& conclusion of quiz functions
function handleContinue() {
	$('section.modal-page').on('click', '.button', function(event){
		currentIndex ++;
		$('section.modal-page').addClass('hidden');
		$('section.questions-page').removeClass('modal-render');
		if (currentIndex === 10) { 
			if (currentCorrect >= 7) {
			$('section.conclusion-page').html(`
			<header role="heading" class="conclusion-page-header">You got ${currentCorrect} out of 10</header>
   			<img role="img" src="https://media.giphy.com/media/xT0xenj88WvnPR8ZcQ/giphy.gif" alt="some pic of approval">
   			<button role="checkbox" class="conclusion-page button">Try again</button>
   			`)} else  { 
   			$('section.conclusion-page').html(`
			<header role="heading" class="conclusion-page-header">You got ${currentCorrect} out of 10</header>
   			<img role="img" src="https://media.giphy.com/media/l3mZ29dYL4N4oOiJy/giphy.gif" alt="some pic of disapproval">
   			<button role="checkbox" class="conclusion-page button">Try again</button>
   			`)}
			$('section.conclusion-page').removeClass('hidden');
			$('section.questions-page').addClass('hidden');
		} else {
			renderQuestionsPage();
			}
	});
}

function renderReset() {
	$('section.conclusion-page').on('click', '.button', function(event){
		$('section.conclusion-page').addClass('hidden');
		$('section.questions-page').removeClass('hidden');
		currentIndex = 0;
		currentStreak = 0;
		currentCorrect = 0;
		currentQuestion = 1;
		renderQuestionsPage();
		});
}
	
startQuiz()
renderResult()
handleContinue()
renderReset()