const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
	{
		id: 0,
		text: "Pick a vacation destination:",
		answers: [
			{
				text: "New York",
				image:
					"https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
				alt: "Empire state building",
				credit: "John Doe",
			},
			{
				text: "Austin",
				image:
					"https://images.unsplash.com/photo-1557335200-a65f7f032602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80",
				alt: "Austin",
				credit: "John Doe",
			},
			{
				text: "Portland",
				image:
					"https://images.unsplash.com/photo-1582203410996-f2af25fb9776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
				alt: "Portland",
				credit: "John Doe",
			},
			{
				text: "New Orleans",
				image:
					"https://images.unsplash.com/photo-1568693059993-a239b9cd4957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
				alt: "New Orleans",
				credit: "John Doe",
			},
		],
	},

	{
		id: 1,
		text: "Pick some food:",
		answers: [
			{
				text: "Pizza",
				image:
					"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				alt: "Pizza",
				credit: "John Doe",
			},
			{
				text: "Sandwich",
				image:
					"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
				alt: "Sandwich",
				credit: "John Doe",
			},
			{
				text: "Pasta",
				image:
					"https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80",
				alt: "Pasta",
			},
			{
				text: "Hamburger",
				image:
					"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
				alt: "Hamburger",
				credit: "John Doe",
			},
		],
	},
	{
		id: 2,
		text: "Pick a home:",
		answers: [
			{
				text: "Traditional",
				image:
					"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				alt: "Traditional",
				credit: "John Doe",
			},

			{
				text: "Modern",
				image:
					"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				alt: "Modern",
				credit: "John Doe",
			},

			{
				text: "House",
				image:
					"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
				alt: "House",
				credit: "John Doe",
			},

			{
				text: "Cabin",
				image:
					"https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				alt: "Cabin",
				credit: "John Doe",
			},
		],
	},
];

const answers = [
	{
		combination: ["New York", "Pizza", "Traditional"],
		text: "Blue Cheese",
		image:
			"https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		alt: "Blue Cheese",
	},
	{
		combination: ["Austin", "Pasta", "Modern"],
		text: "Cheddar",
		image:
			"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
		alt: "Cheddar",
	},
	{
		combination: ["Portland", "Sandwich", "Cabin"],
		text: "Feta Cheese",
		image:
			"https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80",
		alt: "Feta Cheese",
	},
	{
		combination: ["New Orleans", "Hamburger", "House"],
		text: "Halloumi Cheese",
		image:
			"https://images.unsplash.com/photo-1598167912234-02576c0c5f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		alt: "Halloumi Cheese",
	},
];

const unansweredQuestions = [];
const chosenAnswers = [];

const populateQuestions = () => {
	questions.forEach((question) => {
		const titleBlock = document.createElement("div");
		titleBlock.id = question.id;
		titleBlock.classList.add("title-block");
		const titleHeading = document.createElement("h2");
		titleHeading.textContent = question.text;
		titleBlock.append(titleHeading);
		questionDisplay.append(titleBlock);

		unansweredQuestions.push(question.id);

		const answersBlock = document.createElement("div");
		answersBlock.id = question.id + "-questions";
		answersBlock.classList.add("answer-options");

		question.answers.forEach((answer) => {
			let answerBlock = document.createElement("div");
			answerBlock.classList.add("answer-block");
			answerBlock.addEventListener("click", () =>
				handleClick(question.id, answer.text)
			);
			let answerImage = document.createElement("img");
			answerImage.setAttribute("src", answer.image);
			answerImage.setAttribute("alt", answer.alt);

			let answerTitle = document.createElement("h3");
			answerTitle = answer.text;

			let answerInfo = document.createElement("p");
			let imageLink = document.createElement("a");
			imageLink.setAttribute("href", answer.credit);
			imageLink.textContent = answer.credit;
			let sourceLink = document.createElement("a");
			sourceLink.textContent = "Unsplash";
			sourceLink.setAttribute("src", "https://www.unsplash.com");
			answerInfo.append(imageLink, " to ", sourceLink);

			answerBlock.append(answerImage, answerTitle, answerInfo);

			answersBlock.append(answerBlock);
		});

		questionDisplay.append(answersBlock);
	});
};

populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
	if (unansweredQuestions.includes(questionId))
		chosenAnswers.push(chosenAnswer);
	const itemToremove = unansweredQuestions.indexOf(questionId);

	if (itemToremove > -1) {
		unansweredQuestions.splice(itemToremove, 1);
	}
	console.log(chosenAnswers);
	console.log(unansweredQuestions);

	disableQuestionBlock(questionId, chosenAnswer);
	const lowestQuestionId = Math.min(...unansweredQuestions);
	location.href = "#" + lowestQuestionId;

	if (!unansweredQuestions.length) {
		showAnswer();
	}
};

const showAnswer = () => {
	let result;
	answers.forEach((answer) => {
		if (
			chosenAnswers.includes(answer.combination[0]) +
			chosenAnswers.includes(answer.combination[1]) +
			chosenAnswers.includes(answer.combination[2])
		) {
			result = answer;
			return;
		} else if (!result) {
			result = answers[0];
		}
	});

	const answerBlock = document.createElement("div");
	answerBlock.classList.add("result-block");
	const answerTitle = document.createElement("h3");
	answerTitle.textContent = result.text;
	const answerImage = document.createElement("img");
	answerImage.setAttribute("src", result.image);
	answerImage.setAttribute("alt", result.alt);
	// answerImage.classList.add('')

	answerBlock.append(answerTitle, answerImage);

	answerDisplay.append(answerBlock);

	const allAnswerBlocks = document.querySelectorAll(".answer-block");
	// Array.from(allAnswerBlocks).forEach((answerBlock) =>
	// 	answerBlock.replaceWith(answerBlock.cloneNode())
	// );
};

const disableQuestionBlock = (questionId, chosenAnswer) => {
	const currentQuestionBlock = document.getElementById(
		questionId + "-questions"
	);

	Array.from(currentQuestionBlock.children).forEach((block) => {
		if (block.children.item(1).innerText !== chosenAnswer) {
			block.getElementsByClassName.opacity = "50%";
		}
	});
};
