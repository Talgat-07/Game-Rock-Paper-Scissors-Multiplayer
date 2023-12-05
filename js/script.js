const container = document.querySelector('.container'),
	isTextContent = document.querySelectorAll('.textContent p'),
	isFoundation = document.querySelectorAll('.foundation span'),
	isUser = document.querySelector('.result__user'),
	isCpu = document.querySelector('.result__cpu'),
	isLang = document.querySelector('.isLang p'),
	isRock = document.querySelector('.p__rock'),
	isScissors = document.querySelector('.p__scissors'),
	isPaper = document.querySelector('.p__paper');

isLang.addEventListener('click', () => {
	switch (true) {
		case isLang.textContent == 'RU':
			isLang.textContent = 'EN';
			isTextContent[0].textContent = 'Ждать...';
			isRock.textContent = 'Камень';
			isScissors.textContent = 'Ножницы';
			isPaper.textContent = 'Бумага';
			break;
			case isLang.textContent == 'EN':
			isTextContent[0].textContent = 'Wait...';
			isRock.textContent = 'Rock';
			isScissors.textContent = 'Scissors';
			isPaper.textContent = 'Paper';
			isLang.textContent = 'RU';
			break;
		default:
			break;
	}
});

isFoundation.forEach((el, i) => {
	el.addEventListener('click', () => {
		el.classList.add('active');
		isFoundation.forEach((el2, i2) => {
			i !== i2 && el2.classList.remove('active');
			let timeRemove = setTimeout(() => {
				el2.classList.remove('active');
			}, 2500);
		});

		container.classList.add('start');

		isUser.src = 'img/rock.png';
		isCpu.src = 'img/rock.png';

		if (isLang.textContent == 'RU') {
			isTextContent[0].textContent = 'Wait...';

			let time = setTimeout(() => {
				container.classList.remove('start');
				const isImg = el.querySelector('img').src;
				isUser.src = isImg;

				let cpuRandom = Math.round(Math.random() * 2);
				const cpuSrc = ['img/rock.png', 'img/scissors.png', 'img/paper.png'];
				isCpu.src = cpuSrc[cpuRandom];

				const userValue = ['R', 'S', 'P'][i],
					cpuValue = ['R', 'S', 'P'][cpuRandom],
					victory = {
						RR: 'Match Draw!',
						RS: 'User Won!',
						RP: 'Cpu Won!',
						SS: 'Match Draw!',
						SR: 'Cpu Won!',
						SP: 'User Won!',
						PP: 'Match Draw!',
						PR: 'User Won!',
						PS: 'Cpu Won!',
					};

				let vin = victory[userValue + cpuValue];

				isTextContent[0].textContent = vin;
			}, 2500);
		} else if (isLang.textContent == 'EN') {
			isTextContent[0].textContent = 'Ждать...';

			let time = setTimeout(() => {
				container.classList.remove('start');
				const isImg = el.querySelector('img').src;
				isUser.src = isImg;

				let cpuRandom = Math.round(Math.random() * 2);
				const cpuSrc = ['img/rock.png', 'img/scissors.png', 'img/paper.png'];
				isCpu.src = cpuSrc[cpuRandom];

				const userValue = ['R', 'S', 'P'][i],
					cpuValue = ['R', 'S', 'P'][cpuRandom],
					victory = {
						RR: 'Ничья!',
						RS: 'Вы победили!',
						RP: 'ЦП выиграл!',
						SS: 'Ничья!',
						SR: 'ЦП выиграл!',
						SP: 'Вы победили!',
						PP: 'Ничья!',
						PR: 'Вы победили!',
						PS: 'ЦП выиграл!',
					};

				let vin = victory[userValue + cpuValue];

				isTextContent[0].textContent = vin;
			}, 2500);
		}
	});
});
